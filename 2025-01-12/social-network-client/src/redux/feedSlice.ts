import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "../models/post/Post";
import Comment from "../models/comment/Comment";

interface FeedState {
    posts: Post[]
}

const initialState: FeedState = {
    posts: []
}

export const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            const post = state.posts.find(p => p.id === action.payload.postId);
            if (post) {
                post.comments.unshift(action.payload);
            }
        },
        removeComment: (state, action: PayloadAction<{ commentId: string, postId: string }>) => {
            const post = state.posts.find(p => p.id === action.payload.postId);
            if (post) {
                post.comments = post.comments.filter(c => c.id !== action.payload.commentId);
            }
        }
    }
});

export const { init, addComment, removeComment } = feedSlice.actions;

export default feedSlice.reducer;