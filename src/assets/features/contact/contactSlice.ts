

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
