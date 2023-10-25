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
        return res.json(cab);
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
    console.log('update request came to server....');
    console.log('id: ',req.params.id)
    const {name,discription,image} = req.body;
    console.log('body',req.body);
    const cab = await cabModel.findById(req.params.id);
    if(cab){
        cab.name = name;
        cab.discription = discription;
        cab.image = image;

        const updatedCab = await cab.save();
        console.log('udpadated cab',updatedCab);
        res.status(201).json(updatedCab);
    }
    else{
        throw new Error('Cab not Found');
    }
    
});

//@desc delete a cab
//@route DELETE /api/cabs/:id
//@access private/adimin
const deleteCab = asyncHandler(async (req,res)=>{
    try{
        await cabModel.deleteOne({ _id : req.params.id });
        res.status(200).json({message:'OK deleted'});
    }
    catch(err){
        res.status(404).json({message:'resourse not found'});
    }
    
    
});


export {getCabs,getCabById,createCab,updateCab,deleteCab};