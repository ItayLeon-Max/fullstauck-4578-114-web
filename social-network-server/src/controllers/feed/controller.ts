import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "../../middlewares/auth";
import User from "../../models/user";
import Post from "../../models/post";
import postIncludes from "../common/post-includes";
import TwitterError from "../../errors/twitter-erros";
import statusCode from "http-status-codes";

export async function getFeed(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
        const user = await User.findByPk(req.userId, {
            include: [{ 
                model: User,
                as: 'following',
                include: [{ 
                    model: Post,
                    ...postIncludes
                }]
            }]
        });

        if (!user) {
            return next(new TwitterError(statusCode.NOT_FOUND, "User not found"));
        }

        const feed = user.following
            .reduce((cumulative: Post[], { posts }) => [...cumulative, ...posts], [])
            .sort((a: Post, b: Post) => b.createdAt.getTime() - a.createdAt.getTime()); 

        res.json(feed);  
    } catch (e) {
        next(new TwitterError(statusCode.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}