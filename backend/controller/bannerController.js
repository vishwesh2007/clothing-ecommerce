import Banner from "../model/banner.model.js";

export const createBanner = async (req, res) => {
  try {
    const { name, link } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Banner name is required",
      });
    }

    const banner = await Banner.create({
      name,
      link,
    });

    res.status(201).json({
      success: true,
      message: "Banner created successfully",
      data: banner,
    });
  } catch (error) {
    console.error("Create Banner Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const displayBanner = async (req, res) => {
  try {
    const banners = await Banner.find({ isActive: true });

    res.status(200).json({
      success: true,
      data: banners,
    });
  } catch (error) {
    console.error("Display Banner Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};