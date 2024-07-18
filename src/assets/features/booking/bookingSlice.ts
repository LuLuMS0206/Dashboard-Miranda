
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookingsThunk } from './bookingThunk';

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
    reducers: {
        addBookings: (state, action: PayloadAction<Booking>) => {
            state.bookings.push(action.payload);
            console.log(state)
        },
        setBookings: (state, action: PayloadAction<Booking[]>) => {
            state.bookings = action.payload;
        },
        setSelectedBooking: (state, action: PayloadAction<Booking>) => {
            state.booking = action.payload;
        },
        updateBooking: (state, action: PayloadAction<Booking>) => {
            const updatedBooking = action.payload;
            state.bookings = state.bookings.map(booking =>
                booking.id === updatedBooking.id ? updatedBooking : booking
            );
            console.log(state.bookings)
        },
        createBooking: (state, action: PayloadAction<Omit<Booking, 'id'>>) => {
            const newBooking: Booking = { ...action.payload, id: state.bookings.length + 1 };
            state.bookings.push(newBooking);
        },
    },
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
            });
    },
});

export const { setBookings, setSelectedBooking, updateBooking, createBooking } = BookingSlice.actions;

export const getBookingSlice = (state: { bookings: BookingState }) => state.bookings.bookings;
export const getBooking = (state: { bookings: BookingState }) => state.bookings.booking;
export const getBookingsStatus = (state: { bookings: BookingState }) => state.bookings.status;
export const getBookingsError = (state: { bookings: BookingState }) => state.bookings.error;
    


export default BookingSlice.reducer;