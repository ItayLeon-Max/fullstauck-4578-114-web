import User from "../user/User";
import Comment from "../comments/Comments"

export default interface Post {
    id: string,
    userId: string,
    title: string,
    body: string,
    imgUrl: string,
    createdAt: string,
    user: User,
    comments: Comment[]
}