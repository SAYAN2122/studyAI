import api from "./api";

export const getLatestSession = async () => {
  const response = await api.get(
    "/continue-learning/latest"
  );

  return response.data;
};