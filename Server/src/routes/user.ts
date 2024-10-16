import express, { Request, Response, Router } from "express";
import zod from "zod";
import { user } from "../db/db"; 
import jwt from "jsonwebtoken";
import upload from "../middleware/multer";
import { JWT_PASSWORD } from "../utils/key";

const userRouter: Router = express.Router();

const signupBody = zod.object({
    username: zod.string(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string().min(4),
    email: zod.string(),
    date_of_birth: zod.string(),
    phone_number: zod.string().min(10),
});

userRouter.post("/signup",upload.single("file"), async (req: Request, res: Response): Promise<void> => {
    const body = req.body;
    console.log(body);
    const validation = signupBody.safeParse(body);
    
    if (!validation.success) {
        console.log(validation.error);
        res.json({ 
            error: "Invalid signup data", 
            filedata:req.file,
        });
    } else {
        const olduser = await user.findOne({ username: body.username });
        
        if (olduser) {            
            res.json({ message: "Username already taken" });
        } else {
            const filedata = req.file;
            let url;
            if(filedata){
                url = filedata.path;
            }
            else{
                url = "";
            }
            const newUser = await user.create({
                username: body.username,
                firstname: body.firstname,
                lastname: body.lastname,
                photo_id:url,
                password: body.password,
                email: body.email,
                date_of_birth: body.date_of_birth,
                phone_number: body.phone_number, // Corrected this to match the schema
            });
            const userid = newUser._id;
            const username = newUser.username;
            const secret = JWT_PASSWORD;
            const token = jwt.sign({userid,username},secret,{expiresIn:"1d"});
            res.cookie("token",token);
            res.json({
                message:"User created Successfully!",
                url:url,
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
