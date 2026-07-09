import { motion } from "framer-motion";
import {
  FiFileText,
  FiBookOpen,
  FiMessageCircle,
  FiHelpCircle,
  FiLayers,
  FiShield,
} from "react-icons/fi";

const features = [
  {
    icon: FiFileText,
    title: "AI PDF Analysis",
    description:
      "Upload study material and instantly receive structured summaries powered by AI.",
    color: "text-blue-400",
  },
  {
    icon: FiBookOpen,
    title: "Smart Notes",
    description:
      "Generate clean and organized study notes from any PDF in seconds.",
    color: "text-purple-400",
  },
  {
    icon: FiHelpCircle,
    title: "Quiz Generator",
    description:
      "Create practice quizzes automatically to test your understanding.",
    color: "text-green-400",
  },
  {
    icon: FiLayers,
    title: "Flashcards",
    description:
      "Turn important concepts into revision flashcards with one click.",
    color: "text-orange-400",
  },
  {
    icon: FiMessageCircle,
    title: "AI Chat",
    description:
      "Ask questions directly about your uploaded document like ChatGPT.",
    color: "text-cyan-400",
  },
  {
    icon: FiShield,
    title: "Secure Storage",
    description:
      "Your study sessions are securely stored and available whenever you need them.",
    color: "text-pink-400",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 py-24"
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
            Features
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            Everything You Need
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400 leading-8">
            StudyAI combines AI-powered document analysis,
            smart revision tools and an intelligent assistant
            into one modern learning platform.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center">

                  <Icon
                    className={feature.color}
                    size={30}
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-7">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;