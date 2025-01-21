import CommentDraft from "../../models/comment/commentDraft";
import Comment from "../../models/comment/Comment";
import AuthAware from "./AuthAware";

export default class Comments extends AuthAware {
    async create(postId: string, draft: CommentDraft): Promise<Comment> {
        const response = await this.axiosInstance.post<Comment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}`, draft);
        return response.data;
    }

    async getComment(postId: string): Promise<Comment> {
        const response = await this.axiosInstance.get<Comment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}`);
        return response.data;
    }

    async updateComment(commentId: string, draft: CommentDraft): Promise<Comment> {
        const response = await this.axiosInstance.patch<Comment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${commentId}`, draft);
        return response.data;
    }

    async deleteComment(commentId: string): Promise<void> {
        await this.axiosInstance.delete(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${commentId}`);
    }
}
