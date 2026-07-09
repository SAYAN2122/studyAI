import express from "express";

import {
  saveStudySession,
  getStudySessions,
  getStudySession,
  updateStudySession,
  deleteStudySession,
} from "../controllers/studySessionController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ==========================================
// Save Study Session
// ==========================================
router.post(
  "/save",
  protect,
  saveStudySession
);

// ==========================================
// Get All Sessions
// ==========================================
router.get(
  "/",
  protect,
  getStudySessions
);

// ==========================================
// Get One Session
// ==========================================
router.get(
  "/:id",
  protect,
  getStudySession
);

// ==========================================
// Update Session
// ==========================================
router.put(
  "/:id",
  protect,
  updateStudySession
);

// ==========================================
// Delete Session
// ==========================================
router.delete(
  "/:id",
  protect,
  deleteStudySession
);

export default router;