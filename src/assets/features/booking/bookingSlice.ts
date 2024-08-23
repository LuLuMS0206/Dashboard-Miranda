import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookingsThunk, getBookingThunk, removeBookingThunk, addBookingThunk, updateBookingThunk } from './bookingThunk';

export interface Booking {
    id: number;
    guest: string;
    checkIn: string;
    checkOut: string;
    roomType: string;
    specialRequest: string;
    status: string;
    orderDate: string;
}

interface BookingState {
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string | null;
    bookings: Booking[];
    booking: Booking | null;
}

const initialState: BookingState = {
    status: 'idle',
    error: null,
    bookings: [],
    booking: null,
};

export const BookingSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(BookingsThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(BookingsThunk.fulfilled, (state, action: PayloadAction<Booking[]>) => {
                state.status = 'fulfilled';
                state.bookings = action.payload;
            })
            .addCase(BookingsThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || null;
            })
            // para obtener un booking
            .addCase(getBookingThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getBookingThunk.fulfilled, (state, action: PayloadAction<Booking>) => {
                state.status = 'fulfilled';
                state.booking = action.payload;
            })
            .addCase(getBookingThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || null;
            })
            // para eliminar un booking
            .addCase(removeBookingThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(removeBookingThunk.fulfilled, (state, action: PayloadAction<Booking>) => {
                state.status = 'fulfilled';
                state.bookings = state.bookings.filter(booking => booking.id !== action.payload.id);
            })
            .addCase(removeBookingThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || null;
            })
            // para añadir un booking
            .addCase(addBookingThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(addBookingThunk.fulfilled, (state, action: PayloadAction<Booking>) => {
                state.status = 'fulfilled';
                state.bookings.push(action.payload);
            })
            .addCase(addBookingThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || null;
            })
            // para actualizar un booking
            .addCase(updateBookingThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(updateBookingThunk.fulfilled, (state, action: PayloadAction<Booking>) => {
                state.status = 'fulfilled';
                state.bookings = state.bookings.map(booking =>
                    booking.id === action.payload.id ? action.payload : booking
                );
            })
            .addCase(updateBookingThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || null;
            });
    },
});

export const getBookingSlice = (state: { bookings: BookingState }) => state.bookings.bookings;
export const getBooking = (state: { bookings: BookingState }) => state.bookings.booking;
export const getBookingsStatus = (state: { bookings: BookingState }) => state.bookings.status;
export const getBookingsError = (state: { bookings: BookingState }) => state.bookings.error;

export default BookingSlice.reducer;
