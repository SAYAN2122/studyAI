import { motion } from "framer-motion";
import {
  FiUploadCloud,
  FiCpu,
  FiBookOpen,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiUploadCloud,
    title: "Upload Your PDF",
    description:
      "Upload lecture notes, books, assignments or any study material in PDF format.",
  },
  {
    number: "02",
    icon: FiCpu,
    title: "AI Processes Everything",
    description:
      "StudyAI analyzes your document and generates summaries, notes, quizzes and flashcards instantly.",
  },
  {
    number: "03",
    icon: FiBookOpen,
    title: "Learn Smarter",
    description:
      "Revise faster using AI Chat, quizzes and flashcards designed specifically for your document.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-slate-950 py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="text-blue-400 font-semibold uppercase tracking-widest">
            How It Works
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            Three Simple Steps
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400 leading-8">
            No complicated setup. Upload your study material,
            let AI do the heavy lifting and focus on learning.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition-all"
              >

                <div className="absolute top-6 right-6 text-6xl font-black text-slate-800">

                  {step.number}

                </div>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">

                  <Icon
                    size={30}
                    className="text-white"
                  />

                </div>

                <h3 className="text-2xl font-bold text-white mt-8">

                  {step.title}

                </h3>

                <p className="text-slate-400 leading-7 mt-5">

                  {step.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;