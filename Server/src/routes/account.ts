import express, { Router } from "express";
import { account } from "../db/db";
import mongoose from "mongoose";

const accountRouter: Router = express.Router();

accountRouter.get("/balance",async (req:any,res:any)=>{

    const Account = await account.findOne({
        userId:req.user_id
    })
    
    res.json({
        //@ts-ignore
        balance:account.balance
    })
})

accountRouter.post("/transfer",async (req:any,res:any)=>{
    const session = await mongoose.startSession();
    session.startTransaction();

    const {to,amount} = req.body;

    const Account = await account.findOne({
        userId:req.user_id
    }).session(session);
    //@ts-ignore
    if(!account || account.balance < amount){
        await session.abortTransaction();
        res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await account.findOne({
        userId: to
    }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        res.status(400).json({
            message: "Invalid account"
        })
    }

    await account.updateOne({
        userId:req.user_id
    },{
        $inc:{
            balance:-amount
        }
    }).session(session);

    await account.updateOne({
        userId:to
    },{
        $inc:{
            balance:amount
        }
    }).session(session);

    session.commitTransaction();

    res.json({
        message: "Transfer successful"
    })
    
})


