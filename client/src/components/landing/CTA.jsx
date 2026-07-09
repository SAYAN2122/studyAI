import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-600/20 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-12 text-center shadow-2xl"
        >

          <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-5 py-2 text-blue-300 font-semibold">

            🚀 Start Learning Smarter Today

          </span>

          <h2 className="mt-8 text-5xl font-black text-white leading-tight">

            Turn Every PDF Into
            <br />

            Your Personal AI Tutor

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-slate-400 text-lg leading-8">

            Upload your notes, books or study material and let
            StudyAI instantly generate summaries, quizzes,
            flashcards and intelligent AI conversations.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              to="/signup"
              className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold hover:scale-105 transition"
            >
              Get Started Free

              <FiArrowRight />
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-slate-700 px-8 py-4 hover:bg-slate-800 transition"
            >
              Login
            </Link>

          </div>

          {/* Trust Points */}

          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <div className="flex justify-center items-center gap-3">

              <FiCheckCircle className="text-green-400" />

              <span className="text-slate-300">
                AI Powered
              </span>

            </div>

            <div className="flex justify-center items-center gap-3">

              <FiCheckCircle className="text-green-400" />

              <span className="text-slate-300">
                Secure Sessions
              </span>

            </div>

            <div className="flex justify-center items-center gap-3">

              <FiCheckCircle className="text-green-400" />

              <span className="text-slate-300">
                Fast Learning
              </span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default CTA;