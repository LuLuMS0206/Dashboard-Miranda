import { NavbarComponent } from "../../components/navbarComponent/navbarComponent"
import { TableComponent } from "../../components/tableComponent/tableComponent"
import userData from "./../../data/users.json"


export const UserPage = () => {

    const userColumns = [
        { headerColumn: 'Foto', renderColumn: (rowData) => <img src={rowData.foto} alt="User" style={{ width: '50px', height: 'auto' }} /> },
        { headerColumn: 'Nombre completo', columnsData: 'name' },
        { headerColumn: 'ID de empleado', columnsData: 'id' },
        { headerColumn: 'Email', columnsData: 'email' },
        { headerColumn: 'Start Date', columnsData: 'startDate' },
        { headerColumn: 'Description', columnsData: 'description' },
        { headerColumn: 'Contact', columnsData: 'contact' },
        { headerColumn: 'Status', columnsData: 'status' }
    ];


    return(
        <NavbarComponent>
            <TableComponent columns={userColumns} data={userData} />
        </NavbarComponent>
    )
}