import { NextFunction, Request, Response } from "express";
import Post from "../../models/post";
import User from "../../models/user";
import Comment from "../../models/comment";
import sequelize from "../../db/sequelize";

export async function getUserFeed(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633';
        
        // const user = await User.findByPk(userId, {
        //     include: [ {
        //         model: User,
        //         as: 'following',
        //         include: [ {
        //             model: Post,
        //             include: [ Comment ]
        //         } ]
        //     } ]
        // });

        // const feed = user.following.reduce((cumulative: Post[], { posts }) => {
        //     return [...cumulative, ...posts];
        // },[]).sort((a: Post, b: Post) => a.createdAt < b.createdAt ? -1 : 1);

        // res.json(user);

        const feed = await sequelize.query(`
            SELECT posts.*
            FROM posts
            JOIN follows ON follows.followee_id = posts.user_id
            AND follows.follower_id = ?
            ORDER BY posts.created_at DESC
            `, {
                replacements: [ userId ],
                model: Post,
            });

        await Promise.all(feed.map(post => post.reload({ include: [ Comment ] })));            

        res.json(feed);
    } catch (e) {
        next(e);
    }
}