import Router from "express-promise-router";
import userRouter from './user-controller.js';

const router = new Router();
router.use("/user", userRouter)

export default router;