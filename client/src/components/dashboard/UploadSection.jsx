import { FiUploadCloud } from "react-icons/fi";

const UploadSection = ({
  loading,
  selectedFile,
  handleFileChange,
  handleUpload,
}) => {
  return (
    <div className="border-2 border-dashed border-slate-700 rounded-2xl p-6 md:p-10 text-center bg-slate-900/40">

      {/* Upload Icon */}
      <div className="flex justify-center">

        <div className="bg-blue-500/10 p-5 rounded-full">

          <FiUploadCloud
            size={55}
            className="text-blue-500"
          />

        </div>

      </div>

      {/* Heading */}
      <h3 className="text-xl md:text-2xl font-bold mt-6">
        Upload Your PDF
      </h3>

      <p className="text-slate-400 text-sm md:text-base mt-3">
        Choose a PDF file and let StudyAI generate
        summaries, notes, quizzes, and flashcards.
      </p>

      {/* File Input */}
      <div className="mt-8">

        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="block w-full text-sm text-slate-300
          file:mr-4
          file:py-3
          file:px-5
          file:rounded-lg
          file:border-0
          file:bg-blue-600
          file:text-white
          file:cursor-pointer
          hover:file:bg-blue-700
          cursor-pointer"
        />

      </div>

      {/* Selected File */}
      {selectedFile && (

        <div className="mt-5 rounded-xl bg-slate-800 p-4">

          <p className="text-green-400 break-all">

            📄 {selectedFile.name}

          </p>

        </div>

      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-8 w-full md:w-auto bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-3 rounded-xl font-semibold disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload PDF"}
      </button>

    </div>
  );
};

export default UploadSection;