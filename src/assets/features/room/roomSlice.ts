
// import { createSlice } from '@reduxjs/toolkit';
// import { RoomsThunk } from './roomThunk';

// export const RoomSlice = createSlice({
//     name: 'rooms',
//     initialState: {
//         status: 'idle',
//         error: null,
//         rooms: [],
//         room: null,
//     },
//     reducers: {
//         addRoom: (state, action) => {
//             state.rooms.push(action.payload);
//         },
//         editRoom: (state, action) => {
//             const index = state.rooms.findIndex(room => room.id === action.payload.id);
//             if (index !== -1) {
//                 state.rooms[index] = action.payload;
//             }
//         },
//         deleteRoom: (state, action) => {
//             state.rooms = state.rooms.filter(room => room.id !== action.payload);
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(RoomsThunk.pending, (state) => {
//                 state.status = 'pending';
//             })
//             .addCase(RoomsThunk.fulfilled, (state, action) => {
//                 state.status = 'fulfilled';
//                 state.rooms = action.payload;
//             })
//             .addCase(RoomsThunk.rejected, (state, action) => {
//                 state.status = 'rejected';
//                 state.error = action.error.message;
//             });
//     },
// });

// export const { addRoom, editRoom, deleteRoom } = RoomSlice.actions;

// export const getRoomsList = (state) => state.rooms.rooms;
// export const getRoom = (state) => state.rooms.room;
// export const getRoomsStatus = (state) => state.rooms.status;
// export const getRoomsError = (state) => state.rooms.error;
// export const selectRoomById = (state, id) =>
//     state.rooms.rooms.find(room => room.id === id);

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../../../store/store';
import { RoomsThunk } from './roomThunk';

export interface Room {
    id: number;
    name: string;
    type: string;
    price: number;
    description: string;
    discount: number;
    image: string;
    amenities: string[];
}

interface RoomState {
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string | null;
    rooms: Room[];
    room: Room | null;
}

const initialState: RoomState = {
    status: 'idle',
    error: null,
    rooms: [],
    room: null,
};

export const RoomSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        addRoom: (state, action: PayloadAction<Room>) => {
            state.rooms.push(action.payload);
        },
        editRoom: (state, action: PayloadAction<Room>) => {
            const index = state.rooms.findIndex(room => room.id === action.payload.id);
            if (index !== -1) {
                state.rooms[index] = action.payload;
            }
        },
        deleteRoom: (state, action: PayloadAction<number>) => {
            state.rooms = state.rooms.filter(room => room.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(RoomsThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(RoomsThunk.fulfilled, (state, action: PayloadAction<Room[]>) => {
                state.status = 'fulfilled';
                state.rooms = action.payload; 
            })
            .addCase(RoomsThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || 'Failed to fetch rooms';
            });
    },
});

export const { addRoom, editRoom, deleteRoom } = RoomSlice.actions;

export const getRoomsList = (state: RootState) => state.rooms.rooms;
export const getRoom = (state: RootState) => state.rooms.room;
export const getRoomsStatus = (state: RootState) => state.rooms.status;
export const getRoomsError = (state: RootState) => state.rooms.error;
export const selectRoomById = (state: RootState, id: number) =>
    state.rooms.rooms.find(room => room.id === id);

export default RoomSlice.reducer;
