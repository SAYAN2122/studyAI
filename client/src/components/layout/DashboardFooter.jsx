import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

function DashboardFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Left */}
          <div className="text-center lg:text-left">

            <h2 className="text-2xl font-bold text-white">
              StudyAI
            </h2>

            <p className="text-slate-400 mt-2">
              AI Powered Learning Platform
            </p>

            <p className="text-slate-500 mt-3 text-sm">
              Designed & Developed by
              <span className="text-blue-400 font-semibold">
                {" "}Sayan Goel
              </span>
            </p>

          </div>

          {/* Right */}

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition"
            >
              <FiMail />
              Email
            </a>

            <a
              href="https://github.com/SAYAN2122"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition"
            >
              <FiGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition"
            >
              <FiLinkedin />
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/YOUR-LEETCODE/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition"
            >
              <SiLeetcode />
              LeetCode
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition"
            >
              <FiDownload />
              Resume
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-500 text-sm">

          © {new Date().getFullYear()} StudyAI • Built with React, Node.js,
          Express, MongoDB & Gemini AI.

        </div>

      </div>
    </footer>
  );
}

export default DashboardFooter;