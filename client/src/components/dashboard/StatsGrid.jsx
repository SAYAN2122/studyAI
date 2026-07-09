import { useEffect, useState } from "react";
import {
  FiFileText,
  FiBookOpen,
  FiHelpCircle,
  FiLayers,
} from "react-icons/fi";

import { getDashboardStats } from "../../services/dashboardService";

const StatsGrid = () => {
  const [stats, setStats] = useState({
  totalPDFs: 0,
  totalNotes: 0,
  totalQuiz: 0,
  totalFlashcards: 0,
});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data.stats);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "PDFs Uploaded",
      value: stats.totalPDFs,
      icon: FiFileText,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Notes Generated",
      value: stats.totalNotes,
      icon: FiBookOpen,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      title: "Quizzes",
      value: stats.totalQuiz,
      icon: FiHelpCircle,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      title: "Flashcards",
      value: stats.totalFlashcards,
      icon: FiLayers,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-32 rounded-2xl bg-slate-900 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-400 text-xs md:text-sm">
                  {card.title}
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mt-3 text-white">
                  {card.value}
                </h2>

              </div>

              <div
                className={`${card.bg} p-3 rounded-xl`}
              >
                <Icon
                  size={30}
                  className={card.color}
                />
              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
};

export default StatsGrid;