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

import { saveStudySession } from "../../services/studySessionService";

import UploadSection from "./UploadSection";
import SummaryCard from "./SummaryCard";
import NotesCard from "./NotesCard";
import QuizCard from "./QuizCard";
import FlashcardsCard from "./FlashcardsCard";

const UploadCard = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [pdfText, setPdfText] = useState("");

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
      setPdfText(data.text);

      setNotes("");
      setQuiz("");
      setFlashcards("");

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

      const data = await generateNotes(pdfText);

      setNotes(data.notes);

    } catch (error) {
      console.error(error);
      showError("Failed to generate notes.");
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

      const data = await generateQuiz(pdfText);

      setQuiz(data.quiz);

    } catch (error) {
      console.error(error);
      showError("Failed to generate quiz.");
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

      const data = await generateFlashcards(pdfText);

      setFlashcards(data.flashcards);

    } catch (error) {
      console.error(error);
      showError("Failed to generate flashcards.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Save Study Session
  // ==========================
  const handleSaveSession = async () => {
    if (!summary) {
      showWarning("Please upload a PDF first.");
      return;
    }

    try {
      setLoading(true);

      await saveStudySession({
        pdfName: selectedFile?.name || "Uploaded PDF",
        summary,
        notes,
        quiz,
        flashcards,
      });

      showSuccess("Study Session Saved Successfully!");

    } catch (error) {
      console.error(error);

      showError(
        error.response?.data?.message ||
        "Failed to save study session."
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
          onSaveSession={handleSaveSession}
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

    </div>
  );
};

export default UploadCard;