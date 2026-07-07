import express from "express";
import multer from "multer";

import {
  uploadPDF,
  generateNotes,
  generateQuiz,
  generateFlashcards,
  askPDFQuestion,
} from "../controllers/pdfController.js";

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
  upload.single("pdf"),
  uploadPDF
);

// ==========================
// Generate Notes
// ==========================
router.post("/notes", generateNotes);

// ==========================
// Generate Quiz
// ==========================
router.post("/quiz", generateQuiz);

// ==========================
// Generate Flashcards
// ==========================
router.post("/flashcards", generateFlashcards);

// ==========================
// Chat with Uploaded PDF
// ==========================
router.post("/chat", askPDFQuestion);

export default router;