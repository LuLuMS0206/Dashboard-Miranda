import { NavbarComponent } from "../../components/navbarComponent/navbarComponent";
import { TableComponent } from "../../components/tableComponent/tableComponent";
import data from "../../data/contact.json";
import { useState } from "react";
import { SectionOrder, List, ItemList } from "../../components/styledGeneric/styledGeneric";
import { ButtonStyles } from "../../components/buttonComponent/buttonComponent";

export const ContactPage = () => {
    const contactColumns = [
        { headerColumn: 'Order ID', columnsData: 'id' },
        { headerColumn: 'Date', columnsData: 'date' },
        {
            headerColumn: 'Customer',
            renderColumn: (rowData) => (
                <div>
                    <div>{rowData.client.name}</div>
                    <div>{rowData.client.email}</div>
                </div>
            ),
        },
        { headerColumn: 'Subject', columnsData: 'subject' },
        { headerColumn: 'Comment', columnsData: 'comment' },
        { headerColumn: 'Actions', columnsData: '', columnRenderer: (row) => (
            row.archived === 'true' ? (
                <ButtonStyles styled='roomAvailable'>Publish</ButtonStyles>
            ) : (
                <ButtonStyles styled='roomBooked'>Archived</ButtonStyles>
            )
        )},
        
    ];

    const [contact, setContact] = useState(data);

    const handleClickAll = () => {
        setContact(data);
    };

    const handleClickArchive = () => {
        const filteredContact = data.filter(contact => contact.archived === true);
        setContact(filteredContact);
    };

    return (
        <NavbarComponent>
            <SectionOrder>
                <List>
                    <ItemList onClick={handleClickAll}>All contacts</ItemList>
                    <ItemList onClick={handleClickArchive}>Archived</ItemList>
                </List>
            </SectionOrder>
            <TableComponent columns={contactColumns} data={contact} />
        </NavbarComponent>
    );
};
