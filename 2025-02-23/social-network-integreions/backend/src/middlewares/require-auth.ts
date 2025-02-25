import { NextFunction, Response } from "express";
import AppError from "../errors/AppError";
import { AuthenticatedRequest } from "./auth";
import statusCode from "http-status-codes";


export default function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (!req.userId) {
        return next(new AppError(statusCode.UNAUTHORIZED, 'Unauthorized'));
    }
    next();
}