import { Router } from 'express'
import { userModel } from '../database/schema'

const userRouter = Router();

type user = {
    fullname: string,
    phone: number,
    discordId: string,
    github:string,
    linkedin:string,
    tech:string[]
}

userRouter.post('/register', async function(req, res) {
    try {
        let body : user = req.body
        let prevcheck = await userModel.findOne({ discordId: body.discordId });
        if (prevcheck) {
            return res.status(409).json({ message: "user already exists with this discordId" })
        }
        let doc = await new userModel({...body}).save()
        res.status(200).json(doc)
    } catch (err) {
        res.status(400).json({ message: "error occured", data: err })
    }
})

export default userRouter
