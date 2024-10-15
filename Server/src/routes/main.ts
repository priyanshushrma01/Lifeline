import express from "express";
import userRouter from "./user";
import postRouter from "./post";

const mainRouter = express.Router();

mainRouter.use("/user",userRouter);
mainRouter.use("/post",postRouter);

export default mainRouter;