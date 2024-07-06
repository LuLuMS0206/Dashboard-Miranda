import { createSlice } from '@reduxjs/toolkit';
import { ContactThunk } from './contactThunk';

export const ContactSlice = createSlice({
    name: 'contact',
    initialState: {
        status: 'idle',
        error: null,
        contacts: [],
        contact: null,
    },
    reducers: {
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(ContactThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(ContactThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.contacts = action.payload;
            })
            .addCase(ContactThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    },
});

export const { deleteContact } = ContactSlice.actions;

// export const getContactsList = (state) => state.contacts.contacts;
// export const getContact = (state) => state.contacts.contact;
// export const getContactsStatus = (state) => state.contacts.status;
// export const getContactsError = (state) => state.contacts.error;
// export const selectContactById = (state, id) =>
//     state.contacts.contacts.find(contact => contact.id === id);

export const getContactsStatus = (state) => state.contact.status;
export const getContactsList = (state) => state.contact.contacts;
export const getContactsError = (state) => state.contact.error;