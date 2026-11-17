import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addToCart, getCart } from "../controller/cartController.js";

const router = express.Router();

router.post("/add", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);

export default router;
