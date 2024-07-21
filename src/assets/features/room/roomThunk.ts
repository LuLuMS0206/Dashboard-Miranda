import { createAsyncThunk } from '@reduxjs/toolkit';
import data from '../../../data/rooms.json';
import {Room} from './roomSlice'

export const RoomsThunk = createAsyncThunk<Room[]>('rooms/getRooms', async () => {
    return new Promise<Room[]>((resolve) => {
        setTimeout(() => {
            resolve(data as Room[]);
        }, 1000);
    });
});
