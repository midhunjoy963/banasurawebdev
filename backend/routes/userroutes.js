import express from "express";
import {
  loginUser,
  logoutUser,
  createNewUser,
} from "../controllers/userController.js";
//import {protect,admin} from '../custommiddlewares/authMiddlewate.js';

const router = express.Router();

router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/signup", createNewUser);

export default router;
