import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  getLatestSession,
} from "../controllers/continueLearningController.js";

const router = express.Router();

router.get(
  "/latest",
  protect,
  getLatestSession
);

export default router;