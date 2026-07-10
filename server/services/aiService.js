import groq from "../config/groq.js";

export const generateAIResponse = async (prompt) => {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content:
            "You are StudyAI, an intelligent AI tutor. Explain concepts in a simple, beginner-friendly manner. Use headings, bullet points, and examples whenever appropriate.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.7,
      max_tokens: 1024,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Groq Error:", error);
    throw new Error(
      error.message || "Failed to generate AI response."
    );
  }
};