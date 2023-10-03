import asyncHandler from '../custommiddlewares/asynchandler.js';
import cabModel from '../models/cabmodel.js';

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

const getCabs = asyncHandler(async (req,res)=>{
    if(process.env.DEV_USER==='midhun'){
        const cabs = await cabModel.find();
        if(cabs){
            res.json(cabs);
        }

    }
    else{
        res.json(cabs);
    
    }

    
    
});

const getCabById = asyncHandler(async (req,res)=>{
    const cab = await cabModel.findById(req.params.id);
    if(cab){
        res.json(cab);
    }
    res.status(404).send({message:'Product not found'});
});

export {getCabs,getCabById};