import { downloadTextAsPDF } from "../../utils/pdfExport";
import { copyToClipboard } from "../../utils/copyToClipboard";

const FlashcardsCard = ({ flashcards }) => {
  return (
    <div className="mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-5 md:p-6 shadow-lg">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            🧠 AI Flashcards
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Revise faster using AI-generated flashcards.
          </p>

        </div>

      </div>

      {/* Flashcards Content */}
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">

        <p className="whitespace-pre-wrap text-slate-300 leading-7 text-sm md:text-base">
          {flashcards}
        </p>

      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

        <button
          onClick={() =>
            downloadTextAsPDF(
              "AI Flashcards",
              flashcards
            )
          }
          className="bg-indigo-600 hover:bg-indigo-700 transition px-5 py-3 rounded-xl font-semibold"
        >
          📥 Download Flashcards
        </button>

        <button
          onClick={() =>
            copyToClipboard(flashcards)
          }
          className="bg-slate-700 hover:bg-slate-600 transition px-5 py-3 rounded-xl font-semibold"
        >
          📋 Copy Flashcards
        </button>

      </div>

    </div>
  );
};

export default FlashcardsCard;