import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import { post } from "axios";
import Post from "../../models/post";
import Comment from "../../models/comment";
import c from "config";

export async function getProfile(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633';

        const user = await User.findByPk(userId, {
            include: [ {
                model: Post,
                include: [ {
                    model: Comment,
                    include: [ User ]
                }, User ]
            } ]
        });
        console.log(user.get({ plain: true }));
        res.json(user.posts);
    } catch (error) {
        next(error);
    }
}

export async function getPost(req: Request, res: Response, next: NextFunction) {
    try {
        const post = await Post.findByPk(req.params.id, {
            include: [ User, {
                model: Comment,
                include: [ User ]
            } ]
        });
        res.json(post);
    } catch (error) {
        next(error);
    }
}

export async function deletePost(req: Request, res: Response, next: NextFunction) {
    try {
        // const post = await Post.findByPk(req.params.id);
        // await post.destroy();
        const id = req.params.id;
        const deletedRaws = await Post.destroy({
             where: { id } 
            });
            if(deletedRaws === 0) return next({
                status: 404,
                message: `Post with id ${id} not found`
            })
            res.json({
                success: true
            })
    } catch (error) {
        next(error);
    }
}

export async function createPost(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633';

        const post = await Post.create({ ...req.body, userId });
        await post.reload({
            include: [ 
                User,
                {
                    model: Comment,
                    include: [ User ]
                }
             ]
        })
        res.json(post);
    } catch (error) {
        next(error);
    }
}

export async function updatePost(req: Request, res: Response, next: NextFunction) {
    try {
        const post = await Post.findByPk(req.params.id, {
                include: [ 
                    User,
                    {
                        model: Comment,
                        include: [ User ]
                    }
                 ]
        });
        const { title, body } = req.body;
        post.title = title;
        post.body = body;
        await post.save();
        res.json(post);
    } catch (error) {
        next(error);
    }
}
