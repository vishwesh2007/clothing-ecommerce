// createProduct() ← Admin getProducts() getProductById() updateProduct() ← Admin deleteProduct() ← Admin

import Product from "../model/product.model.js";

export const displayProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      data: products,
      count: products.length,
    });
  } catch (error) {
    console.error("Fetch Products Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const userRole = req.user.role;
    if (userRole !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Only admin can create and update product",
      });
    }

    const { name, description, price, stock, imageUrl, category } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      imageUrl,
      category,
    });
    await newProduct.save();
    res.status(201).json({
      success: true,
      message: "New Product added...",
      data: newProduct,
    });
  } catch (error) {
    console.error("Create Product Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
