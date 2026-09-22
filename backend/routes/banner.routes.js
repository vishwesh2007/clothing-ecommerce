import express from "express";
import authMiddleware from "../Middleware/authMiddleware.js";
import adminMiddleware from "../Middleware/adminMiddleware.js";

import { createBanner, displayBanner } from "../controller/bannerController.js";

const router = express.Router();

router.post("/create", authMiddleware, adminMiddleware, createBanner);

router.get("/", displayBanner);

export default router;
