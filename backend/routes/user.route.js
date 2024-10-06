import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {getUserProfile,followUnfollowUser,updateUser,getSuggestedUsers} from "../controllers/user.controller.js";
const router = express.Router();

router.get("/profiles/:username", protectRoute, getUserProfile);
router.get("/suggested", protectRoute, getSuggestedUsers);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.post("/update", protectRoute, updateUser);

export default router;