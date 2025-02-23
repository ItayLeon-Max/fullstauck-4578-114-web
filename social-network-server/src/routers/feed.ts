import { Router } from "express";
import { getFeed } from "../controllers/feed/controller";
import authenticate from "../middlewares/auth";

const router = Router()

// router.use(authenticate);

router.get('/', getFeed)

export default router