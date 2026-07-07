import api from "./api";

// ==========================
// Upload PDF
// ==========================
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

// ==========================
// Generate Notes
// ==========================
export const generateNotes = async (text) => {
  const response = await api.post("/pdf/notes", {
    text,
  });

  return response.data;
};

// ==========================
// Generate Quiz
// ==========================
export const generateQuiz = async (text) => {
  const response = await api.post("/pdf/quiz", {
    text,
  });

  return response.data;
};

// ==========================
// Generate Flashcards
// ==========================
export const generateFlashcards = async (text) => {
  const response = await api.post("/pdf/flashcards", {
    text,
  });

  return response.data;
};

// ==========================
// Chat with Uploaded PDF
// ==========================
export const askPDFQuestion = async (text, question) => {
  const response = await api.post("/pdf/chat", {
    text,
    question,
  });

  return response.data;
};