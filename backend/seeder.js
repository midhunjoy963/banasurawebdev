import mongoose from 'mongoose';
import becript from 'bcryptjs';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userModel from './models/usermodel.js';
import cabModel from './models/cabmodel.js';
dotenv.config();
await connectDB();

const users = [
    {
        name:'Admin User',
        email:'admin@gmail.com',
        password:becript.hashSync('123456789',10),
        isAdmin:true,
    },
    {
        name:'midhun Joy',
        email:'midhun@gmail.com',
        password:becript.hashSync('123456789',10),
    },
    {
        name:'Amal Pt',
        email:'amal@gmail.com',
        password:becript.hashSync('123456789',10),
    }
];

const cabs = [  
    {
    
        name:'Ferrary',
        image:'images/cabs/ferrari.jpg',    
        rating:3,
        noOfReviews:6,
        discription:'This is my all new ferrary',
        chargePerKm:100
    },
    {
    
        name:'Ambaseder', 
        image:'images/cabs/ambassader.jpg',   
        rating:4.6,
        noOfReviews:6,
        discription:'This is my all old gold',
        chargePerKm:350
    },
    {
    
        name:'Maruthi 800', 
        image:'images/cabs/800.jpg', 
        rating:3.5,
        noOfReviews:10,
        discription:'This not just old its the new',
        chargePerKm:200
    }
];

const importData = async () =>{
    try{
        await userModel.deleteMany();
        await cabModel.deleteMany();

        const newUser = await userModel.insertMany(users);
        const admin = newUser[0]._id;
        
        const samblecabs =  cabs.map((cab)=>{
            return {user:admin,...cab};      
        });
        const newcabs = await cabModel.insertMany(samblecabs);
        console.log(JSON.stringify(newcabs));
        console.log('Data imported successfully');
        process.exit();
    }
    catch(error){
        console.log('data import failed '+error.message);
    }
}

importData();

