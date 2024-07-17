// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserThunk } from './userThunk';
import { RootState } from './../../../store/store';

export interface User {
    id: number;
    name: string;
    email: string;
    startDate: string;
    description: string;
    contact: string;
    status: 'ACTIVE' | 'INACTIVE';
    foto: string;
}

interface UserState {
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string | null;
    users: User[];
    user: User | null;
}

const initialState: UserState = {
    status: 'idle',
    error: null,
    users: [],
    user: null,
};

export const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },
        editUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(UserThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(UserThunk.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.status = 'fulfilled';
                state.users = action.payload;
            })
            .addCase(UserThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || 'Unknown error';
            });
    },
});

export const { addUser, editUser, deleteUser } = UserSlice.actions;

export const getUsersList = (state: RootState) => state.users.users;
export const getUser = (state: RootState) => state.users.user;
export const getUsersStatus = (state: RootState) => state.users.status;
export const getUsersError = (state: RootState) => state.users.error;
export const selectUserById = (state: RootState, id: number) =>
    state.users.users.find(user => user.id === id);

export default UserSlice.reducer;
