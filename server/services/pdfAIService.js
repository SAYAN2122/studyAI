import { GoogleGenerativeAI } from "@google/generative-ai";

// ==========================
// Get Gemini Model
// ==========================
const getModel = () => {
  const apiKey = process.env.GEMINI_API_KEY;

  const genAI = new GoogleGenerativeAI(apiKey);

  return genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });
};

// ==========================
// Generate Summary
// ==========================
export const generatePDFSummary = async (pdfText) => {
  const model = getModel();

  const prompt = `
You are an AI Study Assistant.

Summarize the following study material.

Rules:
- Use simple English.
- Use bullet points.
- Keep the summary under 300 words.
- Mention important concepts.

Study Material:

${pdfText}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};

// ==========================
// Generate Notes
// ==========================
export const generatePDFNotes = async (pdfText) => {
  const model = getModel();

  const prompt = `
You are an expert teacher.

Create structured study notes.

Rules:
- Use headings.
- Use bullet points.
- Highlight important concepts.
- Keep it concise.
- Use markdown formatting.

Study Material:

${pdfText}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};

// ==========================
// Generate Quiz
// ==========================
export const generatePDFQuiz = async (pdfText) => {
  const model = getModel();

  const prompt = `
You are an expert teacher.

Generate 10 multiple-choice questions from the following study material.

Rules:
- Each question should have exactly 4 options.
- Mention the correct answer after every question.
- Use markdown formatting.

Study Material:

${pdfText}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};

// ==========================
// Generate Flashcards
// ==========================
export const generatePDFFlashcards = async (pdfText) => {
  const model = getModel();

  const prompt = `
You are an expert teacher.

Create 10 flashcards from the following study material.

Rules:
- Use markdown.

Format:

## Flashcard 1

Question:
...

Answer:
...

Study Material:

${pdfText}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};

// ==========================
// Chat with Uploaded PDF
// ==========================
export const chatWithPDF = async (pdfText, question) => {
  const model = getModel();

  const prompt = `
You are an AI tutor.

Answer ONLY using the uploaded study material.

If the answer is not present in the study material, reply:

"I couldn't find that information in the uploaded PDF."

Study Material:

${pdfText}

Question:

${question}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};