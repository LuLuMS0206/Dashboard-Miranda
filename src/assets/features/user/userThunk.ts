// import { createAsyncThunk } from "@reduxjs/toolkit";
// import data from '../../../data/users.json';


// export const UserThunk = createAsyncThunk ('user/getUser', async ()=>{
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         resolve(data);
//         }, 1000); 
//     });
// })

import { createAsyncThunk } from "@reduxjs/toolkit";
import data from '../../../data/users.json';
import { User } from './userSlice'; 

export const UserThunk = createAsyncThunk<User[]>('user/getUser', async () => {
    return new Promise<User[]>((resolve) => {
        setTimeout(() => {
            resolve(data  as unknown as User[]);
        }, 1000); 
    });
});
