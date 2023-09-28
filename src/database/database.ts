import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDb = async () => {
    const connection = await mongoose.connect(process.env.mongo_uri?process.env.mongo_uri:"")
    switch(connection.connection.readyState){
        case 0: console.log(`Connection to database failed`); break
        case 1: console.log(`Connection to databse successful`); break
        case 2: console.log('Server is trying to connect to database'); break
        case 3: console.log('Disconnecting from database'); break
    }
    return connection
}

export {connectDb}
