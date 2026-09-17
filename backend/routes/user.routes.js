import express from "express";
import authMiddleware from "../Middleware/authMiddleware.js";
import {
  getProfile,
  updateProfile,
  deleteAccount,
} from "../controller/userController.js";

const router = express.Router();

router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);
router.delete("/profile", authMiddleware, deleteAccount);

export default router;
