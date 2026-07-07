import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiFileText,
  FiBookOpen,
  FiHelpCircle,
  FiLayers,
} from "react-icons/fi";

import { getStudySession } from "../services/studySessionService";

function StudySessionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSession();
  }, [id]);

  const fetchSession = async () => {
    try {
      const data = await getStudySession(id);
      setSession(data.session);
    } catch (error) {
      console.error(error);
      alert("Failed to load study session.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-2xl">
        Loading Study Session...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-2xl">
        Study Session Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto p-8">

        <button
          onClick={() => navigate("/study-sessions")}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
        >
          <FiArrowLeft />
          Back to Study Sessions
        </button>

        <h1 className="text-4xl font-bold">
          {session.pdfName}
        </h1>

        <p className="text-slate-400 mt-2">
          Saved on{" "}
          {new Date(session.createdAt).toLocaleString()}
        </p>

        <div className="space-y-8 mt-10">

          {/* Summary */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-5">

              <FiFileText
                className="text-blue-400"
                size={24}
              />

              <h2 className="text-2xl font-bold">
                AI Summary
              </h2>

            </div>

            <div className="whitespace-pre-wrap text-slate-300 leading-7">
              {session.summary || "No summary available."}
            </div>

          </div>

          {/* Notes */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-5">

              <FiBookOpen
                className="text-purple-400"
                size={24}
              />

              <h2 className="text-2xl font-bold">
                AI Notes
              </h2>

            </div>

            <div className="whitespace-pre-wrap text-slate-300 leading-7">
              {session.notes || "No notes generated."}
            </div>

          </div>

          {/* Quiz */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-5">

              <FiHelpCircle
                className="text-green-400"
                size={24}
              />

              <h2 className="text-2xl font-bold">
                AI Quiz
              </h2>

            </div>

            <div className="whitespace-pre-wrap text-slate-300 leading-7">
              {session.quiz || "No quiz generated."}
            </div>

          </div>

          {/* Flashcards */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-5">

              <FiLayers
                className="text-orange-400"
                size={24}
              />

              <h2 className="text-2xl font-bold">
                AI Flashcards
              </h2>

            </div>

            <div className="whitespace-pre-wrap text-slate-300 leading-7">
              {session.flashcards || "No flashcards generated."}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudySessionDetails;