
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact } from './contactSlice'; 
import data from '../../../data/contact.json';

export const ContactThunk = createAsyncThunk<Contact[]>('contact/getContact', async () => {
    return new Promise<Contact[]>((resolve) => {
        setTimeout(() => {
            resolve(data as unknown as Contact[]);
        }, 1000);
    });
});



