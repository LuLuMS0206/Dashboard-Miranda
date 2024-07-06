import { createAsyncThunk } from "@reduxjs/toolkit";
import data from './../../../data/contact.json';



export const ContactThunk = createAsyncThunk ('contact/getContact', async ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(data);
        }, 1000); 
    });
})