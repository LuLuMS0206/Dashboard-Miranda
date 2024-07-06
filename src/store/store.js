
import { configureStore } from '@reduxjs/toolkit';
import { BookingSlice } from './../assets/features/booking/bookingSlice';
import {RoomSlice} from './../assets/features/room/roomSlice'
import {ContactSlice} from './../assets/features/contact/contactSlice'


export const store = configureStore({
    reducer: {
        // auth: authReducer,
        bookings: BookingSlice.reducer,
        rooms: RoomSlice.reducer,
        contact: ContactSlice.reducer,
        // users: usersReducer,
        // dashboard: dashboardReducer,
    },
});

