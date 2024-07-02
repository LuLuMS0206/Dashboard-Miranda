import { createAsyncThunk } from "@reduxjs/toolkit";
import data from '../../../data/booking.json';



export const BookingsThunk = createAsyncThunk ('bookings/getBookings', async ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(data);
        }, 1000); 
    });
})