import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/user/User";

interface FollowingState {
    following: User[];
    followers: User[];
}

const initialState: FollowingState = {
    following: [],
    followers: []
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

            const existingFollowIndex = state.following.findIndex(f => f.id === action.payload.id);
            
            if (existingFollowIndex === -1) {
                state.following.push(action.payload);
            }
        },
        initFollowers: (state, action: PayloadAction<User[]>) => {
            state.followers = action.payload;
        },
        updateFollowStatus: (state, action: PayloadAction<{userId: string, isFollowing: boolean}>) => {
            const { userId, isFollowing } = action.payload;
            
            if (isFollowing) {
                const existingFollowIndex = state.following.findIndex(f => f.id === userId);
                if (existingFollowIndex === -1) {
                    state.following.push({ id: userId } as User);
                }
            } else {
                state.following = state.following.filter(f => f.id !== userId);
            }
        }
    }
})

export const { init, unfollow, follow, initFollowers, updateFollowStatus } = followingSlice.actions;
export default followingSlice.reducer;