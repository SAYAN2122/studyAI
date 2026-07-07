import express from "express";

import {
  getDashboardStats,
  getStudyProgress,
} from "../controllers/dashboardController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/stats",
  protect,
  getDashboardStats
);

router.get(
  "/progress",
  protect,
  getStudyProgress
);

export default router;