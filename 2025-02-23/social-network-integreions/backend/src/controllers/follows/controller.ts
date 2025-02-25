import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Follow from "../../models/follow";
import { col } from "sequelize";
import AppError from "../../errors/AppError";
import statusCode from "http-status-codes";
import { AuthenticatedRequest } from "../../middlewares/auth";


export async function getFollowers(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
        const user = await User.findByPk(req.userId, {
            include: [{ model: User, as: "followers" }],
        });
        res.json(user?.followers || []);
    } catch (e) {
        next(new AppError(statusCode.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}

export async function getFollowing(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await User.findByPk(req.params.id, {
            include: [{ model: User, as: "following" }],
        });
        res.json(user?.following || []);
    } catch (e) {
        next(new AppError(statusCode.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}


export async function follow(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
        const follow = await Follow.create({
            followerId: req.userId,
            followeeId: req.params.id,
        });
        res.json(follow);
    } catch (e) {
        next(new AppError(statusCode.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}

export async function unfollow(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
        const follow = await Follow.findOne({
            where: {
                followerId: req.userId,
                followeeId: req.params.id,
            },
        });

        if (!follow) {
            return next(new AppError(statusCode.NOT_FOUND, "Follow not found"));
        }

        await follow.destroy();
        res.json({ message: "Unfollowed" });
    } catch (e) {
        next(new AppError(statusCode.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}