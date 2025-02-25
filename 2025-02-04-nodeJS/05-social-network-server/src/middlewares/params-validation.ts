import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export default function paramsValidation(validator: ObjectSchema){
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            req.params = await validator.validateAsync(req.params);
            next();
        } catch (error) {
            next({
                status: 422, //422 for unprocessable entity
                message: error.message
            });
        }
    }
}