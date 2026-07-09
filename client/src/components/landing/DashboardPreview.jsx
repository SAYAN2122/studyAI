import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiFileText,
  FiBookOpen,
  FiHelpCircle,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

function DashboardPreview() {
  return (
    <section className="bg-slate-950 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-blue-400 uppercase tracking-widest font-semibold">
            Dashboard
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            A Powerful Workspace
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto leading-8 text-lg">
            Everything you generate is organized into one intelligent
            dashboard built for students.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
        >

          {/* Top Header */}

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Dashboard
              </h3>

              <p className="text-slate-500 mt-2">
                Welcome back 👋
              </p>
            </div>

            <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-5 py-3">
              <FiTrendingUp className="text-green-400" />

              <span className="text-green-400 font-semibold">
                +26%
              </span>
            </div>
          </div>

          {/* Statistics */}

          <div className="grid md:grid-cols-4 gap-6 mt-10">            {/* PDFs */}

            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">
                    PDFs
                  </p>

                  <h2 className="text-3xl font-bold text-white mt-2">
                    128
                  </h2>
                </div>

                <FiFileText
                  size={30}
                  className="text-blue-400"
                />
              </div>
            </div>

            {/* Notes */}

            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">
                    Notes
                  </p>

                  <h2 className="text-3xl font-bold text-white mt-2">
                    314
                  </h2>
                </div>

                <FiBookOpen
                  size={30}
                  className="text-purple-400"
                />
              </div>
            </div>

            {/* Quizzes */}

            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">
                    Quizzes
                  </p>

                  <h2 className="text-3xl font-bold text-white mt-2">
                    82
                  </h2>
                </div>

                <FiHelpCircle
                  size={30}
                  className="text-green-400"
                />
              </div>
            </div>

            {/* Flashcards */}

            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">
                    Flashcards
                  </p>

                  <h2 className="text-3xl font-bold text-white mt-2">
                    640
                  </h2>
                </div>

                <FiLayers
                  size={30}
                  className="text-orange-400"
                />
              </div>
            </div>

          </div>

          {/* Main Dashboard */}

          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* Left Section */}

            <div className="lg:col-span-2 bg-slate-800 rounded-2xl p-6">

              <div className="flex items-center justify-between">

                <h3 className="text-xl font-bold text-white">
                  Weekly Study Progress
                </h3>

                <FiBarChart2
                  className="text-blue-400"
                  size={26}
                />

              </div>

              <div className="mt-8 flex items-end justify-between h-64">                {[55, 85, 65, 95, 70, 110, 90].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.5,
                      }}
                      viewport={{ once: true }}
                      className="w-10 rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400"
                    />
                  )
                )}
              </div>
            </div>

            {/* Right Section */}

            <div className="space-y-6">

              {/* Recent Activity */}

              <div className="bg-slate-800 rounded-2xl p-6">

                <h3 className="text-xl font-bold text-white">
                  Recent Activity
                </h3>

                <div className="space-y-4 mt-6">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="font-semibold text-white">
                        Operating Systems.pdf
                      </p>

                      <p className="text-sm text-slate-400">
                        Notes Generated
                      </p>

                    </div>

                    <span className="text-green-400">
                      ✓
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="font-semibold text-white">
                        DBMS.pdf
                      </p>

                      <p className="text-sm text-slate-400">
                        Quiz Created
                      </p>

                    </div>

                    <span className="text-blue-400">
                      ✓
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="font-semibold text-white">
                        AI Notes.pdf
                      </p>

                      <p className="text-sm text-slate-400">
                        Flashcards Ready
                      </p>

                    </div>

                    <span className="text-purple-400">
                      ✓
                    </span>

                  </div>

                </div>

              </div>

              {/* Today's Goals */}

              <div className="bg-slate-800 rounded-2xl p-6">

                <h3 className="text-xl font-bold text-white">
                  Today's Goals
                </h3>

                <div className="space-y-4 mt-6">                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">
                      Upload PDF
                    </span>

                    <span className="text-green-400">
                      Completed
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">
                      Generate Notes
                    </span>

                    <span className="text-green-400">
                      Completed
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">
                      Complete Quiz
                    </span>

                    <span className="text-yellow-400">
                      Pending
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">
                      AI Chat
                    </span>

                    <span className="text-yellow-400">
                      Pending
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default DashboardPreview;