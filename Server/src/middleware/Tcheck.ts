import { Request, Response } from "express";
import jwt , { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "../utils/key";

export async function check(req:Request,res:Response,next:any): Promise<void>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        res.status(403).json({
            msg:"failed"
        })
        return;
    }
    const token = authHeader;
    try{
      const secret = process.env.JWT_SECRET || JWT_PASSWORD;
      const decoded = jwt.verify(token,secret) as JwtPayload;

    if(decoded){
      req.createrid = decoded.userid;
      req.creatername = decoded.username;
      next();
    }else{
      res.status(403).json({
        msg:"token is not given",
      });
    }
    }
    catch(e){
      res.status(403).json({
        msg:"Unauthorized"
      })
    }

}
