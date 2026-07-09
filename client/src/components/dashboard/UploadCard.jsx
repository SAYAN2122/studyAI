import { useState } from "react";

import {
  showSuccess,
  showError,
  showWarning,
} from "../../utils/toast";

import {
  uploadPDF,
  generateNotes,
  generateQuiz,
  generateFlashcards,
} from "../../services/pdfService";

import UploadSection from "./UploadSection";
import SummaryCard from "./SummaryCard";
import NotesCard from "./NotesCard";
import QuizCard from "./QuizCard";
import FlashcardsCard from "./FlashcardsCard";

const UploadCard = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Temporary (will be removed later)
  const [pdfText, setPdfText] = useState("");

  // Session created after upload
  const [sessionId, setSessionId] = useState("");

  const [summary, setSummary] = useState("");
  const [notes, setNotes] = useState("");
  const [quiz, setQuiz] = useState("");
  const [flashcards, setFlashcards] = useState("");

  const [loading, setLoading] = useState(false);

  // ==========================
  // Select PDF
  // ==========================
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // ==========================
  // Upload PDF
  // ==========================
  const handleUpload = async () => {
    if (!selectedFile) {
      showWarning("Please select a PDF first.");
      return;
    }

    try {
      setLoading(true);

      const data = await uploadPDF(selectedFile);

      setSummary(data.summary);

      // Temporary
      setPdfText(data.text);

      // New Session ID
      setSessionId(data.sessionId);

      setNotes("");
      setQuiz("");
      setFlashcards("");

      showSuccess("PDF uploaded successfully!");

    } catch (error) {
      console.error(error);

      showError(
        error.response?.data?.message ||
          "Failed to upload PDF."
      );

    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Generate Notes
  // ==========================
  const handleGenerateNotes = async () => {
    if (!pdfText) {
      showWarning("Please upload a PDF first.");
      return;
    }

    try {
      setLoading(true);

      const data = await generateNotes(
        sessionId,
        pdfText
      );

      setNotes(data.notes);

      showSuccess("Notes generated successfully!");

    } catch (error) {
      console.error(error);

      showError(
        error.response?.data?.message ||
          "Failed to generate notes."
      );

    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Generate Quiz
  // ==========================
  const handleGenerateQuiz = async () => {
    if (!pdfText) {
      showWarning("Please upload a PDF first.");
      return;
    }

    try {
      setLoading(true);

      const data = await generateQuiz(
        sessionId,
        pdfText
      );

      setQuiz(data.quiz);

      showSuccess("Quiz generated successfully!");

    } catch (error) {
      console.error(error);

      showError(
        error.response?.data?.message ||
          "Failed to generate quiz."
      );

    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Generate Flashcards
  // ==========================
  const handleGenerateFlashcards = async () => {
    if (!pdfText) {
      showWarning("Please upload a PDF first.");
      return;
    }

    try {
      setLoading(true);

      const data = await generateFlashcards(
        sessionId,
        pdfText
      );

      setFlashcards(data.flashcards);

      showSuccess("Flashcards generated successfully!");

    } catch (error) {
      console.error(error);

      showError(
        error.response?.data?.message ||
          "Failed to generate flashcards."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-lg p-5 md:p-8">

      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        PDF Workspace
      </h2>

      <p className="text-slate-400 text-sm md:text-base mb-8">
        Upload your study material and let StudyAI help you.
      </p>

      <UploadSection
        loading={loading}
        selectedFile={selectedFile}
        handleFileChange={handleFileChange}
        handleUpload={handleUpload}
      />

      {summary && (
        <SummaryCard
          summary={summary}
          onGenerateNotes={handleGenerateNotes}
          onGenerateQuiz={handleGenerateQuiz}
          onGenerateFlashcards={handleGenerateFlashcards}
        />
      )}

      {notes && (
        <NotesCard
          notes={notes}
        />
      )}

      {quiz && (
        <QuizCard
          quiz={quiz}
        />
      )}

      {flashcards && (
        <FlashcardsCard
          flashcards={flashcards}
        />
      )}

      {/* Temporary Debug */}
      {sessionId && (
        <div className="mt-6 border-t border-slate-800 pt-4">
          <p className="text-xs text-slate-500 break-all">
            Session ID: {sessionId}
          </p>
        </div>
      )}

    </div>
  );
};

export default UploadCard;