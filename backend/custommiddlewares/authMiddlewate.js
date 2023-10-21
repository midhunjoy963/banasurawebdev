import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/usermodel.js';

const protect = asyncHandler(async (req,res,next)=>{
    let token;   

    //read the jwt from cookie
    token = req.cookies.jwt;

    if(token){
        try{
            const decodedToken =  jwt.verify(token,process.env.JWT_SECRET); 
            req.user = await User.findById(decodedToken.userId).select('-password');
            next();
        }
        catch(error){
            res.status(401);
            throw new Error('Not authorized, invalid token');

        }
    }
    else{
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

const admin = (req,res,next) =>{
    if(req.user && req.user.isAdmin){
        next();
    }
    else{
        throw new Error('Not authorized user');
    }
}

export {protect,admin};
