// createCategory() ← Admin getCategories() getCategoryById() updateCategory() ← Admin deleteCategory() ← Admin
import Category from "../model/model.category.js";

export const createCategory = async (req, res) => {
  try {
    const { name, imageUrl, link } = req.body;

    if (!name || !imageUrl || !link) {
      return res.status(400).json({
        success: false,
        message: "Name, image URL and link are required",
      });
    }

    const category = await Category.create({
      name,
      imageUrl,
      link,
    });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    console.error("Create Category Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const displayCategories = async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true });

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    console.error("Display Categories Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};