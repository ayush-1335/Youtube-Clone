// require('dotenv').config({ path: './env'}) 
import dotenv from 'dotenv'
import connectDb from './db/index.js';
import {app} from './app.js'

// dotenv.config({
//     path: './env'
// })

const PORT = process.env.PORT || 8000

connectDb()
    .then(() => {
        app.on("error", (error) => {
            console.log("Error: ", error)
            throw error;
        })

        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(`MONGOGB connection failed !!! `, error)
    })




/* One Approach For Connect Database

import mongoose from 'mongoose';
import { DB_NAME } from './constants';

import express from 'express'
const app = express() 

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error)
            throw error;
        })

        app.listen(process.env.MONGODB_URL, () => {
            console.log(`App is listening on ${process.env.MONGODB_URL}`)
        })
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error
        
    }
} )()
*/