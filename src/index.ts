
import express from "express";
import userRouter  from './controllers/user'
import {connectDb} from "./database/database"
import cors from 'cors'

const PORT = 42069;

const app = express();

app.use(cors({origin:"*"}))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/users",userRouter)

app.listen(PORT, async () => {
    console.log("Server started in port " + PORT)
    await connectDb()
});
