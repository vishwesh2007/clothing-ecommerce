// getProfile() updateProfile() deleteAccount() getUsers() ← Admin getUserById() ← Admin updateUserStatus() ← Admin

import { User } from "../model/user.model.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Profile Fetch Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, gender, mobile,address } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        name,
        gender,
        mobile,
        address,
      },
      { new: true, runValidators: true },
    ).select("-password");
    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
export const deleteAccount = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Profile Fetch Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
