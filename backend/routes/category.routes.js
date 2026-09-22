import express from "express";
import authMiddleware from "../Middleware/authMiddleware.js";
import adminMiddleware from "../Middleware/adminMiddleware.js";
import {
  createCategory,
  displayCategories,
} from "../controller/categoryController.js";

const router = express.Router();

router.post("/create", authMiddleware, adminMiddleware, createCategory);
router.get("/", displayCategories);

export default router;
