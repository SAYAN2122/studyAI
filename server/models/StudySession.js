import mongoose from "mongoose";

// ===============================
// Quiz Schema
// ===============================
const quizSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },

    options: {
      type: [String],
      default: [],
    },

    answer: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

// ===============================
// Flashcard Schema
// ===============================
const flashcardSchema = new mongoose.Schema(
  {
    front: {
      type: String,
      required: true,
    },

    back: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

// ===============================
// Study Session Schema
// ===============================
const studySessionSchema = new mongoose.Schema(
  {
    // Owner
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // PDF
    title: {
      type: String,
      default: "",
    },

    pdfName: {
      type: String,
      required: true,
    },

    pdfUrl: {
      type: String,
      default: "",
    },
    pdfText: {
  type: String,
  default: "",
},

    // AI Generated Content
    summary: {
      type: String,
      default: "",
    },

    notes: {
      type: String,
      default: "",
    },

    quiz: {
      type: [quizSchema],
      default: [],
    },

    flashcards: {
      type: [flashcardSchema],
      default: [],
    },

    // Dashboard
    status: {
      type: String,
      enum: [
        "processing",
        "completed",
        "failed",
      ],
      default: "processing",
    },

    lastOpened: {
      type: Date,
      default: Date.now,
    },

    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "StudySession",
  studySessionSchema
);