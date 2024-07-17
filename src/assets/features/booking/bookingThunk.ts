// import { createAsyncThunk } from "@reduxjs/toolkit";
// import data from '../../../data/booking.json';



// export const BookingsThunk = createAsyncThunk ('bookings/getBookings', async ()=>{
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         resolve(data);
//         }, 1000); 
//     });
// })


import { createAsyncThunk } from "@reduxjs/toolkit";
import data from '../../../data/booking.json';
import { Booking } from './bookingSlice'; // Asegúrate de importar Booking

export const BookingsThunk = createAsyncThunk<Booking[]>('bookings/getBookings', async () => {
    return new Promise<Booking[]>((resolve) => {
        setTimeout(() => {
            resolve(data as unknown as Booking[]);
        }, 1000);
    });
});


