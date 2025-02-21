import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import { createHmac } from "crypto";
import config from "config";
import { sign } from "jsonwebtoken";
import TwitterError from "../../errors/twitter-erros";
import statusCode from "http-status-codes";

function hashPassword(password: string): string {
    return createHmac('sha256', config.get<string>('app.secret'))
        .update(password)
        .digest('hex');
}

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });

        if (!user || user.password !== hashPassword(password)) return next(new TwitterError(statusCode.UNAUTHORIZED, 'Invalid username or password'));

        const payload = { id: user.id, username: user.username, email: user.email };
        const jwt = sign(payload, config.get<string>('app.jwtSecret'), { expiresIn: '1h' });

        res.json({ jwt });
        
    } catch (error) {
        next(new TwitterError(statusCode.INTERNAL_SERVER_ERROR, 'Internal server error'));
    }
}

export async function register(req: Request, res: Response, next: NextFunction) {
    const { username, password, name, email } = req.body;

    if (!username || !password || !name || !email) return next(new TwitterError(statusCode.BAD_REQUEST, 'Missing required fields'));
    if (password.length < 6) return next(new TwitterError(statusCode.BAD_REQUEST, 'Password must be at least 6 characters long'));

    try {
        const user = await User.create({
            username,
            password: hashPassword(password),
            name,
            email
        });

        const payload = { id: user.id, username: user.username, email: user.email };
        const jwt = sign(payload, config.get<string>('app.jwtSecret'), { expiresIn: '1h' });

        res.json({ jwt });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return next(new TwitterError(statusCode.BAD_REQUEST, `Username: ${username} or email: ${email} already exists`));
        }
        next(new TwitterError(statusCode.INTERNAL_SERVER_ERROR, 'Internal server error'));
    }
}

export async function forgetPassword(req: Request, res: Response, next: NextFunction) {
    try {
        const { username, email } = req.body;
        const user = await User.findOne({ where: { username, email } });

        if (!user) return next(new TwitterError(404, 'User not found'));

        const resetToken = sign({ id: user.id }, config.get<string>('app.jwtSecret'), { expiresIn: '15m' });

        console.log(`Send this token to ${email}: ${resetToken}`);

        res.json({ message: 'Password reset link sent to your email', resetToken });
    } catch (error) {
        next(new TwitterError(statusCode.INTERNAL_SERVER_ERROR, 'Internal server error'));
    }
}