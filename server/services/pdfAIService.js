import groq from "../config/groq.js";

// ==========================
// Helper Function
// ==========================
const generateContent = async (prompt) => {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content:
            "You are StudyAI, an expert AI tutor that helps students learn efficiently using well-structured responses.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.5,
      max_tokens: 2048,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Groq PDF AI Error:", error);
    throw new Error(
      error.message || "Failed to generate AI response."
    );
  }
};

// ==========================
// Generate Summary
// ==========================
export const generatePDFSummary = async (pdfText) => {
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

  return await generateContent(prompt);
};

// ==========================
// Generate Notes
// ==========================
export const generatePDFNotes = async (pdfText) => {
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

  return await generateContent(prompt);
};

// ==========================
// Generate Quiz
// ==========================
export const generatePDFQuiz = async (pdfText) => {
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

  return await generateContent(prompt);
};

// ==========================
// Generate Flashcards
// ==========================
export const generatePDFFlashcards = async (pdfText) => {
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

  return await generateContent(prompt);
};

// ==========================
// Chat with Uploaded PDF
// ==========================
export const chatWithPDF = async (pdfText, question) => {
  const prompt = `
You are an AI tutor.

Answer ONLY using the uploaded study material.

If the answer is not present in the study material, reply exactly:

"I couldn't find that information in the uploaded PDF."

Study Material:

${pdfText}

Question:

${question}
`;

  return await generateContent(prompt);
};