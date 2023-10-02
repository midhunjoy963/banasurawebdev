import express from 'express';
import {getCabs,getCabById} from '../controllers/cabcontroller.js';



const router = express.Router();

router.route('/').get(getCabs);
router.route('/:id').get(getCabById);


export default router;




