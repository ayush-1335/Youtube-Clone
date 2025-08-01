import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        console.log(`MongoDB Connected Successfully ! ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1)
        
    }
}

export default connectDb