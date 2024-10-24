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
    relation:String,
    employement:String,
    categeory:String,
    title:String,
    description:String,
    photo_id:String,
    file_id:String,
    document_id:String,
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

const accountmodel = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

export const card = mongoose.model("Card",cardmodel);

export const user = mongoose.model("User",usermodel);

export const account = mongoose.model("Account",accountmodel)