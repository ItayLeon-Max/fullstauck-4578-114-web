import axios from "axios";
import CommentDraft from "../models/comment/commentDraft";
import Comment from "../models/comment/Comment";

class Comments {
    async create(postId: string, draft: CommentDraft): Promise<Comment> {
        const response = await axios.post<Comment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}`, draft);
        return response.data;
    }

    async getComment(postId: string): Promise<Comment> {
        const response = await axios.get<Comment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}`);
        return response.data;
    }

    async updateComment(postId: string, draft: CommentDraft): Promise<Comment> {
        const response = await axios.patch<Comment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}`, draft);
        return response.data;
    }

    async deleteComment(commentId: string): Promise<void> {
        const response = await axios.delete(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${commentId}`);
        return response.data;
    }
}

//singleton
const comments = new Comments();
export default comments;