import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

import { createBanner, displayBanner } from "../controller/bannerController.js";

const router = express.Router();

router.post("/create", authMiddleware, adminMiddleware, createBanner);

router.get("/", displayBanner);

export default router;
