
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
        addRoom: (state, action) => {
            state.rooms.push(action.payload);
        },
        editRoom: (state, action) => {
            const index = state.rooms.findIndex(room => room.id === action.payload.id);
            if (index !== -1) {
                state.rooms[index] = action.payload;
            }
        },
        deleteRoom: (state, action) => {
            state.rooms = state.rooms.filter(room => room.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(RoomsThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(RoomsThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.rooms = action.payload;
            })
            .addCase(RoomsThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    },
});

export const { addRoom, editRoom, deleteRoom } = RoomSlice.actions;

export const getRoomsList = (state) => state.rooms.rooms;
export const getRoom = (state) => state.rooms.room;
export const getRoomsStatus = (state) => state.rooms.status;
export const getRoomsError = (state) => state.rooms.error;
export const selectRoomById = (state, id) =>
    state.rooms.rooms.find(room => room.id === id);
