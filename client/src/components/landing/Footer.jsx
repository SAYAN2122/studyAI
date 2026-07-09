import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiDownload,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

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
              StudyAI is an AI-powered learning platform
              built using the MERN Stack and Gemini AI.
              Generate notes, quizzes, flashcards and
              chat with PDFs to make learning smarter.
            </p>

            <div className="mt-6">
              <p className="text-slate-500 text-sm">
                Designed & Developed by
              </p>

              <h3 className="text-xl font-semibold text-blue-400 mt-1">
                Sayan Goel
              </h3>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-bold mb-5">
              Product
            </h3>

            <div className="space-y-3">
              <a
                href="#features"
                className="block text-slate-400 hover:text-white transition"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="block text-slate-400 hover:text-white transition"
              >
                How It Works
              </a>

              <a
                href="#faq"
                className="block text-slate-400 hover:text-white transition"
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
                className="block text-slate-400 hover:text-white transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="block text-slate-400 hover:text-white transition"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Developer */}
          <div>
            <h3 className="text-white font-bold mb-5">
              Connect With Me
            </h3>

            <div className="space-y-4">

              <a
                href="mailto:sayangoel14@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition"
              >
                <FiMail />
                sayangoel14@gmail.com
              </a>

              <a
                href="https://github.com/SAYAN2122"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition"
              >
                <FiGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sayangoel"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition"
              >
                <FiLinkedin />
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/SAYAN_GOEL/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-yellow-400 transition"
              >
                <SiLeetcode />
                LeetCode
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition"
              >
                <FiDownload />
                Resume
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} StudyAI •
            {" "}
            Designed & Developed by
            <span className="text-blue-400 font-semibold">
              {" "}Sayan Goel
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center"
          >
            <FiArrowUp className="text-white" />
          </button>

        </div>
      </div>
    </footer>
  );
}

export default Footer;