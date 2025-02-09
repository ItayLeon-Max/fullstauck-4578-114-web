import { Request, Response } from 'express';

export default function notFound(req: Request, res: Response, next: Function) {
    next({
        status: 404,
        message: `Not Found - ${req.originalUrl}`
    })  
}