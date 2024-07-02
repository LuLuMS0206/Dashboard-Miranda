
import { createSlice } from '@reduxjs/toolkit';
import { RoomsThunk } from './roomThunk';


export const RoomSlice = createSlice({
    name: 'rooms',
    initialState: {
        status: 'idle',
        error: null,
        rooms: [],  
        room: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(RoomsThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(RoomsThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.bookings = action.payload;
            })
            .addCase(RoomsThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error;
            });
    },
});


export const getRoomSlice = (state) => state.rooms.rooms;
export const getRoom = (state) => state.rooms.room;
export const getRoomsStatus = (state) => state.rooms.status;
export const getRoomsError = (state) => state.rooms.error;
