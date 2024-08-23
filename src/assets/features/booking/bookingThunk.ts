// import { createAsyncThunk } from "@reduxjs/toolkit";
// import data from "../../../data/booking.json";
// import { Booking } from "./bookingSlice";
// import { getAuthToken } from './../../../auth/auth';

// export const BookingsThunk = createAsyncThunk<Booking[]>("bookings/getBookings",async() => {
//       const token = getAuthToken();
//       const request = await fetch("http://localhost:3001/bookings", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       const response = await request.json()
//       console.log(response);
//       return response
//     });

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Booking } from "./bookingSlice";
import { backendAPIcall } from "./../api";

// para mostrar 1
export const getBookingThunk = createAsyncThunk<Booking, string>("booking/getBooking", async (id) => {
    try {
        const booking: Booking = await backendAPIcall(`/bookings/${id}`);
        return booking;
    } catch (error) {
        throw new Error('Failed to fetch booking');
    }
});

//para mostrar todas 
export const BookingsThunk = createAsyncThunk('booking/getBookings', async () => {
    const bookings = await (backendAPIcall('/bookings')) as Booking[];
    return bookings;
});

// para eliminar
export const removeBookingThunk = createAsyncThunk<Booking, string>("booking/removeBooking", async (id) => {
    try {
        const booking: Booking = await backendAPIcall(`/bookings/delete/${id}`, "DELETE");
        return booking;
    } catch (error) {
        throw new Error('Failed to delete booking');
    }
});

// para añadir
export const addBookingThunk = createAsyncThunk<Booking, Partial<Booking>>("booking/addBooking", async (bookingData) => {
    try {
        const booking: Booking = await backendAPIcall(`/bookings/add`, "POST", bookingData);
        return booking;
    } catch (error) {
        throw new Error('Failed to add booking');
    }
});

// para actualizar
export const updateBookingThunk = createAsyncThunk<Booking, Booking>("booking/updateBooking", async (bookingData) => {
    try {
        const booking: Booking = await backendAPIcall(`/bookings/update/${bookingData.id}`, "PUT", bookingData);
        return booking;
    } catch (error) {
        throw new Error('Failed to update booking');
    }
});
