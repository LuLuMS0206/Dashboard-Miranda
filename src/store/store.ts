
import { configureStore } from '@reduxjs/toolkit';
import { BookingSlice } from './../assets/features/booking/bookingSlice';
import {RoomSlice} from './../assets/features/room/roomSlice'
import {ContactSlice} from './../assets/features/contact/contactSlice'
import {UserSlice} from './../assets/features/user/userSlice'


export const store = configureStore({
    reducer: {
        // auth: authReducer,
        bookings: BookingSlice.reducer,
        rooms: RoomSlice.reducer,
        contact: ContactSlice.reducer,
        users: UserSlice.reducer,
        // dashboard: dashboardReducer,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];