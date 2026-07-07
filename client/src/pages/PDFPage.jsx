import { useState } from "react";
import {
  uploadPDF,
  generateNotes,
  generateQuiz,
  generateFlashcards,
  askPDFQuestion,
} from "../services/pdfService";

import { saveStudySession } from "../services/studySessionService";

function PDFPage() {
  const [file, setFile] = useState(null);

  const [summary, setSummary] = useState("");
  const [pdfText, setPdfText] = useState("");

  const [notes, setNotes] = useState("");
  const [quiz, setQuiz] = useState("");
  const [flashcards, setFlashcards] = useState("");

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);

  // ==========================
  // Upload PDF
  // ==========================
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF");
      return;
    }

    try {
      setLoading(true);

      const data = await uploadPDF(file);

      setSummary(data.summary);
      setPdfText(data.text);

      setNotes("");
      setQuiz("");
      setFlashcards("");
      setQuestion("");
      setAnswer("");

    } catch (error) {
      alert(error.response?.data?.message || "Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Generate Notes
  // ==========================
  const handleGenerateNotes = async () => {
    if (!pdfText) {
      alert("Upload a PDF first.");
      return;
    }

    try {
      setLoading(true);

      const data = await generateNotes(pdfText);

      setNotes(data.notes);

    } catch (error) {
      alert(error.response?.data?.message || "Failed to generate notes.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Generate Quiz
  // ==========================
  const handleGenerateQuiz = async () => {
    if (!pdfText) {
      alert("Upload a PDF first.");
      return;
    }

    try {
      setLoading(true);

      const data = await generateQuiz(pdfText);

      setQuiz(data.quiz);

    } catch (error) {
      alert(error.response?.data?.message || "Failed to generate quiz.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Generate Flashcards
  // ==========================
  const handleGenerateFlashcards = async () => {
    if (!pdfText) {
      alert("Upload a PDF first.");
      return;
    }

    try {
      setLoading(true);

      const data = await generateFlashcards(pdfText);

      setFlashcards(data.flashcards);

    } catch (error) {
      alert(error.response?.data?.message || "Failed to generate flashcards.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Chat with PDF
  // ==========================
  const handleAskQuestion = async () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    try {
      setLoading(true);

      const data = await askPDFQuestion(
        pdfText,
        question
      );

      setAnswer(data.answer);

    } catch (error) {
      alert(error.response?.data?.message || "Failed to get answer.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Save Study Session
  // ==========================
  const handleSaveSession = async () => {
    try {
      setLoading(true);

      await saveStudySession({
        pdfName: file?.name || "Uploaded PDF",
        summary,
        notes,
        quiz,
        flashcards,
      });

      alert("Study Session Saved Successfully!");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to save study session."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>📚 StudyAI PDF Workspace</h1>

      <hr />

      <br />

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={handleUpload}>
        {loading ? "Please Wait..." : "Upload PDF"}
      </button>

      {summary && (
        <>
          <hr />

          <h2>🤖 AI Summary</h2>

          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "10px",
              whiteSpace: "pre-wrap",
            }}
          >
            {summary}
          </div>

          <br />

          <button onClick={handleGenerateNotes}>
            Generate Notes
          </button>

          <button
            onClick={handleGenerateQuiz}
            style={{ marginLeft: "10px" }}
          >
            Generate Quiz
          </button>

          <button
            onClick={handleGenerateFlashcards}
            style={{ marginLeft: "10px" }}
          >
            Generate Flashcards
          </button>

          <button
            onClick={handleSaveSession}
            style={{
              marginLeft: "10px",
              background: "#2563eb",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Save Session
          </button>
                  </>
      )}

      {notes && (
        <>
          <hr />

          <h2>📝 Notes</h2>

          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "10px",
              whiteSpace: "pre-wrap",
            }}
          >
            {notes}
          </div>
        </>
      )}

      {quiz && (
        <>
          <hr />

          <h2>❓ Quiz</h2>

          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "10px",
              whiteSpace: "pre-wrap",
            }}
          >
            {quiz}
          </div>
        </>
      )}

      {flashcards && (
        <>
          <hr />

          <h2>🧠 Flashcards</h2>

          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "10px",
              whiteSpace: "pre-wrap",
            }}
          >
            {flashcards}
          </div>
        </>
      )}

      {summary && (
        <>
          <hr />

          <h2>💬 Chat with PDF</h2>

          <input
            type="text"
            placeholder="Ask anything about the uploaded PDF..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "5px",
            }}
          />

          <button onClick={handleAskQuestion}>
            {loading ? "Thinking..." : "Ask AI"}
          </button>
        </>
      )}

      {answer && (
        <>
          <hr />

          <h2>🤖 AI Answer</h2>

          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "10px",
              whiteSpace: "pre-wrap",
            }}
          >
            {answer}
          </div>
        </>
      )}
    </div>
  );
}

export default PDFPage;