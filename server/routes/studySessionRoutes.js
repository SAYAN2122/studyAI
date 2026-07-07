import express from "express";

import {
  saveStudySession,
  getStudySessions,
  getStudySession,
  deleteStudySession,
} from "../controllers/studySessionController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Save
router.post(
  "/save",
  protect,
  saveStudySession
);

// Get All
router.get(
  "/",
  protect,
  getStudySessions
);

// Get One
router.get(
  "/:id",
  protect,
  getStudySession
);

// Delete
router.delete(
  "/:id",
  protect,
  deleteStudySession
);

export default router;