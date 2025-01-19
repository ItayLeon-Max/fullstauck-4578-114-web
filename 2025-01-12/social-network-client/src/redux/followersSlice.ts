import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/user/User";

interface FollowersState {
    followers: User[];
}

const initialState: FollowersState = {
    followers: []
}

export const followersSlice = createSlice({
    name: 'followers',
    initialState,
    reducers: {
        initFollowers: (state, action: PayloadAction<User[]>) => {
            state.followers = action.payload;
        },
        removeFollower: (state, action: PayloadAction<string>) => {
            state.followers = state.followers.filter(f => f.id !== action.payload);
        },
        addFollower: (state, action: PayloadAction<User>) => {
            const existingFollowerIndex = state.followers.findIndex(f => f.id === action.payload.id);
            
            if (existingFollowerIndex === -1) {
                state.followers.push(action.payload);
            }
        },
                updateFollowerStatus: (state, action: PayloadAction<{userId: string, isFollowing: boolean}>) => {
            const { userId, isFollowing } = action.payload;
            
            if (isFollowing) {
                const existingFollowerIndex = state.followers.findIndex(f => f.id === userId);
                if (existingFollowerIndex === -1) {
                    state.followers.push({ id: userId } as User);
                }
            } else {
                state.followers = state.followers.filter(f => f.id !== userId);
            }
        }
    }
});

export const { initFollowers, removeFollower, addFollower, updateFollowerStatus } = followersSlice.actions;
export default followersSlice.reducer;