import asyncHandler from '../custommiddlewares/asyncHandler.js';
import cabModel from '../models/cabmodel.js';
import userModel from '../models/usermodel.js';



//@desc fetch all cabs
//@route GET/api/cabs
//@access Public
const getCabs = asyncHandler(async (req,res)=>{
    const cabs = await cabModel.find();
    if(cabs){
        res.json(cabs);
    }
    else{
        res.json({message:'No cabs Found'});
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
// const reviewSchema = new mongoose.Schema(
//     {
//       user: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: "User",
//       },
//       name: {
//         type: String,
//         required: true,
//       },
//       rating: {
//         type: Number,
//         required: true,
//       },
//       comment: {
//         type: String,
//         required: true,
//       },
//     },
//     {
//       timestamps: true,
//     }
//   );

//@desc create a review
//@route POST /api/cabs
//@access private/adimin
const createReview = asyncHandler(async (req,res)=>{
    const {comment,rating} = req.body;
    const cab = await cabModel.findById(req.params.id);
    if(cab){
        const alreadyReviewd = cab.reviews.find(
            (review) => review.user.toString() === req.user._id.toString()
        );
        if(alreadyReviewd){
            res.status(400)
            throw new Error('Already reviewed');
        }
        const review = {
            name : req.user.name,
            rating:Number(rating),
            comment:comment,
            user:req.user._id,
        };
        cab.reviews.push(review);
        cab.numberOfReviews = cab.reviews.length;
        cab.rating = cab.reviews.reduce((acc,review) => acc+review.rating,0)/cab.numberOfReviews;
        await cab.save()
        res.status(201).json({message:'Review Added ..'});
    }
    else{
        res.status(404);
        throw new Error('Cab not Found');
    }
});

const getContact = asyncHandler(async (req,res) =>{
    console.log('request came for contact...',req.params.id);
    const cab = await cabModel.findById(req.params.id);
    console.log(cab);
    const contact = await userModel.findById(cab.contact).select('-password');
    if(cab && !contact){
        res.status(201).json({number:'123456789'});
    }
    if(contact){
        res.status(201).send(contact);
    }
    else{
        res.status(404);
        throw new Error('Contact Details not Found');
    }

}

);

export {
    getCabs,
    getCabById,
    createCab,
    updateCab,
    deleteCab,
    createReview,
    getContact
};