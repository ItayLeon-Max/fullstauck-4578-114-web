import express, { NextFunction, Request, Response } from 'express';
const server = express();
const PORT = 3000;

// Middleware
function getUser (req: Request, res: Response, next: NextFunction): void {
    res.json({
        name: 'John Doe',
        age: 30
    })
}

server.use(getUser);

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

