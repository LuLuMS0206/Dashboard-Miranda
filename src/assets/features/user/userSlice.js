import { createSlice } from '@reduxjs/toolkit';
import { UserThunk } from './userThunk';

export const UserSlice = createSlice({
    name: 'users',
    initialState: {
        status: 'idle',
        error: null,
        users: [],
        user: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        editUser: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(UserThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(UserThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.users = action.payload;
            })
            .addCase(UserThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    },
});

export const { addUser, editUser, deleteUser } = UserSlice.actions;

export const getUsersList = (state) => state.users.users;
export const getUser = (state) => state.users.user;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;
export const selectUserById = (state, id) =>
    state.users.users.find(user => user.id === id);
