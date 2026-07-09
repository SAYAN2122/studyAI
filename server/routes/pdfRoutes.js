import express from "express";
import multer from "multer";

import {
  uploadPDF,
  generateNotes,
  generateQuiz,
  generateFlashcards,
  askPDFQuestion,
} from "../controllers/pdfController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ==========================
// Multer Storage
// ==========================
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
});

// ==========================
// Upload PDF
// ==========================
router.post(
  "/upload",
  protect,
  upload.single("pdf"),
  uploadPDF
);

// ==========================
// Generate Notes
// ==========================
router.post(
  "/notes",
  protect,
  generateNotes
);

// ==========================
// Generate Quiz
// ==========================
router.post(
  "/quiz",
  protect,
  generateQuiz
);

// ==========================
// Generate Flashcards
// ==========================
router.post(
  "/flashcards",
  protect,
  generateFlashcards
);

// ==========================
// Chat with Uploaded PDF
// ==========================
router.post(
  "/chat",
  protect,
  askPDFQuestion
);

export default router;