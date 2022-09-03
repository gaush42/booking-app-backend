import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express();
dotenv.config();

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB);
        console.log('Connected to DB')
    }catch(error){
        throw error;
    }
}
mongoose.connection.on('disconnected', () => {
    console.log('mongodb disconnected')
})
mongoose.connection.on('connected', ()=>{
    console.log('mongodb connected')
})


app.listen(8800, ()=> {
    connect()
    console.log('Conected')
})