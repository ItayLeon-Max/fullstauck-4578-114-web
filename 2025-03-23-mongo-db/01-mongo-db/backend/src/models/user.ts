import mongoose from "mongoose"

export interface User {
    id: string,
    name: string,
    username: string,
    password: string,
    createdAt: Date,
    following: string[]
}

const UserSchema = new mongoose.Schema<User>({
    name: String,
    username: String,
    password: String,
    createdAt: Date,
    following: [String]
}, {
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

export const UserModel = mongoose.model<User>('User', UserSchema, 'users')