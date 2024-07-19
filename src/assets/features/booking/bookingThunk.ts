

import { createAsyncThunk } from "@reduxjs/toolkit";
import data from '../../../data/booking.json';
import { Booking } from './bookingSlice'; 

export const BookingsThunk = createAsyncThunk<Booking[]>('bookings/getBookings', async () => {
    return new Promise<Booking[]>((resolve) => {
        setTimeout(() => {
            resolve(data as unknown as Booking[]);
        }, 1000);
    });
});


