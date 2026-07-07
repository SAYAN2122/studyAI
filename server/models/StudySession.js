import mongoose from "mongoose";

const studySessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    pdfName: {
      type: String,
      required: true,
    },

    summary: {
      type: String,
      default: "",
    },

    notes: {
      type: String,
      default: "",
    },

    quiz: {
      type: String,
      default: "",
    },

    flashcards: {
      type: String,
      default: "",
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