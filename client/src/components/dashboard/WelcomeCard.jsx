import { useEffect, useState } from "react";
import { FiBookOpen } from "react-icons/fi";

import { getDashboardStats } from "../../services/dashboardService";

const WelcomeCard = () => {
  const [stats, setStats] = useState({
    totalPDFs: 0,
    totalNotes: 0,
    totalQuizzes: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data.stats);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-5 md:p-8 text-white shadow-lg">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Welcome Back 👋
          </h2>

          <p className="mt-3 text-blue-100 text-sm md:text-base">
            Continue your AI-powered learning journey.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 mt-8">

            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                {stats.totalPDFs}
              </h3>

              <p className="text-blue-100 text-sm mt-1">
                PDFs
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                {stats.totalNotes}
              </h3>

              <p className="text-blue-100 text-sm mt-1">
                Notes
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                {stats.totalQuizzes}
              </h3>

              <p className="text-blue-100 text-sm mt-1">
                Quizzes
              </p>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex justify-center">

          <div className="bg-white/10 p-6 rounded-full backdrop-blur-sm">

            <FiBookOpen
              className="text-white"
              size={70}
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default WelcomeCard;