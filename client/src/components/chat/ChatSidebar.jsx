import { motion } from "framer-motion";
import {
  FiMessageSquare,
  FiPlus,
  FiTrash2,
} from "react-icons/fi";

const ChatSidebar = () => {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-72 bg-slate-950 border-r border-slate-800 flex flex-col"
    >
      <div className="p-5">

        <button
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r
          from-blue-600
          to-purple-600
          py-3
          font-semibold
          hover:scale-105
          transition"
        >
          <FiPlus />

          New Chat
        </button>

      </div>

      <div className="px-5 flex-1">

        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-5">
          Recent Chats
        </p>

        <div className="space-y-3">

          {[
            "Binary Search",
            "React Hooks",
            "Operating System",
            "DBMS",
            "Computer Networks",
          ].map((chat) => (

            <div
              key={chat}
              className="group flex items-center justify-between rounded-xl
              bg-slate-900
              p-3
              hover:bg-slate-800
              transition
              cursor-pointer"
            >

              <div className="flex items-center gap-3">

                <FiMessageSquare />

                <span>{chat}</span>

              </div>

              <FiTrash2
                className="opacity-0 group-hover:opacity-100 transition"
              />

            </div>

          ))}

        </div>

      </div>

      <div className="border-t border-slate-800 p-5">

        <div className="rounded-xl bg-slate-900 p-4">

          <p className="font-semibold">
            StudyAI Pro
          </p>

          <p className="text-gray-400 text-sm mt-2">
            AI-powered learning platform
          </p>

        </div>

      </div>

    </motion.div>
  );
};

export default ChatSidebar;