import React, { useState, useEffect } from "react";
import { ButtonStyles } from "../../components/buttonComponent/buttonComponent";
import { NavbarComponent } from "../../components/navbarComponent/navbarComponent";
import { TableComponent } from "../../components/tableComponent/tableComponent";
import { SectionOrder, List, ItemList, SelectStyled } from "../../components/styledGeneric/styledGeneric";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteUser, getUsersStatus, getUsersError, getUsersList } from '../../assets/features/user/userSlice';
import { UserThunk } from './../../assets/features/user/userThunk';
import { AppDispatch } from './../../store/store'; 

interface User {
    id: string;
    name: string;
    email: string;
    startDate: string;
    description: string;
    contact: string;
    status: 'ACTIVE' | 'INACTIVE';
    foto: string;
}

interface Column {
    headerColumn: string;
    columnsData?: string; 
    renderColumn?: (rowData: User) => JSX.Element;
    columnRenderer?: (row: User) => JSX.Element;
}

export const UserPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const userStatus = useSelector(getUsersStatus) || 'idle';
    const usersError = useSelector(getUsersError) || null;
    const usersList: User[] = useSelector(getUsersList) || [];
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

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

    const sortUsersHandler = (value: string) => {
        const sortedUsers = [...filteredUsers];

        if (value === 'startDate') {
            sortedUsers.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
        } else if (value === 'name') {
            sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            sortedUsers.sort((a, b) => Number(a.id) - Number(b.id));
        }

        setFilteredUsers(sortedUsers);
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        sortUsersHandler(value);
    };

    const handleClickAll = () => {
        setFilteredUsers(usersList);
    };

    const handleClickActive = () => {
        setFilteredUsers(usersList.filter(user => user.status === 'ACTIVE'));
    };

    const handleClickInactive = () => {
        setFilteredUsers(usersList.filter(user => user.status === 'INACTIVE'));
    };

    const handleEditUser = (userId: string) => {
        navigate(`/editUsers/${userId}`);
    };

    const handleDeleteUser = (userId: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(userId));
                setFilteredUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
                Swal.fire("Deleted!", "The user has been deleted.", "success");
            }
        });
    };

    const userColumns: Column[] = [
        { 
            headerColumn: 'Photo', 
            renderColumn: (rowData: User) => <img src={rowData.foto} alt="User" style={{ width: '50px', height: 'auto' }} /> 
        },
        { headerColumn: 'Full Name', columnsData: 'name' },
        { headerColumn: 'Employee ID', columnsData: 'id' },
        { headerColumn: 'Email', columnsData: 'email' },
        { headerColumn: 'Start Date', columnsData: 'startDate' },
        { headerColumn: 'Description', columnsData: 'description' },
        { headerColumn: 'Contact', columnsData: 'contact' },
        { 
            headerColumn: 'Status', 
            columnsData: 'status', 
            columnRenderer: (row: User) => (
                <ButtonStyles styled={row.status === 'ACTIVE' ? 'roomAvailable' : 'roomBooked'}>
                    {row.status}
                </ButtonStyles>
            )
        },
        {
            headerColumn: 'Action',
            columnsData: 'action',
            columnRenderer: (row: User) => (
                <>
                    <MdOutlineEdit style={{ marginRight: '1rem' }} onClick={(e) => { e.stopPropagation(); handleEditUser(row.id); }} />
                    <AiOutlineDelete onClick={(e) => { e.stopPropagation(); handleDeleteUser(row.id); }} />
                </>
            )
        },
    ];

    const handleRowClick = (row: User) => {
        navigate(`/editUsers/${row.id}`);
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
                            <option value='startDate'>Start Date</option>
                            <option value='name'>Full Name</option>
                        </SelectStyled>
                    </SectionOrder>
                    <TableComponent columns={userColumns} data={filteredUsers} onRowClick={handleRowClick} />
                </>
            }
        </NavbarComponent>
    );
};
