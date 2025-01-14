import axios from "axios";
import CommentDraft from "../models/comment/commentDraft";
import Comment from "../models/comment/Comment";

class Comments {
    async create(postId: string, draft: CommentDraft): Promise<Comment> {
        const response = await axios.post<Comment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}`, draft);
        return response.data;
    }
}

//singleton
const comments = new Comments();
export default comments;