import { Router } from "express";
import { follow, getFollower, getFollowing, unfollow } from "../controllers/follows/controller";
import paramsValidation from "../middlewares/params-validation";
import { followValidator, unFollowValidator } from "../controllers/follows/validator";

const followsRouter = Router();

followsRouter.get('/followers', getFollower);
followsRouter.get('/following', getFollowing);
followsRouter.post('/follow/:id', paramsValidation(followValidator), follow);
followsRouter.post('/unfollow/:id', paramsValidation(unFollowValidator), unfollow);



export default followsRouter;   

