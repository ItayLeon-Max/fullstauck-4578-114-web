import { create } from "axios";
import { Router } from "express";
import { createComment, getAllComments, getPerPost, removeCommen, updateComment } from "../controllers/comments/controller";
import validation from "../middlewares/validation";
import { editCommentValidator, newCommentParamsValidator, newCommentValidator } from "../controllers/comments/validator";
import paramsValidation from "../middlewares/params-validation";

const commentsRouter = Router();


commentsRouter.get('/', getAllComments)
commentsRouter.get('/:postId', getPerPost)
commentsRouter.patch('/:commentId', validation(editCommentValidator), updateComment)
commentsRouter.post('/:postId', validation(newCommentValidator), paramsValidation(newCommentParamsValidator) ,createComment)
commentsRouter.delete('/:commentId', removeCommen)


export default commentsRouter;

//  --> postID