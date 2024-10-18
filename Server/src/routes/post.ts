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
  operation_date:zod.string(),
  supporters:zod.number(),
})

postRouter.get('/jwt-secret', (req, res) => {
  res.json({ jwtSecret: process.env.JWT_SECRET });
});

postRouter.post(
  '/create',
  upload.fields([{ name: 'file' }, { name: 'photo' }]), 
  async (req: Request, res: Response): Promise<void> => {
    const body = req.body;
    const createrid = req.body.user_id;

    const { success } = createzod.safeParse(body);
    if (!success) {
      res.status(411).json({
        msg: "Wrong Inputs"
      });
      return;
    }

    try {
      let filePath: string | undefined = "";
      let photoPath: string | undefined = "";
      
      console.log(req.files);

      // Check if the file fields are present in the request
      if (req.files) {
        // filePath = (req.files as Express.Multer.File[])[0]?.path;
        // photoPath = (req.files['photo'] as Express.Multer.File[])[0]?.path;
      }

      const Post = await card.create({
        user_id: createrid,
        title: body.title,
        description: body.description,
        file_id: filePath, // Save the file path (or undefined if not uploaded)
        photo_id: photoPath, // Save the photo path (or undefined if not uploaded)
        urgent_need: body.urgent_need,
        employement: body.employement,
        target: body.target,
        operation_date: body.operation_date,
        supporters: body.supporters
      });

      res.json({
        message: "Card created successfully!",
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Server Error" });
    }
  }
);


postRouter.get('/bulk',async (req:Request,res:Response):Promise<void> =>{
    const posts = await card.find();
    res.json(posts);
})

postRouter.get('/single/:id',async (req:Request,res:Response):Promise<void> => {
  const id = req.params.id;
  const data = await card.findById({ id: id });
  res.json({
    data:data,
  })
});

export default postRouter;