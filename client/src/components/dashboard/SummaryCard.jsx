import { downloadTextAsPDF } from "../../utils/pdfExport";
import { copyToClipboard } from "../../utils/copyToClipboard";

const SummaryCard = ({
  summary,
  onGenerateNotes,
  onGenerateQuiz,
  onGenerateFlashcards,
  onSaveSession,
}) => {
  return (
    <div className="mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-5 md:p-6 shadow-lg">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            🤖 AI Summary
          </h2>

          <p className="text-slate-400 mt-1 text-sm">
            AI-generated summary of your uploaded PDF.
          </p>

        </div>

      </div>

      {/* Summary */}
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-700">

        <p className="whitespace-pre-wrap text-slate-300 leading-7 text-sm md:text-base">
          {summary}
        </p>

      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">

        <button
          onClick={onGenerateNotes}
          className="bg-purple-600 hover:bg-purple-700 transition px-5 py-3 rounded-xl font-semibold"
        >
          📝 Generate Notes
        </button>

        <button
          onClick={onGenerateQuiz}
          className="bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-xl font-semibold"
        >
          ❓ Generate Quiz
        </button>

        <button
          onClick={onGenerateFlashcards}
          className="bg-orange-600 hover:bg-orange-700 transition px-5 py-3 rounded-xl font-semibold"
        >
          🧠 Generate Flashcards
        </button>

        <button
          onClick={onSaveSession}
          className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl font-semibold"
        >
          💾 Save Session
        </button>

        <button
          onClick={() =>
            downloadTextAsPDF("AI Summary", summary)
          }
          className="bg-indigo-600 hover:bg-indigo-700 transition px-5 py-3 rounded-xl font-semibold"
        >
          📥 Download
        </button>

        <button
          onClick={() =>
            copyToClipboard(summary)
          }
          className="bg-slate-700 hover:bg-slate-600 transition px-5 py-3 rounded-xl font-semibold"
        >
          📋 Copy
        </button>

      </div>

    </div>
  );
};

export default SummaryCard;