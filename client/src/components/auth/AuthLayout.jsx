import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="relative z-10 flex min-h-screen">

        {/* Left */}

        <div className="hidden lg:flex w-1/2 items-center justify-center p-16">

          <motion.div
            initial={{
              opacity:0,
              x:-60,
            }}
            animate={{
              opacity:1,
              x:0,
            }}
            transition={{
              duration:0.7,
            }}
            className="max-w-xl"
          >

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">

                <FiBookOpen size={34}/>

              </div>

              <div>

                <h1 className="text-4xl font-black">
                  StudyAI
                </h1>

                <p className="text-slate-400">
                  AI Learning Platform
                </p>

              </div>

            </div>

            <h2 className="text-6xl font-black mt-12 leading-tight">

              Learn Faster

              <br/>

              With AI.

            </h2>

            <p className="mt-8 text-slate-400 leading-8 text-lg">

              Upload PDFs.

              Generate Notes.

              Create Quizzes.

              Build Flashcards.

              Chat with AI.

              Everything inside one beautiful workspace.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-14">

              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

                <h3 className="text-3xl font-bold">

                  50K+

                </h3>

                <p className="text-slate-500 mt-2">

                  PDFs Processed

                </p>

              </div>

              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

                <h3 className="text-3xl font-bold">

                  10K+

                </h3>

                <p className="text-slate-500 mt-2">

                  Students

                </p>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Right */}

        <div className="flex flex-1 items-center justify-center px-6 py-20">

          <motion.div
            initial={{
              opacity:0,
              y:40,
            }}
            animate={{
              opacity:1,
              y:0,
            }}
            transition={{
              duration:0.7,
            }}
            className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-10 shadow-2xl"
          >

            <Link
              to="/"
              className="inline-block text-blue-400 hover:text-blue-300"
            >
              ← Back to Home
            </Link>

            <h2 className="mt-8 text-4xl font-black">
              {title}
            </h2>

            <p className="mt-3 text-slate-400">
              {subtitle}
            </p>

            <div className="mt-10">

              {children}

            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;