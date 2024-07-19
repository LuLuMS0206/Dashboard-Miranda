import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../../../store/store';
import { RoomsThunk } from './roomThunk';

export interface Room {
    id: string;
    image: string;
    roomNumber: string;
    roomType: string;
    description: string;
    amenities: string[];
    price: number;
    offerPrice: number;
    status: string;
    availability: string;
    type: string;
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
        setRooms: (state, action: PayloadAction<Room[]>) => {
            state.rooms = action.payload;
        },
        setSelectedRoom: (state, action: PayloadAction<Room>) => {
            state.room = action.payload;
        },
        editRoom: (state, action: PayloadAction<Room>) => {
            const index = state.rooms.findIndex(room => room.id === action.payload.id);
            if (index !== -1) {
                state.rooms[index] = action.payload;
            }
        },
        deleteRoom: (state, action: PayloadAction<string>) => {
            state.rooms = state.rooms.filter(room => room.id !== action.payload);
        },
        createRoom: (state, action: PayloadAction<Omit<Room, 'id'>>) => {
            const newRoom: Room = { ...action.payload, id: (state.rooms.length + 1).toString() };
            state.rooms.push(newRoom);
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

export const { addRoom, setRooms, setSelectedRoom, editRoom, deleteRoom, createRoom } = RoomSlice.actions;

export const getRoomsList = (state: RootState) => state.rooms.rooms;
export const getRoom = (state: RootState) => state.rooms.room;
export const getRoomsStatus = (state: RootState) => state.rooms.status;
export const getRoomsError = (state: RootState) => state.rooms.error;

export default RoomSlice.reducer;
