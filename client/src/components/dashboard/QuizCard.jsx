import { downloadTextAsPDF } from "../../utils/pdfExport";
import { copyToClipboard } from "../../utils/copyToClipboard";

const QuizCard = ({ quiz }) => {
  return (
    <div className="mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-5 md:p-6 shadow-lg">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            ❓ AI Quiz
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Test your understanding with AI-generated quiz questions.
          </p>

        </div>

      </div>

      {/* Quiz Content */}
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">

        <p className="whitespace-pre-wrap text-slate-300 leading-7 text-sm md:text-base">
          {quiz}
        </p>

      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

        <button
          onClick={() =>
            downloadTextAsPDF("AI Quiz", quiz)
          }
          className="bg-indigo-600 hover:bg-indigo-700 transition px-5 py-3 rounded-xl font-semibold"
        >
          📥 Download Quiz
        </button>

        <button
          onClick={() =>
            copyToClipboard(quiz)
          }
          className="bg-slate-700 hover:bg-slate-600 transition px-5 py-3 rounded-xl font-semibold"
        >
          📋 Copy Quiz
        </button>

      </div>

    </div>
  );
};

export default QuizCard;