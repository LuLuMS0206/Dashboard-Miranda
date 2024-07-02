
import { createSlice } from '@reduxjs/toolkit';
import { BookingsThunk } from './bookingThunk';


 export const BookingSlice = createSlice({
  name: 'bookings',
  initialState:  {
    status:'idle',
    error: null,
    bookings: [],
    booking: null,
  },

  reducers: {},
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
        state.error = action.error;
    })
  }
  
});

export const getBookingSlice = (state) => state.bookings.bookings
export const getBooking = (state) => state.bookings.booking
export const getBookingsStatus = (state) => state.bookings.status
export const getBookingsError = (state) => state.bookings.error

