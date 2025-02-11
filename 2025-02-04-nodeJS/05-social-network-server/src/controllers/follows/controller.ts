import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Follow from "../../models/follow";

export async function getFollower(req: Request, res: Response, next: NextFunction){
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633';
        const user = await User.findByPk(userId, {
            include: [{
                model: User,
                as: 'followers'
            }]
        })
        res.json(user.followers);
    } catch (error) {
        next(error);
    }
}

export async function getFollowing(req: Request, res: Response, next: NextFunction){
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633';
        const user = await User.findByPk(userId, {
            include: [{
                model: User,
                as: 'following'
            }]
        })
        res.json(user.following);
    } catch (error) {
        next(error);
    }
}

export async function follow(req: Request<{ id: string }>, res: Response, next: NextFunction){
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633';
        const follow = await Follow.create({
            followerId: userId,
            followeeId: req.params.id
        })
        res.json(follow);
    } catch (error) {
        next(error);
    }
}

export async function unfollow(req: Request<{ id: string }>, res: Response, next: NextFunction){
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633';
        const isUnfollow = await Follow.destroy({
            where: {
                followerId: userId,
                followeeId: req.params.id
            }
        })
        if(!isUnfollow) return next({
            message: 'You are not following this user',
            status: 400
        })
        res.json({ message: 'User unfollowed successfully' });
    } catch (error) {
        next(error);
    }
}