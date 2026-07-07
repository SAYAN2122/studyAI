import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiTrash2,
  FiEye,
  FiFileText,
  FiCalendar,
} from "react-icons/fi";

import {
  getStudySessions,
  deleteStudySession,
} from "../services/studySessionService";

import {
  showSuccess,
  showError,
} from "../utils/toast";

import ConfirmModal from "../components/common/ConfirmModal";

function MyStudySessions() {
  const navigate = useNavigate();

  // ===============================
  // State
  // ===============================

  const [sessions, setSessions] = useState([]);
  const [filteredSessions, setFilteredSessions] =
    useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] =
    useState("newest");

  const [showModal, setShowModal] =
    useState(false);

  const [selectedSession, setSelectedSession] =
    useState(null);

  // ===============================
  // Fetch Sessions
  // ===============================

  const fetchSessions = async () => {
    try {
      setLoading(true);

      const data =
        await getStudySessions();

      setSessions(data.sessions);
      setFilteredSessions(data.sessions);

    } catch (error) {

      console.error(error);

      showError(
        "Failed to load study sessions."
      );

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  // ===============================
  // Search + Sort
  // ===============================

  useEffect(() => {

    let filtered = [...sessions];

    filtered = filtered.filter((session) =>
      session.pdfName
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

    if (sortBy === "newest") {

      filtered.sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      );

    } else {

      filtered.sort(
        (a, b) =>
          new Date(a.createdAt) -
          new Date(b.createdAt)
      );

    }

    setFilteredSessions(filtered);

  }, [sessions, search, sortBy]);

  // ===============================
  // Delete Session
  // ===============================

  const handleDelete = (id) => {
    setSelectedSession(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {

    try {

      await deleteStudySession(
        selectedSession
      );

      const updated = sessions.filter(
        (session) =>
          session._id !== selectedSession
      );

      setSessions(updated);

      showSuccess(
        "Study session deleted successfully."
      );

    } catch (error) {

      console.error(error);

      showError(
        "Failed to delete study session."
      );

    } finally {

      setShowModal(false);
      setSelectedSession(null);

    }
  };
    // ===============================
  // Loading State
  // ===============================

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">

        <div className="max-w-7xl mx-auto">

          <div className="h-10 w-72 bg-slate-800 rounded animate-pulse mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {[1, 2, 3, 4].map((item) => (

              <div
                key={item}
                className="h-64 rounded-2xl bg-slate-900 animate-pulse"
              />

            ))}

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">

      <div className="max-w-7xl mx-auto">

        {/* =============================== */}
        {/* Page Header */}
        {/* =============================== */}

        <div className="mb-8">

          <h1 className="text-3xl md:text-4xl font-bold">
            📚 My Study Sessions
          </h1>

          <p className="text-slate-400 mt-2">
            View, manage and continue your saved study sessions.
          </p>

        </div>

        {/* =============================== */}
        {/* Search + Sort */}
        {/* =============================== */}

        <div className="flex flex-col lg:flex-row gap-4 mb-8">

          {/* Search */}

          <div className="relative flex-1">

            <FiSearch
              className="absolute left-4 top-4 text-slate-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search by PDF name..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-xl bg-slate-900 border border-slate-800 py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500"
            />

          </div>

          {/* Sort */}

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="rounded-xl bg-slate-900 border border-slate-800 px-5 py-3"
          >

            <option value="newest">
              Newest First
            </option>

            <option value="oldest">
              Oldest First
            </option>

          </select>

        </div>

        {/* =============================== */}
        {/* Empty State */}
        {/* =============================== */}

        {filteredSessions.length === 0 ? (

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center">

            <FiFileText
              size={60}
              className="mx-auto text-slate-600"
            />

            <h2 className="text-2xl font-bold mt-5">
              No Study Sessions Found
            </h2>

            <p className="text-slate-400 mt-3">
              Upload your first PDF and start learning with AI.
            </p>

            <button
              onClick={() => navigate("/pdf")}
              className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
            >
              Upload Your First PDF
            </button>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">          {filteredSessions.map((session) => (

            <div
              key={session._id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-blue-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* PDF Name */}
              <h2 className="text-xl font-bold break-words">
                {session.pdfName}
              </h2>

              {/* Date */}
              <div className="flex items-center gap-2 mt-3 text-slate-400 text-sm">

                <FiCalendar size={16} />

                <span>
                  {new Date(
                    session.createdAt
                  ).toLocaleDateString()}
                </span>

              </div>

              {/* Status Grid */}
              <div className="grid grid-cols-2 gap-3 mt-6">

                {/* Notes */}
                <div className="flex justify-between items-center bg-slate-800 rounded-xl px-3 py-3">

                  <span>📝 Notes</span>

                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      session.notes?.trim()
                        ? "bg-green-600 text-white"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {session.notes?.trim()
                      ? "Ready"
                      : "Missing"}
                  </span>

                </div>

                {/* Quiz */}
                <div className="flex justify-between items-center bg-slate-800 rounded-xl px-3 py-3">

                  <span>❓ Quiz</span>

                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      session.quiz?.trim()
                        ? "bg-green-600 text-white"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {session.quiz?.trim()
                      ? "Ready"
                      : "Missing"}
                  </span>

                </div>

                {/* Flashcards */}
                <div className="flex justify-between items-center bg-slate-800 rounded-xl px-3 py-3">

                  <span>🧠 Cards</span>

                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      session.flashcards?.trim()
                        ? "bg-green-600 text-white"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {session.flashcards?.trim()
                      ? "Ready"
                      : "Missing"}
                  </span>

                </div>

                {/* Summary */}
                <div className="flex justify-between items-center bg-slate-800 rounded-xl px-3 py-3">

                  <span>📄 Summary</span>

                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      session.summary?.trim()
                        ? "bg-green-600 text-white"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {session.summary?.trim()
                      ? "Ready"
                      : "Missing"}
                  </span>

                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">

                <button
                  onClick={() =>
                    navigate(`/study-session/${session._id}`)
                  }
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-3 rounded-xl font-semibold"
                >
                  <FiEye />
                  View Session
                </button>

                <button
                  onClick={() =>
                    handleDelete(session._id)
                  }
                  className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition px-4 py-3 rounded-xl font-semibold"
                >
                  <FiTrash2 />
                  Delete
                </button>

              </div>

            </div>

          ))}</div>

        )}

        {/* =============================== */}
        {/* Delete Confirmation Modal */}
        {/* =============================== */}

        <ConfirmModal
          isOpen={showModal}
          title="Delete Study Session"
          message="Are you sure you want to delete this study session? This action cannot be undone."
          onConfirm={confirmDelete}
          onCancel={() => {
            setShowModal(false);
            setSelectedSession(null);
          }}
        />

      </div>

    </div>
  );
}

export default MyStudySessions;