import asyncHandler from "../custommiddlewares/asyncHandler.js";
import userModel from "../models/usermodel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import becript from "bcryptjs";
dotenv.config();

const loginUser = asyncHandler(async (req, res) => {
  console.log("logging in  user....");
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    //create token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    //set jwt as http only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }  
});

const logoutUser = asyncHandler(async (req, res) => {
  console.log("logging out");
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
   return res.status(200).json({ message: "Logged out successfully" });
});

const createNewUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    res.status(401).json({ message: "User already exist" });
  } else {
    const user = new userModel({
      name: name,
      email: email,
      password: becript.hashSync(password, 10),
    });

    const newUser = user.save();
    res.status(201);
    if (user && (await user.matchPassword(password))) {
      //create token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      //set jwt as http only cookie
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 1 * 24 * 60 * 60 * 1000,
      });
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error("User creation failed");
    }
  }
});

export { loginUser, logoutUser, createNewUser };
