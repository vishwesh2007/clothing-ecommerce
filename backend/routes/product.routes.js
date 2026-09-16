// const express = require("express");
// const router = express.Router();
// const authMiddleware = require("../middleware/authMiddleware");
// const adminMiddleware = require("../middleware/adminMiddleware");
// const {
//   createProduct,
//   getProducts,
//   getProductById,
//   updateProduct,
//   deleteProduct,
// } = require("../controllers/productController");

// router.get("/", getProducts); // public
// router.get("/:id", getProductById); // public
// router.post("/", authMiddleware, adminMiddleware, createProduct); // admin only
// router.put("/:id", authMiddleware, adminMiddleware, updateProduct); // admin only
// router.delete("/:id", authMiddleware, adminMiddleware, deleteProduct); // admin only

// module.exports = router;
