import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id : {type:String,default:uuidv4},
    fullname:{type:String,required:true},
    phone:{type:Number,required:true},
    discordId:{type:String,requied:true},
    github:{type:String,required:false},
    linkedIn:{type:String,required:false},
    tech:{type:Array,required:false}
})


const userModel = mongoose.model('users',userSchema);
export {userModel}
