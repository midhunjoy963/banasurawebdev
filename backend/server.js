import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import mongoose from 'mongoose';
import cabRoutes from './routes/cabroutes.js';
import userRoutes from './routes/userroutes.js';
import uploadRoutes from '.rotes/uploadroutes.js';
//import { notFound,errorHandler } from './custommiddlewares/errorMiddleware.js';

const port =process.env.PORT;
const app = express();

//body parsor middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cookie-parser middleware
app.use(cookieParser());

app.get('/',(req,res)=>{
        
});

app.use('/cabs',cabRoutes);
app.use('/user',userRoutes);
app.use('/api/upload',uploadRoutes);



const __dirname = path.resolve();
app.use('/uploads',express.static(path.join(__dirname,'/uploads')));


// app.use(notFound);
// app.use(errorHandler);

app.listen(port,()=>{
    connectDB();
    console.log(`server started at port ${port}`);
})