import express, { Router } from "express";
import userRouter from "./user";
import postRouter from "./post";
import accountRouter from "./account";

const mainRouter:Router = express.Router();

mainRouter.use("/user",userRouter);
mainRouter.use("/post",postRouter);
mainRouter.use("/transfer",accountRouter)
export default mainRouter;