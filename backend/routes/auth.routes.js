import express from "express";
import {
  register,
  login,
  forgetPassword,
  resetPassword,logout
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgetPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/logout", logout);

export default router;
