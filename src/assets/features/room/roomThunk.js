import { createAsyncThunk } from "@reduxjs/toolkit";
import data from '../../../data/rooms.json';



export const RoomsThunk = createAsyncThunk ('rooms/getRooms', async ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(data);
        }, 1000); 
    });
})