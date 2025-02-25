import { Router } from "express";
import { createPost, deletePost, getPost, getProfile, updatePost } from "../controllers/profile/controller";
import validation from "../middlewares/validation";
import { newPostValidator, updatePostValidator } from "../controllers/profile/validator";
import authenticate from "../middlewares/auth";

const profileRouter = Router()

// profileRouter.use(authenticate);

profileRouter.get('/', getProfile)
profileRouter.get('/:id', getPost)
profileRouter.delete('/:id', deletePost)
profileRouter.post('/', validation(newPostValidator), createPost)
profileRouter.patch('/:id', validation(updatePostValidator), updatePost)

export default profileRouter