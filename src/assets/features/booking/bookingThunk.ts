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
        const booking: Booking = await backendAPIcall(`/bookings/${id}`);
        return booking;
});

//para mostrar todas 
export const BookingsThunk = createAsyncThunk('booking/getBookings', async () => {
    const bookings = await (backendAPIcall('/bookings')) as Booking[];
    return bookings;
});

// para eliminar
export const removeBookingThunk = createAsyncThunk<string, string>(
    "booking/removeBooking",
    async (id) => {
        await backendAPIcall(`/bookings${id}`, "DELETE");
        return id; 
    }
);


// para añadir
export const addBookingThunk = createAsyncThunk<Booking, Partial<Booking>>("booking/addBooking", async (bookingData) => {
        const booking: Booking = await backendAPIcall(`/bookings`, "POST", bookingData);
        return booking;

});
// Para actualizar un booking
export const updateBookingThunk = createAsyncThunk<Booking, Booking>(
    "booking/updateBooking",
    async (bookingData) => {
        const url = `/bookings/${bookingData._id}`;
        const booking: Booking = await backendAPIcall(url, "PUT", bookingData);
        return booking;
    }
);

