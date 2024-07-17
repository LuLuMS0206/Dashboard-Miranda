// import { createSlice } from '@reduxjs/toolkit';
// import { ContactThunk } from './contactThunk';

// export const ContactSlice = createSlice({
//     name: 'contact',
//     initialState: {
//         status: 'idle',
//         error: null,
//         contacts: [],
//         contact: null,
//     },
//     reducers: {
//         deleteContact: (state, action) => {
//             state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(ContactThunk.pending, (state) => {
//                 state.status = 'pending';
//             })
//             .addCase(ContactThunk.fulfilled, (state, action) => {
//                 state.status = 'fulfilled';
//                 state.contacts = action.payload;
//             })
//             .addCase(ContactThunk.rejected, (state, action) => {
//                 state.status = 'rejected';
//                 state.error = action.error.message;
//             });
//     },
// });

// export const { deleteContact } = ContactSlice.actions;

// // export const getContactsList = (state) => state.contacts.contacts;
// // export const getContact = (state) => state.contacts.contact;
// // export const getContactsStatus = (state) => state.contacts.status;
// // export const getContactsError = (state) => state.contacts.error;
// // export const selectContactById = (state, id) =>
// //     state.contacts.contacts.find(contact => contact.id === id);

// export const getContactsStatus = (state) => state.contact.status;
// export const getContactsList = (state) => state.contact.contacts;
// export const getContactsError = (state) => state.contact.error;

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
import { ContactThunk } from './contactThunk';

export interface Contact {
    id: number;
    date: string;
    client: {
        name: string;
        email: string;
    };
    subject: string;
    comment: string;
    status: 'public' | 'archived';
}

interface ContactState {
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string | null;
    contacts: Contact[];
    contact: Contact | null;
}

const initialState: ContactState = {
    status: 'idle',
    error: null,
    contacts: [],
    contact: null,
};

export const ContactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        deleteContact: (state, action: PayloadAction<number>) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(ContactThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(ContactThunk.fulfilled, (state, action: PayloadAction<Contact[]>) => {
                state.status = 'fulfilled';
                state.contacts = action.payload;
            })
            .addCase(ContactThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || 'Failed to fetch contacts';
            });
    },
});

export const { deleteContact } = ContactSlice.actions;

export const getContactsStatus = (state: RootState) => state.contact.status;
export const getContactsList = (state: RootState) => state.contact.contacts;
export const getContactsError = (state: RootState) => state.contact.error;

export default ContactSlice.reducer;
