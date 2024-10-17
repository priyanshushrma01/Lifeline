import express, { Request, Response, Router } from "express";
import { card } from "../db/db";
import { check } from "../middleware/Tcheck";
import zod from 'zod';
import upload from "../middleware/multer";

const postRouter = express.Router();

const createzod = zod.object({
  user_id:zod.string(),
  title:zod.string().min(4),
  description:zod.string().min(8),
  photo_id:zod.string(),
  urgent_need:zod.boolean(),
  target:zod.number(),
  operation_date:zod.date(),
  supporters:zod.number(),
})

postRouter.get('/jwt-secret', (req, res) => {
  res.json({ jwtSecret: process.env.JWT_SECRET });
});

postRouter.post('/create',check,upload.single('file'),async (req:Request,res:Response):Promise<void> => {
    const body = req.body;
    const createrid = req.createrid;

    const { success} = createzod.safeParse(body);
    if(!success){
        res.status(411);
        res.json({
          msg:"Wrong Inputs"
        })
    }else{
      try{
        let photoid;
        if(req.file){
          photoid = req.file.path;
        }
        else{
          photoid = "";
        }
        const Post = await card.create({
            user_id:createrid,
            title:body.title,
            description:body.description,
            photo_id:photoid,
            urgent_need:body.urgent_need,
            target:body.target,
            operation_date:body.operation_date,
            supporters:body.supporters
        })

        res.json({
          message:"Card created successfully!",
        })
      }
      catch(e){
        console.log(e);
        res.status(500).json({message:"Server Error"});
      }
    } 
})

postRouter.get('/bulk',async (req:Request,res:Response):Promise<void> =>{
    const posts = await card.find();
    res.json(posts);
})



export default postRouter;