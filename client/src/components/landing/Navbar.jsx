import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiBookOpen,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "How It Works",
      href: "#how-it-works",
    },
    {
      name: "Testimonials",
      href: "#testimonials",
    },
    {
      name: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">

              <FiBookOpen
                className="text-white"
                size={22}
              />

            </div>

            <div>

              <h1 className="text-2xl font-bold text-white">
                StudyAI
              </h1>

              <p className="text-xs text-slate-400">
                AI Learning Platform
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (

              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white transition"
              >
                {item.name}
              </a>

            ))}

          </nav>

          {/* Desktop Buttons */}

          <div className="hidden lg:flex items-center gap-4">

            <Link
              to="/login"
              className="text-slate-300 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Get Started
            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="lg:hidden"
          >
            {menuOpen ? (
              <FiX size={28} />
            ) : (
              <FiMenu size={28} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="lg:hidden pb-6"
          >

            <div className="flex flex-col gap-5">

              {navLinks.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="text-slate-300"
                >
                  {item.name}
                </a>

              ))}

              <Link
                to="/login"
                className="text-slate-300"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-blue-600 rounded-xl py-3 text-center"
              >
                Get Started
              </Link>

            </div>

          </motion.div>

        )}

      </div>
    </motion.header>
  );
};

export default Navbar;