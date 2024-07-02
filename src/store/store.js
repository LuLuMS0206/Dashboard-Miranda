
import { configureStore } from '@reduxjs/toolkit';
import { BookingSlice } from '../assets/features/booking/bookingSlice';


export const store = configureStore({
    reducer: {
        // auth: authReducer,
        bookings: BookingSlice.reducer,
        // rooms: roomsReducer,
        // contacts: contactsReducer,
        // users: usersReducer,
        // dashboard: dashboardReducer,
    },
});

