
import { configureStore } from '@reduxjs/toolkit';
import { BookingSlice } from './../assets/features/booking/bookingSlice';
import {RoomSlice} from './../assets/features/room/roomSlice'


export const store = configureStore({
    reducer: {
        // auth: authReducer,
        bookings: BookingSlice.reducer,
        rooms: RoomSlice.reducer,
        // contacts: contactsReducer,
        // users: usersReducer,
        // dashboard: dashboardReducer,
    },
});

