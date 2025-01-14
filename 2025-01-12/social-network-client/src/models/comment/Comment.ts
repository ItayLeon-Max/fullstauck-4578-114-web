import User from "../user/User";
import CommentDraft from "./commentDraft";

export default interface Comment extends CommentDraft {
    id: string,
    postId: string,
    userId: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    user: User
}