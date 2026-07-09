import fs from "fs";
import pdf from "pdf-parse";

import StudySession from "../models/StudySession.js";

import {
  generatePDFSummary,
  generatePDFNotes,
  generatePDFQuiz,
  generatePDFFlashcards,
  chatWithPDF,
} from "../services/pdfAIService.js";

// ==========================================
// Upload PDF & Create Study Session
// ==========================================
export const uploadPDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded",
      });
    }

    const dataBuffer = fs.readFileSync(req.file.path);

    const pdfData = await pdf(dataBuffer);

    if (!pdfData.text.trim()) {
      return res.status(400).json({
        success: false,
        message:
          "No readable text found in the PDF. Please upload a text-based PDF.",
      });
    }

    // Generate AI Summary
    const summary = await generatePDFSummary(pdfData.text);

    // Create Study Session
    const session = await StudySession.create({
      user: req.user._id,
      title: req.file.originalname.replace(".pdf", ""),
      pdfName: req.file.originalname,
      pdfUrl: req.file.path,
      pdfText: pdfData.text,
      summary,
      status: "processing",
    });

    return res.status(200).json({
      success: true,
      sessionId: session._id,
      pages: pdfData.numpages,
      summary,

      // Temporary (will be removed later)
      text: pdfData.text,
    });

  } catch (error) {

    console.error("Upload PDF Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================================
// Generate Notes
// ==========================================
export const generateNotes = async (req, res) => {
  try {

    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "PDF text is required",
      });
    }

    const notes = await generatePDFNotes(text);

    return res.status(200).json({
      success: true,
      notes,
    });

  } catch (error) {

    console.error("Generate Notes Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================================
// Generate Quiz
// ==========================================
export const generateQuiz = async (req, res) => {
  try {

    const { sessionId, text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "PDF text is required",
      });
    }

    const quiz = await generatePDFQuiz(text);

    if (sessionId) {
      await StudySession.findByIdAndUpdate(
        sessionId,
        {
          quiz,
        }
      );
    }

    return res.status(200).json({
      success: true,
      quiz,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================================
// Generate Flashcards
// ==========================================
export const generateFlashcards = async (req, res) => {
  try {

    const { sessionId, text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "PDF text is required",
      });
    }

    const flashcards =
      await generatePDFFlashcards(text);

    if (sessionId) {
      await StudySession.findByIdAndUpdate(
        sessionId,
        {
          flashcards,
          status: "completed",
        }
      );
    }

    return res.status(200).json({
      success: true,
      flashcards,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================================
// Chat with Uploaded PDF
// ==========================================
export const askPDFQuestion = async (req, res) => {
  try {

    const { text, question } = req.body;

    if (!text || !question) {
      return res.status(400).json({
        success: false,
        message: "PDF text and question are required",
      });
    }

    const answer = await chatWithPDF(text, question);

    return res.status(200).json({
      success: true,
      answer,
    });

  } catch (error) {

    console.error("Chat with PDF Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};