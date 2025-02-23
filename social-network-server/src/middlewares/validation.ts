import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import AppError from "../errors/AppError";
import { StatusCodes } from "http-status-codes";

export default function validation(validator: ObjectSchema) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            req.body = await validator.validateAsync(req.body)
            next()
        } catch (e) {
            next(new AppError(StatusCodes.BAD_REQUEST, e.message))
        }
    }
}
