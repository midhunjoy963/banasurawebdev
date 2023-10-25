import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
//import mongoose from 'mongoose';
import cabRoutes from './routes/cabRoutes.js';
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
//import { notFound,errorHandler } from './custommiddlewares/errorMiddleware.js';

const port =process.env.PORT;
const app = express();

//body parsor middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cookie-parser middleware
app.use(cookieParser());





app.use('/api/cabs',cabRoutes);
app.use('/api/user',userRoutes);
app.use('/api/upload',uploadRoutes);



const __dirname = path.resolve();
app.use('/uploads',express.static(path.join(__dirname,'/uploads')));
if(process.env.NODE_ENV ==='production'){
    //set static folder
    app.use(express.static(path.join(__dirname,'/frontend/build')));

    //any route that is not api will be redirected to index.html
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    });
}
else{
    app.get('/',(req,res)=>{
        res.send('Api is running...');
    });
}




// app.use(notFound);
// app.use(errorHandler);

app.listen(port,()=>{
    connectDB();
    console.log(`server started at port ${port}`);
})