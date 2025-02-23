import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Post from "../../models/post";
import Comment from "../../models/comment";
import postIncludes from "../common/post-includes";
import AppError from "../../errors/AppError";
import statusCode from "http-status-codes";
import { AuthenticatedRequest } from "../../middlewares/auth";


export async function getProfile(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
        const user = await User.findByPk(req.userId, {
            include: [{
                model: Post,
                ...postIncludes
            }]
        });

        res.json(user?.posts || []);
    } catch (e) {
        next(new AppError(statusCode.INTERNAL_SERVER_ERROR, 'Internal server error'));
    }
}

export async function getPost(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const post = await Post.findByPk(req.params.id, postIncludes)
        res.json(post)
    } catch (e) {
        next(new AppError(statusCode.INTERNAL_SERVER_ERROR, 'Internal server error'))   
    }
}

export async function deletePost(req: Request<{id: string}>, res: Response, next: NextFunction) {
        try {
        const id = req.params.id
        const deletedRows = await Post.destroy({
            where: { id }
        })

        if(deletedRows === 0) return next(new AppError(statusCode.NOT_FOUND, 'Post not found'))

        res.json({
            success: true
        })

    } catch (e) {
        next(new AppError(statusCode.INTERNAL_SERVER_ERROR, 'Internal server error'))
    }
}

export async function createPost(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
        const post = await Post.create({
             ...req.body,
              userId: req.userId 
            });
        await post.reload(postIncludes);
        res.json(post);
    } catch (e) {
        next(new AppError(statusCode.INTERNAL_SERVER_ERROR, 'Internal server error'));
    }
}

export async function updatePost(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const post = await Post.findByPk(req.params.id, postIncludes)

        // an example to findAll
        // const pos2 = await Post.findAll({where: {name: 'Gustav'}})

        const { title, body } = req.body
        post.title = title
        post.body = body
        await post.save() // <= this command generates the actual SQL UPDATE
        res.json(post)

    } catch (e) {
        next(new AppError(statusCode.INTERNAL_SERVER_ERROR, 'Internal server error'))
    }
}