import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.URI);
        console.log('connection successfull to Mongo db');
    }
    catch(error){
        console.log('connection failed to mongodb')
        console.log(`Error : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;