import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js"; // 👈 Apne model ka sahi path check kar lena

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "No token, access denied",
      success: false,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id || decoded).select("-password");

    if (!req.user) {
      return res.status(401).json({
        message: "User not found, access denied",
        success: false,
      });
    }

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(401).json({
      message: "Invalid token",
      success: false,
    });
  }
};

export default authMiddleware;
