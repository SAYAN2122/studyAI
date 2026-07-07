import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import { getStudyProgress } from "../../services/dashboardService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const StudyProgressChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const data = await getStudyProgress();

        setChartData({
          labels: data.progress.map((item) => item.day),
          datasets: [
            {
              label: "Study Sessions",
              data: data.progress.map(
                (item) => item.sessions
              ),
              backgroundColor: "#3b82f6",
              borderRadius: 8,
              borderSkipped: false,
              maxBarThickness: 40,
            },
          ],
        });

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          color: "#94a3b8",
        },
      },

      y: {
        beginAtZero: true,

        ticks: {
          precision: 0,
          stepSize: 1,
          color: "#94a3b8",
        },

        grid: {
          color: "#334155",
        },
      },
    },
  };

  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 animate-pulse">

        <div className="h-6 w-52 bg-slate-700 rounded mb-6" />

        <div className="h-72 bg-slate-800 rounded-xl" />

      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6 shadow-lg">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

        <div>

          <h2 className="text-xl md:text-2xl font-bold text-white">
            Weekly Study Progress
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Your study activity over the last 7 days
          </p>

        </div>

      </div>

      <div className="h-72 md:h-96">

        <Bar
          data={chartData}
          options={options}
        />

      </div>

    </div>
  );
};

export default StudyProgressChart;