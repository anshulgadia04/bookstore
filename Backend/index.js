import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import bookRouter from './routes/book.route.js'
import userRouter from './routes/user.route.js'


const app = express()
app.use(cors())
app.use(express.json())


dotenv.config()
const port = process.env.PORT || 4000
const Mongo_URI = process.env.MONGO_URI


// database connection
try {
    mongoose.connect(Mongo_URI)
    console.log("DB Connected");
} catch (error) {
    console.log("Error in Connectin the DataBase ",error);
}


// defining routes
app.use('/book' , bookRouter)
app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.send("hello")
})

// server listening
app.listen(port , ()=>{
    console.log("Server is listening on port ",port);
})