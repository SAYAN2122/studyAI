import api from "./api";

export const askAI = async (prompt) => {
  const response = await api.post("/ai/chat", {
    prompt,
  });

  return response.data.reply;
};