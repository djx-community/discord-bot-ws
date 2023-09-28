import mongoose from 'mongoose'

const connectDb = async () => {
    const connection = await mongoose.connect(`mongodb://localhost:27017`)
    switch(connection.connection.readyState){
        case 0: console.log(`Connection to database failed`); break
        case 1: console.log(`Connection to databse successful`); break
        case 2: console.log('Server is trying to connect to database'); break
        case 3: console.log('Disconnecting from database'); break
    }
    return connection
}

export {connectDb}
