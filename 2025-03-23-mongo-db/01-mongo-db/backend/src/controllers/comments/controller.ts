import { NextFunction, Request, Response } from "express";
import { io } from "socket.io-client";
import socket from "../../io/io";
import SocketMessages from "socket-enums-shaharsol";
import { PostModel } from "../../models/post";

export async function createComment(req: Request<{postId: string}>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId

        const { postId } = req.params 

        const comment = await PostModel.findByIdAndUpdate(
            postId, 
            {
                 $push: {
                     comments: {
                         userId,
                          body: req.body.body,
                           createdAt: new Date(),
                            user: userId 
                        } } 
                }, { new: true }).populate([{ path: 'user' }, { path: 'comments.user' }])
        res.json(comment.toObject())
        // socket.emit(SocketMessages.NEW_COMMENT, {
        //     from: req.headers['x-client-id'], // req.header(), req.get()
        //     data: comment
        // })
    } catch (e) {
        next(e)
    }
}