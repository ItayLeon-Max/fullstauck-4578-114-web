import mongoose from "mongoose"

interface PostComment {
    body: string,
    userId: string,
    createdAt: Date
}

interface Post {
    userId: string,
    title: string,
    body: string,
    createdAt: Date,
    comments: PostComment[]
}

const CommentSchema = new mongoose.Schema<PostComment>({
    body: String,
    userId: String,
    createdAt: Date
})

const PostSchema = new mongoose.Schema<Post>({
    userId: String,
    title: String,
    body: String,
    createdAt: Date,
    comments: [CommentSchema]
},{
    versionKey: false,
    toObject: {
        versionKey: false,
        transform: function(doc, ret) {
            ret.id = ret._id,
            delete ret._id,
            delete ret.__v
        }
    }
})

export const PostModel = mongoose.model<Post>('Post', PostSchema, 'posts')
// Compare this snippet from src/models/post.ts:

