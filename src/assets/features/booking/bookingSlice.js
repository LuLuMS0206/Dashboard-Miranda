


import { createSlice } from '@reduxjs/toolkit';
import { BookingsThunk } from './bookingThunk';

export const BookingSlice = createSlice({
    name: 'bookings',
    initialState: {
        status: 'idle',
        error: null,
        bookings: [],
        booking: null,
    },
    reducers: {
        addBookings: (state, action) => {
            state.bookings.push(action.payload);
        },
        setBookings: (state, action) => {
            state.bookings = action.payload;
        },
        setSelectedBooking: (state, action) => {
            state.booking = action.payload;
        },
        
        updateBooking: (state, action) => {
            console.log(action.payload)
            const updatedBooking = action.payload;
            state.bookings = state.bookings.map(booking =>
                booking.id === updatedBooking.id ? updatedBooking : booking
            );
        },

        createBooking: (state, action) => {
            state.bookings.push({ ...action.payload, id: state.bookings.length + 1 });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(BookingsThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(BookingsThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.bookings = action.payload;
            })
            .addCase(BookingsThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    },
});

export const { setBookings, setSelectedBooking, updateBooking, createBooking } = BookingSlice.actions;

export const getBookingSlice = (state) => state.bookings.bookings;
export const getBooking = (state) => state.bookings.booking;
export const getBookingsStatus = (state) => state.bookings.status;
export const getBookingsError = (state) => state.bookings.error;
export const getBookingById = (state, id) => state.bookings.bookings.find(booking => booking.id === id);
