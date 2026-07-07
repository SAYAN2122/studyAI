import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiBookOpen,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

import { getLatestSession } from "../../services/continueLearningService";

const ContinueLearningCard = () => {
  const navigate = useNavigate();

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const data = await getLatestSession();
        setSession(data.session);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  // Loading Skeleton
  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 animate-pulse">

        <div className="h-6 w-52 bg-slate-700 rounded mb-6"></div>

        <div className="h-5 w-72 bg-slate-700 rounded mb-4"></div>

        <div className="h-4 w-44 bg-slate-700 rounded mb-8"></div>

        <div className="h-12 w-48 bg-slate-700 rounded-xl"></div>

      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-lg">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Left Section */}
        <div className="flex-1">

          <div className="flex items-center gap-3 mb-4">

            <div className="bg-blue-600/20 p-3 rounded-xl">

              <FiBookOpen
                size={28}
                className="text-blue-400"
              />

            </div>

            <h2 className="text-2xl font-bold">
              Continue Learning
            </h2>

          </div>

          <h3 className="text-xl md:text-2xl font-semibold break-words">
            {session.pdfName}
          </h3>

          <div className="flex items-center gap-2 mt-4 text-slate-400">

            <FiClock />

            <span className="text-sm">
              Last studied on{" "}
              {new Date(
                session.createdAt
              ).toLocaleString()}
            </span>

          </div>

          {/* Progress */}
          <div className="mt-6">

            <div className="flex justify-between text-sm text-slate-400 mb-2">

              <span>Progress</span>

              <span>80%</span>

            </div>

            <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

              <div className="bg-blue-500 h-3 w-4/5 rounded-full"></div>

            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex justify-center lg:justify-end">

          <button
            onClick={() =>
              navigate(`/study-session/${session._id}`)
            }
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            Resume Learning

            <FiArrowRight size={18} />

          </button>

        </div>

      </div>

    </div>
  );
};

export default ContinueLearningCard;