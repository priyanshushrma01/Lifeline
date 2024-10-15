import express, { Request, Response, Router } from "express";
import zod from "zod";
import { user } from "../db/db"; 
import jwt from "jsonwebtoken";

const userRouter: Router = express.Router();

const signupBody = zod.object({
    username: zod.string(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string().min(4),
    email: zod.string().email(),
    date_of_birth: zod.string(),
    phone_number: zod.string().min(10), // Fixed typo
});

userRouter.post("/signup", async (req: Request, res: Response): Promise<void> => {
    const body = req.body;
    const validation = signupBody.safeParse(body);
    
    if (!validation.success) {
        res.json({ error: "Invalid signup data" });
    } else {
        const olduser = await user.findOne({ username: body.username });
        
        if (olduser) {            
            res.json({ message: "Username already taken" });
        } else {
            const newUser = await user.create({
                username: body.username,
                firstname: body.firstname,
                lastname: body.lastname,
                password: body.password,
                email: body.email,
                date_of_birth: body.date_of_birth,
                phone_number: body.phone_number, // Corrected this to match the schema
            });
            const userid = newUser._id;
            const secret = process.env.JWT_PASSWORD || "";
            const token = jwt.sign({userid},secret,{expiresIn:"1d"});
            res.cookie("token",token);
            res.json({
                message:"User created Successfully!",
            });
        }
    }
});

const signinSchema = zod.object({
    username:zod.string(),
    password:zod.string(),
})
userRouter.post("/signin",async (req: Request, res: Response) => {
    const body = req.body;
    const { success } = signinSchema.safeParse(body);
    
    if (!success) {
        res.json({ error: "Invalid signin data" });
    } else {
        const olduser = await user.findOne({ 
            username: body.username ,
            password:body.password,
        });
        
        if (!olduser){
            res.status(404).json({
                message:"User not found!",
            });
        } 
        else{
            const secret = process.env.JWT_PASSWORD || "";
            const token = jwt.sign({username:body.username},secret,{expiresIn:"1d"});
            res.cookie("token",token);
            res.json({
                message:"User found successfully!",
            })
        }
    }
});

export default userRouter;
