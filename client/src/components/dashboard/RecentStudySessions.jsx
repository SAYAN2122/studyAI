import { useEffect, useState } from "react";
import { FiClock, FiBook } from "react-icons/fi";
import { getRecentSessions } from "../../services/dashboardService";

const RecentStudySessions = () => {

  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {

      const data = await getRecentSessions();

      setSessions(data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return (
      <div className="bg-slate-900 rounded-2xl p-6">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        📚 Recent Study Sessions
      </h2>

      {sessions.length === 0 ? (

        <p className="text-slate-400">
          No Study Sessions Yet
        </p>

      ) : (

        <div className="space-y-4">

          {sessions.map((session) => (

            <div
              key={session._id}
              className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
            >

              <div>

                <div className="flex items-center gap-2">

                  <FiBook className="text-blue-400"/>

                  <h3 className="font-semibold">
                    {session.title || session.pdfName}
                  </h3>

                </div>

                <div className="flex items-center gap-2 text-slate-400 mt-2 text-sm">

                  <FiClock />

                  {new Date(
                    session.updatedAt
                  ).toLocaleDateString()}

                </div>

              </div>

              <button
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
              >
                Open
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default RecentStudySessions;