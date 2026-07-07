const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-5">

      <div className="bg-slate-800 rounded-2xl px-5 py-4">

        <p className="text-sm font-semibold mb-2">
          🤖 StudyAI
        </p>

        <div className="flex gap-2">

          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>

          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>

          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>

        </div>

      </div>

    </div>
  );
};

export default TypingIndicator;