import express from 'express';
import {
    getCabs,
    getCabById,
    createCab,
    updateCab,
    deleteCab,
    createReview
} from '../controllers/cabcontroller.js';
import {protect,admin} from '../custommiddlewares/authMiddlewate.js'



const router = express.Router();

router.route('/').get(getCabs).post(protect,admin,createCab);
router.route('/:id').get(getCabById).put(protect,admin,updateCab).delete(protect,admin,deleteCab);
router.route('/:id/review').post(protect,createReview);



export default router;




