import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "../models/post/Post";
import Comment from "../models/comment/Comment";

interface ProfileState {
    posts: Post[]
}

const initialState: ProfileState = {
    posts: []
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
        newPost: (state, action: PayloadAction<Post>) => {
            state.posts.unshift(action.payload);
        },
        removePost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter(p => p.id !== action.payload);
        },
        update: (state, action: PayloadAction<Post>) => {
            const index = state.posts.findIndex(p => p.id === action.payload.id);
            if (index > -1) {
                state.posts[index] = action.payload;
            }
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

export const { 
    init, 
    newPost, 
    removePost, 
    update, 
    addComment, 
    removeComment 
} = profileSlice.actions;

export default profileSlice.reducer;