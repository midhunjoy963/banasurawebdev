import express from 'express';
import {
    getCabs,
    getCabById,
    createCab,
    updateCab
} from '../controllers/cabcontroller.js';
import {protect,admin} from '../custommiddlewares/authMiddlewate.js'



const router = express.Router();

router.route('/').get(getCabs).post(protect,admin,createCab);
router.route('/:id').get(getCabById).put(protect,admin,updateCab);



export default router;




