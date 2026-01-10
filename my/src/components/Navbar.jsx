import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/Theme/ThemeContext";
import { Menu, X } from "lucide-react";
import { BsSun, BsMoon } from "react-icons/bs";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Connect", path: "/connect" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const isDark = theme === "dark";

  const navbarBg = isDark
    ? "bg-neutral-950/70 border-b border-neutral-800"
    : "bg-white/70 border-b border-neutral-200";

  const accentGradient = isDark
    ? "from-blue-400 via-blue-500 to-indigo-500"
    : "from-blue-600 via-blue-500 to-indigo-600";

  return (
    <motion.nav
      initial={{ y: -35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl ${navbarBg} transition-all`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">

        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accentGradient} shadow-sm flex items-center justify-center text-white text-[17px] font-semibold`}
          >
            S
          </motion.div>

          <span
            className={`hidden sm:block text-[17px] font-semibold bg-clip-text text-transparent bg-gradient-to-r ${accentGradient}`}
          >
            Sandaruwan Warnasooriya
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative px-3 py-2 rounded-md text-[16px] font-medium transition-all
                ${isActive
                  ? isDark ? "text-blue-400" : "text-blue-600"
                  : isDark ? "text-neutral-400 hover:text-white"
                    : "text-neutral-700 hover:text-neutral-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {name}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className={`absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r ${accentGradient} rounded-full`}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* Resume CTA */}
          <motion.a
            href="/resume"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className={`ml-2 px-4 py-2 rounded-md text-[16px] font-medium bg-gradient-to-br ${accentGradient} text-white shadow-sm hover:shadow-blue-500/30`}
          >
            Resume
          </motion.a>
        </div>

        {/* Theme + Mobile */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.85, rotate: 20 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`p-2 rounded-lg border
              ${isDark ? "border-neutral-700 text-blue-300 hover:border-blue-400"
                : "border-neutral-300 text-blue-600 hover:border-blue-600"}`}
          >
            {isDark ? <BsSun size={17} /> : <BsMoon size={17} />}
          </motion.button>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.14 }}
            className={`p-2 rounded-lg md:hidden border
              ${isDark ? "border-neutral-700 text-neutral-300 hover:border-blue-400"
                : "border-neutral-300 text-neutral-700 hover:border-blue-600"}`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className={`${isDark ? "bg-neutral-950" : "bg-white"} md:hidden border-t ${isDark ? "border-neutral-800" : "border-neutral-200"}`}
          >
            <ul className="flex flex-col w-full px-5 py-4 gap-2">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-[16px] font-medium transition-all
                    ${isActive
                      ? `text-white bg-gradient-to-br ${accentGradient}`
                      : isDark
                        ? "text-neutral-300 hover:bg-neutral-800 hover:text-white"
                        : "text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900"
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
