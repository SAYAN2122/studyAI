import { useEffect, useState } from "react";
import {
  FiFileText,
  FiClock,
  FiActivity,
} from "react-icons/fi";

import { getStudySessions } from "../../services/studySessionService";

const RecentActivity = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentSessions();
  }, []);

  const fetchRecentSessions = async () => {
    try {
      const data = await getStudySessions();

      setSessions(data.sessions.slice(0, 5));

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Loading Skeleton
  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">

        <div className="h-6 w-48 bg-slate-700 rounded animate-pulse mb-8"></div>

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-20 bg-slate-800 rounded-xl animate-pulse mb-4"
          />
        ))}

      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6 shadow-lg">

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">

        <div className="bg-blue-600/20 p-3 rounded-xl">

          <FiActivity
            size={24}
            className="text-blue-400"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <p className="text-slate-400 text-sm">
            Your latest study sessions
          </p>

        </div>

      </div>

      {/* Empty State */}
      {sessions.length === 0 ? (

        <div className="text-center py-12">

          <FiFileText
            size={55}
            className="mx-auto text-slate-600"
          />

          <h3 className="mt-5 text-xl font-semibold">
            No Activity Yet
          </h3>

          <p className="text-slate-400 mt-2">
            Upload your first PDF to start learning.
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {sessions.map((session) => (

            <div
              key={session._id}
              className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition-all duration-300"
            >

              <div className="flex items-center gap-4">

                <div className="bg-blue-600/20 p-3 rounded-xl">

                  <FiFileText
                    size={24}
                    className="text-blue-400"
                  />

                </div>

                <div>

                  <h3 className="font-semibold break-all">
                    {session.pdfName}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm">

                    <FiClock size={14} />

                    <span>
                      {new Date(
                        session.createdAt
                      ).toLocaleString()}
                    </span>

                  </div>

                </div>

              </div>

              <span className="hidden md:block text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">
                PDF
              </span>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default RecentActivity;