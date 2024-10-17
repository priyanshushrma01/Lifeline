import { Request, Response } from "express";
import jwt , { JwtPayload } from "jsonwebtoken";

export async function check(req:Request,res:Response,next:any): Promise<void>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        res.status(403).json({
            msg:"failed"
        })
        return;
    }
    const token = authHeader?.split(" ")[1] || "";
    try{
      const decoded = jwt.verify(token,process.env.JWT_SECRET || "") as JwtPayload;

    if(decoded){
      req.createrid = decoded.userid;
      req.creatername = decoded.username;
      next();
    }else{
      res.status(403).json({});
    }
    }
    catch(e){
      res.status(403).json({
        msg:"Unauthorized"
      })
    }

}
