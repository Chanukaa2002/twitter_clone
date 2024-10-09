import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getNotifications,deleteNotifications } from "../controllers/notification.controller.js";
const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.get("/", protectRoute, deleteNotifications);

export default router;
