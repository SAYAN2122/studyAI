import api from "./api";

// ==========================
// Save Study Session
// ==========================
export const saveStudySession = async (sessionData) => {
  const response = await api.post(
    "/study-session/save",
    sessionData
  );

  return response.data;
};

// ==========================
// Get All Sessions
// ==========================
export const getStudySessions = async () => {
  const response = await api.get(
    "/study-session"
  );

  return response.data;
};

// ==========================
// Get One Session
// ==========================
export const getStudySession = async (id) => {
  const response = await api.get(
    `/study-session/${id}`
  );

  return response.data;
};

// ==========================
// Delete Session
// ==========================
export const deleteStudySession = async (id) => {
  const response = await api.delete(
    `/study-session/${id}`
  );

  return response.data;
};