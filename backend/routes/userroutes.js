import express from "express";
import {loginUser,logoutUser} from '../controllers/userController.js';


const router =express.Router();

router.post('/logout',logoutUser);
router.post('/login',loginUser);

export default router;

