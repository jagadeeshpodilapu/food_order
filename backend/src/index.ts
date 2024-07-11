import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";
import MyUserController from "./controllers/MyUserController";

mongoose.connect(process.env.MONGODB_CONNECTION as string).then(() => { console.log('Connected to Database') });

const app = express();

app.use(express.json()); //convert any body to json
app.use(cors());

app.use("/api/my/user",myUserRoute);

app.listen(3000, () => {
    console.log("Server statrted on localhost:3000");
});