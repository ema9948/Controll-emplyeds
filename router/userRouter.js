import { Router } from "express";
import { fargotPassword, login, register } from "../controller/userController.js";
import { jwtVerify } from "../middleware/jwtVerify.js";
const userRouter = Router();

//! login method post
//! register method post
//! fargotpassword method post

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/fargotpassword", fargotPassword)
export default userRouter;

