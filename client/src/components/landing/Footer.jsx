import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">

                <FiBookOpen
                  size={24}
                  className="text-white"
                />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  StudyAI
                </h2>

                <p className="text-sm text-slate-500">
                  AI Learning Platform
                </p>

              </div>

            </div>

            <p className="mt-6 text-slate-400 leading-7">

              Learn faster using AI-powered summaries,
              quizzes, flashcards and document chat.

            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-white font-bold mb-5">
              Product
            </h3>

            <div className="space-y-3">

              <a
                href="#features"
                className="block text-slate-400 hover:text-white"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="block text-slate-400 hover:text-white"
              >
                How It Works
              </a>

              <a
                href="#faq"
                className="block text-slate-400 hover:text-white"
              >
                FAQ
              </a>

            </div>

          </div>

          {/* Account */}

          <div>

            <h3 className="text-white font-bold mb-5">
              Account
            </h3>

            <div className="space-y-3">

              <Link
                to="/login"
                className="block text-slate-400 hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="block text-slate-400 hover:text-white"
              >
                Sign Up
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white font-bold mb-5">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="mailto:hello@studyai.app"
                className="flex items-center gap-3 text-slate-400 hover:text-white"
              >
                <FiMail />
                Contact
              </a>

              <a
                href="https://github.com/SAYAN2122"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white"
              >
                <FiGithub />
                GitHub
              </a>

              {/* Replace this URL with your real LinkedIn profile */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white"
              >
                <FiLinkedin />
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-slate-500 text-center md:text-left">

            © {new Date().getFullYear()} StudyAI.
            Built with React, Node.js & Gemini AI.

          </p>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition"
          >
            <FiArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;