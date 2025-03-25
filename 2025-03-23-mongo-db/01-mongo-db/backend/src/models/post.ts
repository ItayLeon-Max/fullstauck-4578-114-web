import mongoose from "mongoose"
import {User} from "./user"

interface PostComment {
    body: string,
    userId: string,
    user: User,
    createdAt: Date
}

interface Post {
    userId: string,
    title: string,
    body: string,
    user: User,
    createdAt: Date,
    comments: PostComment[]
}

const CommentSchema = new mongoose.Schema<PostComment>({
    body: String,
    userId: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: Date
})

const PostSchema = new mongoose.Schema<Post>({
    userId: String,
    title: String,
    body: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' 
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    comments: [CommentSchema]
  }, {
    versionKey: false,
    toObject: {
      transform: function(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      }
    }
  })

export const PostModel = mongoose.model<Post>('Post', PostSchema, 'posts')
// Compare this snippet from src/models/post.ts:

