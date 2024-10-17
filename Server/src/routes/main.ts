import express from "express";
import userRouter from "./user";
import postRouter from "./post";

const mainRouter = express.Router();

mainRouter.use("/user",userRouter);
mainRouter.use("/post",postRouter);
mainRouter.use("/transfer",)
export default mainRouter;