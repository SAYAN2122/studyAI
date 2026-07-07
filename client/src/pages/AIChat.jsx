import { useState, useRef, useEffect } from "react";

import ChatBox from "../components/ChatBox";
import ChatSidebar from "../components/chat/ChatSidebar";
import ChatHeader from "../components/chat/ChatHeader";
import TypingIndicator from "../components/chat/TypingIndicator";

import { askAI } from "../services/aiService";

const AIChat = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!prompt.trim() || loading) return;

    const currentPrompt = prompt;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: currentPrompt,
      },
    ]);

    setPrompt("");
    setLoading(true);

    try {
      const reply = await askAI(currentPrompt);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message: reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message: "❌ Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-white">

      <ChatSidebar />

      <div className="flex flex-1 flex-col">

        <ChatHeader />

        <div className="flex-1 overflow-y-auto p-8">

          {messages.length === 0 && (
            <div className="flex h-full items-center justify-center">

              <div className="text-center">

                <h2 className="text-4xl font-bold">
                  Welcome to StudyAI 👋
                </h2>

                <p className="mt-4 text-gray-400">
                  Ask me anything about programming,
                  DSA, college subjects, PDFs and more.
                </p>

              </div>

            </div>
          )}

          {messages.map((msg, index) => (
            <ChatBox
              key={index}
              sender={msg.sender}
              message={msg.message}
            />
          ))}

          {loading && <TypingIndicator />}

          <div ref={bottomRef}></div>

        </div>

        <div className="border-t border-slate-800 p-5">

          <div className="flex gap-3">

            <input
              type="text"
              value={prompt}
              placeholder="Ask StudyAI anything..."
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-blue-500"
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="rounded-xl bg-blue-600 px-8 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-700"
            >
              {loading ? "Thinking..." : "Send"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AIChat;