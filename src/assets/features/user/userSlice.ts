
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserThunk } from './userThunk';
import { RootState } from './../../../store/store';

export interface User {
    id: string;
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
            const updatedUser = action.payload;
            state.users = state.users.map(user =>
                user.id === updatedUser.id ? updatedUser : user
            );
        },
        deleteUser: (state, action: PayloadAction<string>) => {
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
export const getUserById = (state: RootState, id: string) =>
    state.users.users.find(user => user.id === id) || null;


export default UserSlice.reducer;
