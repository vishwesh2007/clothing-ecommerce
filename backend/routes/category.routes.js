import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import {
  createCategory,
  displayCategories,
} from "../controller/categoryController.js";

const router = express.Router();

router.post("/create", authMiddleware, adminMiddleware, createCategory);
router.get("/", displayCategories);

export default router;
