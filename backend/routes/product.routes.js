import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

import {
  createProduct,
  displayProducts,
} from "../controller/productController.js";

const router = express.Router();

router.post("/create", authMiddleware, adminMiddleware, createProduct);

router.get("/", displayProducts);

export default router;
