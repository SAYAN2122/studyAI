import api from "./api";

// ===============================
// Upload PDF
// ===============================
export const uploadPDF = async (file) => {
  const formData = new FormData();

  formData.append("pdf", file);

  const response = await api.post(
    "/pdf/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

// ===============================
// Generate Notes
// ===============================
export const generateNotes = async (
  sessionId,
  text
) => {
  const response = await api.post("/pdf/notes", {
    sessionId,
    text,
  });

  return response.data;
};

// ===============================
// Generate Quiz
// ===============================
export const generateQuiz = async (
  sessionId,
  text
) => {
  const response = await api.post("/pdf/quiz", {
    sessionId,
    text,
  });

  return response.data;
};

// ===============================
// Generate Flashcards
// ===============================
export const generateFlashcards = async (
  sessionId,
  text
) => {
  const response = await api.post(
    "/pdf/flashcards",
    {
      sessionId,
      text,
    }
  );

  return response.data;
};

// ===============================
// Chat with PDF
// ===============================
export const askPDFQuestion = async (
  sessionId,
  text,
  question
) => {
  const response = await api.post("/pdf/chat", {
    sessionId,
    text,
    question,
  });

  return response.data;
};