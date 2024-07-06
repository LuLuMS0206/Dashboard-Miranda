import { createAsyncThunk } from "@reduxjs/toolkit";
import data from '../../../data/users.json';


export const UserThunk = createAsyncThunk ('user/getUser', async ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(data);
        }, 1000); 
    });
})