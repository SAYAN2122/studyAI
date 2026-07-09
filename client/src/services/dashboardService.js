import api from "./api";

// Dashboard Stats
export const getDashboardStats = async () => {
  const response = await api.get("/dashboard/stats");
  return response.data;
};

// Recent Sessions
export const getRecentSessions = async () => {
  const response = await api.get("/dashboard/stats");
  return response.data.recentSessions;
};