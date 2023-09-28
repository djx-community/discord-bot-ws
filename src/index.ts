
import express from "express";
import userRouter  from './controllers/user'
import {connectDb} from "./database/database"

const PORT = 42069;
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/users",userRouter)

app.listen(PORT, async () => {
    console.log("Server started in port " + PORT)
    await connectDb()
});