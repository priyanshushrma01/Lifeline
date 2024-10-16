import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mainRouter from "./routes/main";
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";



const app: Express = express();
const port = process.env.PORT || 3000;

console.log(process.env);

mongoose.connect("mongodb://localhost:27017");

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}));
app.use(cookieParser());
app.use("/api/v1",mainRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});