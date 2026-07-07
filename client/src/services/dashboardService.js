import api from "./api";

// Dashboard Stats
export const getDashboardStats = async () => {
  const response = await api.get("/dashboard/stats");
  return response.data;
};

// Study Progress
export const getStudyProgress = async () => {
  const response = await api.get("/dashboard/progress");
  return response.data;
};