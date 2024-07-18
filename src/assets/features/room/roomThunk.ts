
import { createAsyncThunk } from '@reduxjs/toolkit';
import data from '../../../data/rooms.json';

export interface Room {
    id: string;
    image: string;
    roomNumber: string;
    roomType: string;
    amenities: string[];
    price: number;
    offerPrice: number;
    status: string;
    availability: string;
}

export const RoomsThunk = createAsyncThunk<Room[]>('rooms/getRooms', async () => {
    return new Promise<Room[]>((resolve) => {
        setTimeout(() => {
            resolve(data as Room[]);
        }, 1000);
    });
});
