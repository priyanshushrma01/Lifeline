import express, { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import { card } from "../db/db";

const postRouter = express.Router();

postRouter.use("/*",async (req:any,res:any,next:any)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(403).json({
            msg:"failed"
        })
    }
    // const token = header?.split(" ")[1] || "";
    try{
      const decoded = jwt.verify(token,process.env.JWT_SECRET);
    
    if(decoded.userid){
      req.createrid = decoded.userid;
      next();
    }else{
      return res.status(403).json({});
    }
    }
    catch(e){
      return res.status(403).json({
        msg:"Unauthorized"
      })
    }
    
  })


postRouter.post('/',async (req:any,res:any) => {
    const body = req.body;
    const createrid = req.createrid;

    //do validation rishabh

    //const { success} = createPostInput.safeParse(body);
    // if(!success){
    //     res.status(411);
    //     return res.json({
    //       msg:"Wrong Inputs"
    //     })
    // }  
    const Post = await card.create({
        user_id:createrid,
        title:body.title,
        description:body.description,
        photo_id:body.photo_id,
        urgent_need:body.urgent_need,
        target:body.target,
        operation_date:body.operation_date,
        supporters:body.supporters
    })
    
    return res.json({
      id:Post._id
    })
})

postRouter.get('/bulk',async (req:any,res:any)=>{
    const posts = await card.find();
    return res.json(posts);
})



export default postRouter;