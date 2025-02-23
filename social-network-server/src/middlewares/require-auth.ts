import { NextFunction, Response } from "express";
import TwitterError from "../errors/twitter-erros";
import { AuthenticatedRequest } from "./auth";
import statusCode from "http-status-codes";


export default function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (!req.userId) {
        return next(new TwitterError(statusCode.UNAUTHORIZED, 'Unauthorized'));
    }
    next();
}