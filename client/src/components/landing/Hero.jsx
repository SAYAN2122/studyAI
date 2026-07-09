import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiPlayCircle,
  FiFileText,
  FiBook,
  FiMessageCircle,
  FiLayers,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-300">

              🚀 AI Powered Learning Platform

            </div>

            <h1 className="mt-8 text-6xl font-black leading-tight">

              Study

              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">

                {" "}Smarter

              </span>

              <br />

              Not Harder.

            </h1>

            <p className="mt-8 max-w-xl text-lg text-slate-400 leading-8">

              Upload PDFs, generate notes, create quizzes,
              flashcards and chat with your study material
              using AI.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/signup"
                className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 font-semibold hover:scale-105 transition"
              >

                Get Started

                <FiArrowRight />

              </Link>

              <button
                className="flex items-center gap-3 rounded-xl border border-slate-700 px-7 py-4 hover:bg-slate-900 transition"
              >

                <FiPlayCircle />

                Watch Demo

              </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>

                <h2 className="text-4xl font-bold">
                  10K+
                </h2>

                <p className="text-slate-500">
                  Students
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold">
                  50K+
                </h2>

                <p className="text-slate-500">
                  PDFs
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold">
                  1M+
                </h2>

                <p className="text-slate-500">
                  AI Responses
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >

            {/* Main Card */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-2xl font-bold">

                    AI Workspace

                  </h2>

                  <p className="text-slate-500">

                    Everything in one place

                  </p>

                </div>

                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">

                  <FiFileText size={24} />

                </div>

              </div>

              <div className="grid grid-cols-2 gap-5 mt-8">

                <div className="rounded-xl bg-slate-800 p-5">

                  <FiBook
                    className="text-blue-400"
                    size={28}
                  />

                  <h3 className="mt-4 font-semibold">

                    Notes

                  </h3>

                </div>

                <div className="rounded-xl bg-slate-800 p-5">

                  <FiLayers
                    className="text-purple-400"
                    size={28}
                  />

                  <h3 className="mt-4 font-semibold">

                    Flashcards

                  </h3>

                </div>

                <div className="rounded-xl bg-slate-800 p-5">

                  <FiMessageCircle
                    className="text-green-400"
                    size={28}
                  />

                  <h3 className="mt-4 font-semibold">

                    AI Chat

                  </h3>

                </div>

                <div className="rounded-xl bg-slate-800 p-5">

                  <FiFileText
                    className="text-orange-400"
                    size={28}
                  />

                  <h3 className="mt-4 font-semibold">

                    Quiz

                  </h3>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;