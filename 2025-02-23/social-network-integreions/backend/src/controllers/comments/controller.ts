import { NextFunction, Request, Response } from "express";
import Comment from "../../models/comment";
import User from "../../models/user";
import AppError from "../../errors/AppError";
import { ValidationError, ForeignKeyConstraintError } from 'sequelize';
import Post from "../../models/post";
import statusCode from "http-status-codes";
import { AuthenticatedRequest } from "../../middlewares/auth";


export async function createComment(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
        const { postId } = req.params;

        const post = await Post.findByPk(postId);
        if (!post) {
            return next(new AppError(statusCode.NOT_FOUND, "Post not found"));
        }

        const comment = await Comment.create({
            userId: req.userId,
            postId,
            ...req.body
        });

        await comment.reload({ include: [User] });

        res.json(comment);
    } catch (error) {
        next(new AppError(statusCode.BAD_REQUEST, error.message));
    }
}