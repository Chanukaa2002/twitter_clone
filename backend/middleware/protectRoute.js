import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unautherized: No Token Provided" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({ error: "Unautherized: Invalid Token" });
    }

    const user = await User.findById(decode.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};
