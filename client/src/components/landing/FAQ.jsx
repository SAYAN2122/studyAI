import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiPlus,
  FiMinus,
} from "react-icons/fi";

const faqs = [
  {
    question: "How does StudyAI work?",
    answer:
      "Simply upload your PDF and StudyAI automatically generates summaries, notes, quizzes, flashcards and lets you chat with your document using AI.",
  },
  {
    question: "Which file formats are supported?",
    answer:
      "Currently StudyAI supports PDF files. More document formats will be added in future updates.",
  },
  {
    question: "Can I save my study sessions?",
    answer:
      "Yes. Every generated summary, note, quiz and flashcard can be saved to your account and accessed later.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your uploaded files and study sessions are associated with your account and are not shared with other users.",
  },
  {
    question: "Do I need AI knowledge?",
    answer:
      "Not at all. StudyAI is designed for students and educators. Simply upload your PDF and let the AI handle the rest.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="bg-slate-950 py-28"
    >
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-widest text-blue-400 font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Everything you need to know before getting started.
          </p>

        </motion.div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <motion.div
              key={faq.question}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? -1 : index
                  )
                }
                className="w-full px-8 py-6 flex justify-between items-center"
              >

                <span className="text-left text-lg font-semibold text-white">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <FiMinus size={22} />
                ) : (
                  <FiPlus size={22} />
                )}

              </button>

              {openIndex === index && (

                <div className="px-8 pb-8 text-slate-400 leading-8">

                  {faq.answer}

                </div>

              )}

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;