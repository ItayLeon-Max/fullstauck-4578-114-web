import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/user/User";


interface FollowingState {
    following: User[];
}

const initialState: FollowingState = {
    following: []
}

export const followingSlice = createSlice({
    name: 'following',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<User[]>) => {
            state.following = action.payload;
        },
        unfollow: (state, action: PayloadAction<{userId: string}>) => {
            state.following = state.following.filter(f => f.id !== action.payload.userId);
        },
        follow: (state, action: PayloadAction<User>) => {
            state.following.push(action.payload);
        }
    }
})

// actions - functions that know how to modify the state.
export const { init , unfollow , follow } = followingSlice.actions;

// selectors - functions that know how to extract specific parts of the state.
export default followingSlice.reducer;