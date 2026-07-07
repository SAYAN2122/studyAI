import {
  FiCheckCircle,
  FiCircle,
  FiTarget,
} from "react-icons/fi";

const goals = [
  {
    title: "Upload one PDF",
    completed: true,
  },
  {
    title: "Generate Notes",
    completed: true,
  },
  {
    title: "Complete one Quiz",
    completed: false,
  },
  {
    title: "Ask AI one question",
    completed: false,
  },
];

const TodayGoals = () => {
  const completedGoals = goals.filter(
    (goal) => goal.completed
  ).length;

  const progress =
    (completedGoals / goals.length) * 100;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6 shadow-lg">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <div className="bg-blue-600/20 p-3 rounded-xl">

          <FiTarget
            size={24}
            className="text-blue-400"
          />

        </div>

        <div>

          <h2 className="text-xl md:text-2xl font-bold">
            Today's Goals
          </h2>

          <p className="text-slate-400 text-sm">
            Stay consistent every day
          </p>

        </div>

      </div>

      {/* Progress */}
      <div className="mb-8">

        <div className="flex justify-between mb-2 text-sm">

          <span className="text-slate-400">
            Progress
          </span>

          <span className="text-blue-400 font-semibold">
            {completedGoals}/{goals.length}
          </span>

        </div>

        <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

          <div
            className="bg-blue-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />

        </div>

      </div>

      {/* Goal List */}
      <div className="space-y-4">

        {goals.map((goal) => (

          <div
            key={goal.title}
            className={`flex items-center gap-3 rounded-xl p-3 transition ${
              goal.completed
                ? "bg-green-500/10"
                : "bg-slate-800"
            }`}
          >

            {goal.completed ? (

              <FiCheckCircle
                size={22}
                className="text-green-500"
              />

            ) : (

              <FiCircle
                size={22}
                className="text-slate-500"
              />

            )}

            <span
              className={`text-sm md:text-base ${
                goal.completed
                  ? "text-white"
                  : "text-slate-400"
              }`}
            >
              {goal.title}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default TodayGoals;