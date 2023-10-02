import mongoose from 'mongoose';
import bcript from 'bcryptjs';

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false,
        }

    },
    {
        timestamps:true,
    }
);
userSchema.methods.matchPassword = async function(passwordEnterd){
    return await bcript.compare(passwordEnterd,this.password);
}
let userModel=[];

try{
userModel = mongoose.model('users',userSchema);
}catch(error){
    console.log('creating user schema failed '+error.message);
}



export default userModel;