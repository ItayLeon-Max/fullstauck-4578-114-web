import { NextFunction, Request, Response } from "express";
import Comment from "../../models/comment";
import User from "../../models/user";


export async function getAllComments(req: Request, res: Response, next: NextFunction){
    try {
        const comments = await Comment.findAll({
            include: User
        });
        res.json(comments);
    } catch (error) {
        next(error);
    }
}

export async function getPerPost(req: Request<{postId: string}>, res: Response, next: NextFunction){
    try {
        const comments = await Comment.findAll({
            where: {
                postId: req.params.postId
            }
        });
        res.json(comments);
    } catch (error) {
        next(error);
    }
}

export async function removeCommen(req: Request<{commentId: string}>, res: Response, next: NextFunction){
    try {
        await Comment.destroy({
            where: {
                id: req.params.commentId
            }
        });
        res.json({
            message: 'Comment deleted successfully'
        });
    } catch (error) {
        next(error);
    }
}

export async function updateComment(req: Request<{commentId: string}>, res: Response, next: NextFunction){
    try {
        await Comment.update(req.body, {
            where: {
                id: req.params.commentId
            }
        });
        res.json({
            message: 'Comment updated successfully'
        });
    } catch (error) {
        next(error);
    }
}

export async function createComment(req: Request<{postId: string}>, res: Response, next: NextFunction){
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633';
        const { postId } = req.params;
        const comment = await Comment.create({
            userId,
            postId,
            ...req.body
        });
        await comment.reload({
            include: [ User ]
        })
        res.json(comment);
    } catch (error) {
        next(error);
    }
}

export async function removeComment(req: Request<{commentId: string}>, res: Response, next: NextFunction){
    try {
        await Comment.destroy({
            where: {
                id: req.params.commentId
            }
        });
        res.json({
            message: 'Comment deleted successfully'
        });
    } catch (error) {
        next(error);
    }
}

