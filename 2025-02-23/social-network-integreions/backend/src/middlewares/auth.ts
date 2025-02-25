import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import config from "config";
import AppError from "../errors/AppError";
import { StatusCodes } from "http-status-codes";

export interface AuthenticatedRequest extends Request {
    userId?: string;
}

export default function authenticate(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return next(new AppError(StatusCodes.UNAUTHORIZED, "No token provided"));
        }

        const token = authHeader.split(" ")[1]; 
        const decoded = verify(token, config.get<string>("app.jwtSecret"));

        if (typeof decoded !== "object" || !("id" in decoded)) {
            return next(new AppError(StatusCodes.UNAUTHORIZED, "Invalid token"));
        }

        req.userId = decoded.id; 
        next();
    } catch (error) {
        next(new AppError(StatusCodes.UNAUTHORIZED, "Invalid token"));
    }
}