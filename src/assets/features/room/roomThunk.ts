// import { createAsyncThunk } from "@reduxjs/toolkit";
// import data from '../../../data/rooms.json';


// export const RoomsThunk = createAsyncThunk ('rooms/getRooms', async ()=>{
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         resolve(data);
//         }, 1000); 
//     });
// })

import { createAsyncThunk } from '@reduxjs/toolkit';
import data from '../../../data/rooms.json';

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


export const RoomsThunk = createAsyncThunk<Room[]>('rooms/getRooms', async () => {
    return new Promise<Room[]>((resolve) => {
        setTimeout(() => {
            resolve(data as unknown as Room[]);
        }, 1000);
    });
});
