import fs from "fs";
import pdf from "pdf-parse";

import {
  generatePDFSummary,
  generatePDFNotes,
  generatePDFQuiz,
  generatePDFFlashcards,
  chatWithPDF,
} from "../services/pdfAIService.js";

// ==========================================
// Upload PDF & Generate Summary
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

    const summary = await generatePDFSummary(pdfData.text);

    return res.status(200).json({
      success: true,
      pages: pdfData.numpages,
      summary,
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
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "PDF text is required",
      });
    }

    const quiz = await generatePDFQuiz(text);

    return res.status(200).json({
      success: true,
      quiz,
    });

  } catch (error) {
    console.error("Generate Quiz Error:", error);

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
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "PDF text is required",
      });
    }

    const flashcards = await generatePDFFlashcards(text);

    return res.status(200).json({
      success: true,
      flashcards,
    });

  } catch (error) {
    console.error("Generate Flashcards Error:", error);

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