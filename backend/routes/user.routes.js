const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middleware/authMiddleware.js");
const {
  getProfile,
  updateProfile,
  deleteAccount,
} = require("../controllers/userController");

router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);
router.delete("/profile", authMiddleware, deleteAccount);

module.exports = router;
