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
    id: number;
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
            sortedUsers.sort((a, b) => a.id - b.id);
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

    const handleEditUser = (userId: number) => {
        navigate(`/editUsers/${userId}`);
    };

    const handleDeleteUser = (userId: number) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, elimínalo"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(userId));
                setFilteredUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
                Swal.fire("¡Eliminado!", "El usuario ha sido eliminado.", "success");
            }
        });
    };

    const userColumns: Column[] = [
        { 
            headerColumn: 'Foto', 
            renderColumn: (rowData: User) => <img src={rowData.foto} alt="User" style={{ width: '50px', height: 'auto' }} /> 
        },
        { headerColumn: 'Nombre completo', columnsData: 'name' },
        { headerColumn: 'ID de empleado', columnsData: 'id' },
        { headerColumn: 'Email', columnsData: 'email' },
        { headerColumn: 'Fecha de inicio', columnsData: 'startDate' },
        { headerColumn: 'Descripción', columnsData: 'description' },
        { headerColumn: 'Contacto', columnsData: 'contact' },
        { 
            headerColumn: 'Estado', 
            columnsData: 'status', 
            columnRenderer: (row: User) => (
                <ButtonStyles styled={row.status === 'ACTIVE' ? 'roomAvailable' : 'roomBooked'}>
                    {row.status}
                </ButtonStyles>
            )
        },
        {
            headerColumn: 'Acción',
            columnsData: 'action',
            columnRenderer: (row: User) => (
                <>
                    <MdOutlineEdit style={{ marginRight: '1rem' }} onClick={() => handleEditUser(row.id)} />
                    <AiOutlineDelete onClick={() => handleDeleteUser(row.id)} />
                </>
            )
        },
    ];

    return (
        <NavbarComponent>
            {userStatus === 'pending' ? <p>Cargando...</p> : userStatus === 'rejected' ? <p>Error al cargar usuarios...</p> :
                <>
                    <SectionOrder>
                        <List>
                            <ItemList onClick={handleClickAll}>Todos los empleados</ItemList>
                            <ItemList onClick={handleClickActive}>Empleados activos</ItemList>
                            <ItemList onClick={handleClickInactive}>Empleados inactivos</ItemList>
                        </List>
                        <ButtonStyles styled='new' onClick={() => navigate('/newUsers')}>+ Nuevo Usuario</ButtonStyles>
                        <SelectStyled onChange={handleSortChange}>
                            <option value='startDate'>Fecha de inicio</option>
                            <option value='name'>Nombre completo</option>
                        </SelectStyled>
                    </SectionOrder>
                    <TableComponent columns={userColumns} data={filteredUsers} />
                </>
            }
        </NavbarComponent>
    );
};
