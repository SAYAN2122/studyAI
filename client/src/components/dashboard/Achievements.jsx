import {
  FiAward,
  FiStar,
  FiBookOpen,
  FiTarget,
} from "react-icons/fi";

const achievements = [
  {
    title: "First Upload",
    description: "Upload your first PDF",
    icon: FiBookOpen,
    unlocked: true,
    color: "bg-blue-600",
  },
  {
    title: "Quiz Master",
    description: "Complete 25 quizzes",
    icon: FiTarget,
    unlocked: true,
    color: "bg-purple-600",
  },
  {
    title: "Study Streak",
    description: "Study for 7 consecutive days",
    icon: FiAward,
    unlocked: false,
    color: "bg-orange-600",
  },
  {
    title: "AI Explorer",
    description: "Ask AI 100 questions",
    icon: FiStar,
    unlocked: false,
    color: "bg-pink-600",
  },
];

function Achievements() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            🏆 Achievements
          </h2>

          <p className="text-slate-400 mt-2">
            Unlock badges as you learn.
          </p>

        </div>

        <span className="text-blue-400 font-semibold">
          2 / 4 Unlocked
        </span>

      </div>

      <div className="space-y-5 mt-8">

        {achievements.map((achievement) => {

          const Icon = achievement.icon;

          return (

            <div
              key={achievement.title}
              className={`flex items-center justify-between rounded-xl border p-4 transition ${
                achievement.unlocked
                  ? "border-green-500 bg-green-500/10"
                  : "border-slate-800 bg-slate-800"
              }`}
            >

              <div className="flex items-center gap-4">

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${achievement.color}`}
                >
                  <Icon
                    className="text-white"
                    size={26}
                  />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {achievement.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {achievement.description}
                  </p>

                </div>

              </div>

              {achievement.unlocked ? (

                <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                  Unlocked
                </span>

              ) : (

                <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-300">
                  Locked
                </span>

              )}

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default Achievements;