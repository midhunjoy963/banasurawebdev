import express from "express";
import {
  loginUser,
  logoutUser,
  createNewUser,
  getUsersByIds
} from "../controllers/userController.js";
//import {protect,admin} from '../custommiddlewares/authMiddlewate.js';

const router = express.Router();


router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/signup", createNewUser);
router.route("/:userIds").post(getUsersByIds);

export default router;
