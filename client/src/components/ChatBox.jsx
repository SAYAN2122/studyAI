import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { BsRobot } from "react-icons/bs";
import ReactMarkdown from "react-markdown";

import CodeBlock from "./chat/CodeBlock";

const ChatBox = ({ sender, message }) => {
  const isUser = sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-6`}
    >
      <div
        className={`flex gap-4 max-w-5xl ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
            isUser
              ? "bg-gradient-to-br from-blue-500 to-indigo-600"
              : "bg-gradient-to-br from-purple-600 to-pink-600"
          }`}
        >
          {isUser ? <FiUser size={22} /> : <BsRobot size={22} />}
        </div>

        {/* Message Bubble */}
        <div
          className={`rounded-3xl px-6 py-5 shadow-xl border ${
            isUser
              ? "bg-blue-600 text-white border-blue-500"
              : "bg-slate-900 border-slate-700"
          }`}
        >
          <p className="font-semibold mb-3">
            {isUser ? "You" : "StudyAI"}
          </p>

          {isUser ? (
            <p className="leading-8 whitespace-pre-wrap">
              {message}
            </p>
          ) : (
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  code({ inline, className, children }) {
                    const match = /language-(\w+)/.exec(
                      className || ""
                    );

                    if (!inline && match) {
                      return (
                        <CodeBlock
                          language={match[1]}
                          value={String(children).replace(/\n$/, "")}
                        />
                      );
                    }

                    return (
                      <code className="bg-slate-800 px-1 py-0.5 rounded">
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {message}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatBox;