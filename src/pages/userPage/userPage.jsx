import { ButtonStyles } from "../../components/buttonComponent/buttonComponent";
import { NavbarComponent } from "../../components/navbarComponent/navbarComponent";
import { TableComponent } from "../../components/tableComponent/tableComponent";
import data from "./../../data/users.json";
import { useState, useEffect } from "react";
import { SectionOrder, List, ItemList, SelectStyled } from "../../components/styledGeneric/styledGeneric";

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
        }
    ];

    const [users, setUsers] = useState(data);

    useEffect(() => {
        sortUsersHandler('id');
    }, []);

    const sortUsersHandler = (value) => {
        let sortedUsers = [...data];

        if (value === 'startDate') {
            sortedUsers = sortedUsers.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        } else if (value === 'name') {
            sortedUsers = sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            sortedUsers = sortedUsers.sort((a, b) => a.id - b.id);
        }

        setUsers(sortedUsers);
    };

    const handleSortChange = (event) => {
        const value = event.target.value;
        sortUsersHandler(value);
    };

    const handleClickAll = () => {
        setUsers(data);
    };

    const handleClickActive = () => {
        const filteredUsers = data.filter(user => user.status === 'ACTIVE');
        setUsers(filteredUsers);
    };

    const handleClickInactive = () => {
        const filteredUsers = data.filter(user => user.status === 'INACTIVE');
        setUsers(filteredUsers);
    };

    return (
        <NavbarComponent>
            <SectionOrder>
                <List>
                    <ItemList onClick={handleClickAll}>All Employees</ItemList>
                    <ItemList onClick={handleClickActive}>Active Employee</ItemList>
                    <ItemList onClick={handleClickInactive}>Inactive Employee</ItemList>
                </List>
                <ButtonStyles styled='new'>+ New User</ButtonStyles>
                <SelectStyled onChange={handleSortChange}>
                    <option value='startDate'>Start date</option>
                    <option value='name'>Full name</option>
                </SelectStyled>
            </SectionOrder>
            <TableComponent columns={userColumns} data={users} />
        </NavbarComponent>
    );
};
