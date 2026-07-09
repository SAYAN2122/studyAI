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
// Get Dashboard Sessions
// ==========================
export const getStudySessions = async () => {
  const response = await api.get(
    "/study-session"
  );

  return response.data;
};

// ==========================
// Get Single Study Session
// ==========================
export const getStudySession = async (id) => {
  const response = await api.get(
    `/study-session/${id}`
  );

  return response.data;
};

// ==========================
// Delete Study Session
// ==========================
export const deleteStudySession = async (id) => {
  const response = await api.delete(
    `/study-session/${id}`
  );

  return response.data;
};

// ==========================
// Update Last Opened
// (Future Feature)
// ==========================
export const updateLastOpened = async (id) => {
  const response = await api.patch(
    `/study-session/${id}/open`
  );

  return response.data;
};