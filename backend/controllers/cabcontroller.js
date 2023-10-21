import asyncHandler from '../custommiddlewares/asyncHandler.js';
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
    },
    
];

//@desc fetch all cabs
//@route GET/api/cabs
//@access Public
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

//@desc fetch cab by id
//@route GET/api/cab
//@access Public
const getCabById = asyncHandler(async (req,res)=>{
    const cab = await cabModel.findById(req.params.id);
    if(cab){
        res.json(cab);
    }
    res.status(404).send({message:'Product not found'});
});

//@desc create a cab
//@route POST /api/cabs
//@access private/adimin
const createCab = asyncHandler(async (req,res)=>{
    const cab = new cabModel({
        name:'Name',
        image:'images/cabs/ferrari.jpg',    
        rating:3,
        noOfReviews:6,
        discription:'This is my cab description',
        chargePerKm:100,
        user:req.user._id,
    })

    const newCab = cab.save();
    res.status(201).json(newCab);
});

//@desc update a cab
//@route PUT /api/cabs/:id
//@access private/adimin
const updateCab = asyncHandler(async (req,res)=>{
    const {name,description} = req.body;

    const cab = await cabModel.findById(req.params.id);
    if(cab){
        cab.name = name;
        cab.description = description;
        const updatedCab = await cabModel.save();
        res.json(updatedCab);
    }
    else{
        res.status(404);
        throw new Error('Cab not Found');
    }
    
});


export {getCabs,getCabById,createCab,updateCab};