import { Router } from "express";
import validation from "../middlewares/validation";
import { newCommentParamsValidator, newCommentValidator } from "../controllers/comments/validator";
import { createComment } from "../controllers/comments/controller";
import paramsValidation from "../middlewares/params-validation";
import authenticate from "../middlewares/auth";

const router = Router()

// router.use(authenticate);

router.post('/:postId', validation(newCommentValidator), paramsValidation(newCommentParamsValidator), createComment)
export default router