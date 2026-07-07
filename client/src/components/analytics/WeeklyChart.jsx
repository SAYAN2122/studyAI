import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const WeeklyChart = () => {
  const data = {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],
    datasets: [
      {
        label: "Study Hours",
        data: [2, 3, 1, 5, 4, 6, 3],
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Weekly Progress
      </h2>

      <Line data={data} />
    </div>
  );
};

export default WeeklyChart;