import { NavbarComponent } from "../../components/navbarComponent/navbarComponent"
import { TableComponent } from "../../components/tableComponent/tableComponent"
import contactData from "./../../data/contact.json"


export const ContactPage = () => {

    const contactColumns = [
        { headerColumn: 'Order ID', columnsData: 'id' },
        { headerColumn: 'Date', columnsData: 'date' },
        { headerColumn: 'Customer',
            
            renderColumn: (rowData) => (
                <div>
                    <div>{rowData.client.name}</div>
                    <div>{rowData.client.email}</div>
                </div>
            ), 
        },
        { headerColumn: 'Subject', columnsData: 'subject' },
        { headerColumn: 'Comment', columnsData: 'comment' },
        { headerColumn: 'Action', columnsData: 'action'}
    ];

    return(
        <NavbarComponent>
            <TableComponent columns={contactColumns} data={contactData} />
        </NavbarComponent>
    )
}