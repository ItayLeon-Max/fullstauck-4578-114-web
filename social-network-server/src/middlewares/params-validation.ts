import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import TwitterError from "../errors/twitter-erros";
import statusCode from "http-status-codes";


export default function paramsValidation(validator: ObjectSchema) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            req.params = await validator.validateAsync(req.params)
            next()
        } catch (e) {
            next(new TwitterError(statusCode.BAD_REQUEST, e.message))
        }
    }
}
