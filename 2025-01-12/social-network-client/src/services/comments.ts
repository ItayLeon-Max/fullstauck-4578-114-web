import axios from "axios";
import CommentDraft from "../models/comment/commentDraft";

class Comments {
    async create(postId: string, draft: CommentDraft): Promise<Comments> {
        const response = await axios.post<Comments>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}`, draft);
        return response.data;
    }
}

//singleton
const comments = new Comments();
export default comments;