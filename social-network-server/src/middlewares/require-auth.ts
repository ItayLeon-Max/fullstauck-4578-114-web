import { NextFunction, Response } from "express";
import TwitterError from "../errors/twitter-erros";
import { AuthenticatedRequest } from "./auth";

export default function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (!req.userId) {
        return next(new TwitterError(401, "Unauthorized - please login first"));
    }
    next();
}