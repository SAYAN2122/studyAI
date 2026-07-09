import {
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

const week = [
  { day: "Mon", active: true },
  { day: "Tue", active: true },
  { day: "Wed", active: true },
  { day: "Thu", active: false },
  { day: "Fri", active: true },
  { day: "Sat", active: true },
  { day: "Sun", active: true },
];

function StudyStreak() {
  const streak = 6;
  const goal = 3;
  const completed = 2;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            🔥 Study Streak
          </h2>

          <p className="text-slate-400 mt-2">
            Stay consistent every day.
          </p>

        </div>

        <div className="bg-orange-500/20 text-orange-400 rounded-full px-4 py-2 font-semibold">

          {streak} Days

        </div>

      </div>

      {/* Week Progress */}

      <div className="grid grid-cols-7 gap-3 mt-8">

        {week.map((item) => (

          <div
            key={item.day}
            className="flex flex-col items-center"
          >

            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition ${
                item.active
                  ? "bg-green-600"
                  : "bg-slate-800"
              }`}
            >

              {item.active ? (
                <FiCheckCircle
                  className="text-white"
                />
              ) : (
                <FiAward
                  className="text-slate-500"
                />
              )}

            </div>

            <p className="text-sm text-slate-400 mt-2">

              {item.day}

            </p>

          </div>

        ))}

      </div>

      {/* Daily Goal */}

      <div className="mt-10">

        <div className="flex justify-between text-sm">

          <span className="text-slate-400">

            Daily Goal

          </span>

          <span className="text-blue-400">

            {completed}/{goal} Tasks

          </span>

        </div>

        <div className="mt-3 h-3 rounded-full bg-slate-800 overflow-hidden">

          <div
            className="h-full rounded-full bg-gradient-to-r from-green-500 to-blue-500"
            style={{
              width: `${(completed / goal) * 100}%`,
            }}
          />

        </div>

      </div>

      {/* Motivation */}

      <div className="mt-8 rounded-xl bg-slate-800 p-5">

        <p className="text-lg font-semibold">

          🎯 Keep Going!

        </p>

        <p className="text-slate-400 mt-2">

          Complete one more task today to
          maintain your study streak.

        </p>

      </div>

    </div>
  );
}

export default StudyStreak;