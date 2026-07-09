function StudyProgress() {
  const progress = 72;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold text-white">
        Learning Progress
      </h2>

      <p className="text-slate-400 mt-2">
        Your overall study completion
      </p>

      {/* Circular Progress */}

      <div className="flex justify-center mt-10">

        <div
          className="relative w-44 h-44 rounded-full flex items-center justify-center"
          style={{
            background: `conic-gradient(#2563eb ${progress * 3.6}deg, #1e293b 0deg)`,
          }}
        >

          <div className="w-36 h-36 rounded-full bg-slate-950 flex flex-col items-center justify-center">

            <h2 className="text-4xl font-black">
              {progress}%
            </h2>

            <p className="text-slate-400 text-sm mt-1">
              Completed
            </p>

          </div>

        </div>

      </div>

      {/* XP */}

      <div className="mt-10">

        <div className="flex justify-between text-sm text-slate-400">

          <span>Level 5</span>

          <span>720 / 1000 XP</span>

        </div>

        <div className="mt-3 h-3 rounded-full bg-slate-800 overflow-hidden">

          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
            style={{
              width: "72%",
            }}
          />

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-3 gap-4 mt-10">

        <div className="text-center">

          <h3 className="text-2xl font-bold text-green-400">
            18
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            PDFs
          </p>

        </div>

        <div className="text-center">

          <h3 className="text-2xl font-bold text-blue-400">
            142
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            Notes
          </p>

        </div>

        <div className="text-center">

          <h3 className="text-2xl font-bold text-purple-400">
            46
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            Quizzes
          </p>

        </div>

      </div>

    </div>
  );
}

export default StudyProgress;