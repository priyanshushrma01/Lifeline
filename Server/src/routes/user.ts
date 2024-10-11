import express, { Request, Response, Router } from "express";
import zod from "zod";
const userRouter : Router = express.Router();

const signupBody = zod.object({
    username:zod.string().email(),
    password:zod.string().min(6),
    name:zod.string()
})

userRouter.post("/signup",(req:Request,res:Response)=>{
    
})

userRouter.post("/signin",(req:Request,res:Response)=>{
    
})

export default userRouter;