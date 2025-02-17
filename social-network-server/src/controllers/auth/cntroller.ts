import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import { createHmac } from "crypto";
import config from "config";
import { sign } from "jsonwebtoken";
import TwitterError from "../../errors/twitter-erros";


function hashPassword(password: string): string{
    return createHmac('sha256', config.get<string>('app.secret')) // secret key
                     .update(password)
                     .digest('hex')
}

export async function login(req: Request, res: Response, next: NextFunction){
    try {
        const {username, password} = req.body
        const user = await User.findOne({
            where: {
                username,
                password: hashPassword(password)
            }
        })
        if(!user) return next(new TwitterError(401, 'Invalid username or password'))

        const jwt = sign(user.get({ plain: true }), config.get<string>('app.jwtSecret'))
        res.json({ jwt })
    } catch (error) {
        next(new TwitterError(500, 'Internal server error'));
    }
}

export async function register(req: Request, res: Response, next: NextFunction){
    const {username, password, name, email} = req.body
    try {
        const user = await User.create({
            username,
            password: hashPassword(password),
            name,
            email
        })

        const jwt = sign(user.get({ plain: true }), config.get<string>('app.jwtSecret'))

        res.json({ jwt })
    } catch (error) {
        if(error.name === 'SequelizeUniqueConstraintError'){
            return next(new TwitterError(
                409,
                 `Username: ${username} or email: ${email} already exists`
                ))
        }
        next(error)
    }
}

export async function forgetPassword(req: Request, res: Response, next: NextFunction){
    try {
        const {username, email} = req.body
        const user = await User.findOne({
            where: {
                username,
                email
            }
        })
        if(!user) return next(new TwitterError(404, 'User not found'))  
        res.json({ message: `Your password has been sent to ${email}` })
    } catch (error) {
        next(new TwitterError(500, 'Internal server error'))
    }
}