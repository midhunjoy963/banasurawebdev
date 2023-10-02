import mongoose from 'mongoose';
import User from './usermodel.js';


const reviewSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:String,
            required:true,
        }

    },
    {
        timestamps:true,
    }
);


const cabSchema = new  mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User',
        },
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true,
            default:0,
        },
        noOfReviews:{
            type:Number,
            required:true,
            default:0,
        },
        reviews:[reviewSchema],
        discription:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        chargePerKm:{
            type:Number,

        }
    },
    {
        timestamps:true
    }
);
 
let  Cab =[];
try{
    Cab = mongoose.model('Cabs',cabSchema);
    console.log('creating cab model successful....');
}
catch(error){
    console.log('creatting cab model failed: '+error.message);
}
export default Cab;