

import { NavbarComponent } from "./../../components/navbarComponent/navbarComponent";
import { TableComponent } from "../../components/tableComponent/tableComponent";
import { useState, useEffect } from "react";
import { SectionOrder, List, ItemList } from "../../components/styledGeneric/styledGeneric";
import { ButtonStyles } from "../../components/buttonComponent/buttonComponent";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContactsStatus, getContactsError, getContactsList } from "./../../assets/features/contact/contactSlice";
import {ContactThunk} from './../../assets/features/contact/contactThunk'

export const ContactPage = () => {
    const contactColumns = [
        { headerColumn: 'Order ID', columnsData: 'id' },
        { headerColumn: 'Date', columnsData: 'date' },
        {
            headerColumn: 'Customer',
            columnsData: '',
            columnRenderer: (rowData) => (
                <div>
                    <div>{rowData.client.name}</div>
                    <div>{rowData.client.email}</div>
                </div>
            ),
        },
        { headerColumn: 'Subject', columnsData: 'subject' },
        { headerColumn: 'Comment', columnsData: 'comment' },
        { headerColumn: 'Status', columnsData: 'status', columnRenderer: (row) => (
            row.status === 'public' ? (
                <ButtonStyles styled='roomAvailable'>Public</ButtonStyles>
            ) : (
                <ButtonStyles styled='roomBooked'>Archived</ButtonStyles>
            )
        )},
        {
            headerColumn: 'Action',
            columnsData: 'action',
            columnRenderer: (row) => (
                <>
                    <AiOutlineDelete onClick={() => handleDeleteContact(row.id)} />
                </>
            )
        },
    ];

    const contactStatus = useSelector(getContactsStatus) || 'idle';
    const contactsError = useSelector(getContactsError) || null;
    const contactsList = useSelector(getContactsList) || [];
    const dispatch = useDispatch();
    const [filteredContacts, setFilteredContacts] = useState([]);

    useEffect(() => {
        if (contactStatus === 'idle') {
            dispatch(ContactThunk());
        } else if (contactStatus === 'rejected') {
            console.error('Error fetching contacts:', contactsError);
        }
    }, [dispatch, contactStatus, contactsError]);

    useEffect(() => {
        setFilteredContacts(contactsList);
    }, [contactsList]);

    const handleClickAll = () => {
        setFilteredContacts(contactsList);
    };

    const handleClickArchive = () => {
        const filteredContact = contactsList.filter(contact => contact.status === "archived");
        setFilteredContacts(filteredContact);
    };

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContact(contactId));
        setFilteredContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
    };

    return (
        <NavbarComponent>
            {contactStatus === 'pending' ? <p>Loading...</p> : contactStatus === 'rejected' ? <p>Error loading contacts...</p> :
                <>
                    <SectionOrder>
                        <List>
                            <ItemList onClick={handleClickAll}>All contacts</ItemList>
                            <ItemList onClick={handleClickArchive}>Archived</ItemList>
                        </List>
                    </SectionOrder>
                    <TableComponent columns={contactColumns} data={filteredContacts} />
                </>
            }
        </NavbarComponent>
    );
};
