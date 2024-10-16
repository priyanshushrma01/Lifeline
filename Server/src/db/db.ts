import mongoose from "mongoose";

const usermodel = new mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    photo_id:{
        type:String,
        default:"",
    },
    password:String,
    email:String,
    date_of_birth:Date,
    phone_number:String,
});

const cardmodel = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    title:String,
    description:String,
    photo_id:String,
    urgent_need:{
        type:Boolean,
        default:false,
    },
    target:Number,
    operation_date:Date,
    supporters:{
        type:Number,
        default:0,
    }
});

export const card = mongoose.model("Card",cardmodel);

export const user = mongoose.model("User",usermodel);