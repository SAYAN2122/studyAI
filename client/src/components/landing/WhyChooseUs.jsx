import { motion } from "framer-motion";
import {
  FiZap,
  FiClock,
  FiAward,
  FiShield,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiZap,
    title: "AI Powered Learning",
    description:
      "Generate summaries, notes, quizzes and flashcards in seconds using Google's Gemini AI.",
  },
  {
    icon: FiClock,
    title: "Save Hours Every Week",
    description:
      "Spend less time creating notes and more time understanding concepts.",
  },
  {
    icon: FiAward,
    title: "Built for Students",
    description:
      "Designed specifically for college students preparing for exams and assignments.",
  },
  {
    icon: FiShield,
    title: "Secure & Private",
    description:
      "Your study sessions remain private and accessible only to your account.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-28">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <span className="uppercase tracking-widest text-blue-400 font-semibold">

            Why Choose StudyAI

          </span>

          <h2 className="text-5xl font-black text-white mt-4">

            Learn Faster.
            <br />
            Remember Longer.

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8 text-lg">

            Everything you need to transform PDFs into an
            intelligent learning experience powered by AI.

          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {benefits.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">

                  <Icon
                    className="text-white"
                    size={30}
                  />

                </div>

                <h3 className="text-2xl font-bold text-white mt-8">

                  {item.title}

                </h3>

                <p className="text-slate-400 mt-5 leading-8">

                  {item.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;