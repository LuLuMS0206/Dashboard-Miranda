import { ButtonStyles } from "../../components/buttonComponent/buttonComponent";
import { NavbarComponent } from "./../../components/navbarComponent/navbarComponent";
import { TableComponent } from "../../components/tableComponent/tableComponent";
import { useState, useEffect } from "react";
import { SectionOrder, List, ItemList, SelectStyled } from "../../components/styledGeneric/styledGeneric";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteUser, getUsersStatus, getUsersError, getUsersList } from './../../assets/features/user/userSlice';
import { UserThunk } from './../../assets/features/user/userThunk';

export const UserPage = () => {
    const userColumns = [
        { 
            headerColumn: 'Foto', 
            renderColumn: (rowData) => <img src={rowData.foto} alt="User" style={{ width: '50px', height: 'auto' }} /> 
        },
        { headerColumn: 'Nombre completo', columnsData: 'name' },
        { headerColumn: 'ID de empleado', columnsData: 'id' },
        { headerColumn: 'Email', columnsData: 'email' },
        { headerColumn: 'Start Date', columnsData: 'startDate' },
        { headerColumn: 'Description', columnsData: 'description' },
        { headerColumn: 'Contact', columnsData: 'contact' },
        { 
            headerColumn: 'Status', 
            columnsData: 'status', 
            columnRenderer: (row) => (
                row.status.trim().toUpperCase() === 'ACTIVE' ? (
                    <ButtonStyles styled='roomAvailable'>{row.status}</ButtonStyles>
                ) : (
                    <ButtonStyles styled='roomBooked'>{row.status}</ButtonStyles>
                )
            )
        },
        {
            headerColumn: 'Action',
            columnsData: 'action',
            columnRenderer: (row) => (
                <>
                    <MdOutlineEdit onClick={() => handleEditUser(row.id)} />
                    <AiOutlineDelete onClick={() => handleDeleteUser(row.id)} />
                </>
            )
        },
    ];

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userStatus = useSelector(getUsersStatus) || 'idle';
    const usersError = useSelector(getUsersError) || null;
    const usersList = useSelector(getUsersList) || [];
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        if (userStatus === 'idle') {
            dispatch(UserThunk());
        } else if (userStatus === 'rejected') {
            console.error('Error fetching users:', usersError);
        }
    }, [dispatch, userStatus, usersError]);

    useEffect(() => {
        setFilteredUsers(usersList);
    }, [usersList]);

    const sortUsersHandler = (value) => {
        let sortedUsers = [...filteredUsers];

        if (value === 'startDate') {
            sortedUsers.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        } else if (value === 'name') {
            sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            sortedUsers.sort((a, b) => a.id - b.id);
        }

        setFilteredUsers(sortedUsers);
    };

    const handleSortChange = (event) => {
        const value = event.target.value;
        sortUsersHandler(value);
    };

    const handleClickAll = () => {
        setFilteredUsers(usersList);
    };

    const handleClickActive = () => {
        const filteredUsers = usersList.filter(user => user.status === 'ACTIVE');
        setFilteredUsers(filteredUsers);
    };

    const handleClickInactive = () => {
        const filteredUsers = usersList.filter(user => user.status === 'INACTIVE');
        setFilteredUsers(filteredUsers);
    };

    const handleEditUser = (userId) => {
        navigate(`/editUsers/${userId}`);
    };

    const handleDeleteUser = (userId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(userId));
                setFilteredUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
                Swal.fire({
                    title: "Deleted!",
                    text: "The user has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    return (
        <NavbarComponent>
            {userStatus === 'pending' ? <p>Loading...</p> : userStatus === 'rejected' ? <p>Error loading users...</p> :
                <>
                    <SectionOrder>
                        <List>
                            <ItemList onClick={handleClickAll}>All Employees</ItemList>
                            <ItemList onClick={handleClickActive}>Active Employees</ItemList>
                            <ItemList onClick={handleClickInactive}>Inactive Employees</ItemList>
                        </List>
                        <ButtonStyles styled='new' onClick={() => navigate('/newUsers')}>+ New User</ButtonStyles>
                        <SelectStyled onChange={handleSortChange}>
                            <option value='startDate'>Start date</option>
                            <option value='name'>Full name</option>
                        </SelectStyled>
                    </SectionOrder>
                    <TableComponent columns={userColumns} data={filteredUsers} />
                </>
            }
        </NavbarComponent>
    );
};
