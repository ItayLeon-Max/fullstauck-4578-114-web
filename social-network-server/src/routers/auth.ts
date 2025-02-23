import { Router } from 'express';
import validation from '../middlewares/validation';
import { loginValidator } from '../controllers/auth/validator';
import { forgetPassword, login, register } from '../controllers/auth/cntroller';
import authenticate from '../middlewares/auth';

const authRouter = Router();

// authRouter.use(authenticate);

authRouter.post('/login', validation(loginValidator), login);
authRouter.post('/register', register);
authRouter.post('/forget-password', forgetPassword);

export default authRouter;


