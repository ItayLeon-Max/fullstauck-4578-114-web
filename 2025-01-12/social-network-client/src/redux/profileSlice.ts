import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "../models/post/Post";
import Comment from "../models/comment/Comment";

interface profileState {
    posts: Post[];
}

const initialState: profileState = {
    posts: []
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload; // אתחול רשימת הפוסטים
        },
        newPost: (state, action: PayloadAction<Post>) => {
            state.posts.unshift(action.payload); // הוספת פוסט חדש
        },
        removePost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter(p => p.id !== action.payload); // הסרת פוסט
        },
        update: (state, action: PayloadAction<Post>) => {
            const index = state.posts.findIndex(p => p.id === action.payload.id);
            if (index > -1) {
                state.posts[index] = action.payload; // עדכון פוסט קיים
            }
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            state.posts.find(p => p.id === action.payload.postId)?.comments.unshift(action.payload);
        }
    }
});

export const { init, newPost, removePost, update, addComment } = profileSlice.actions;
export default profileSlice.reducer;