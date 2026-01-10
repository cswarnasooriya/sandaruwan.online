import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaCode,
  FaDatabase,
  FaPython,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const roles = [
  { icon: FaCode, title: "Full Stack Developer", desc: "Building modern web solutions" },
  { icon: FaDatabase, title: "MERN Stack Developer", desc: "MongoDB • Express • React • Node" },
  { icon: FaGraduationCap, title: "Problem Solver", desc: "Data structures & algorithms" },
  { icon: FaPython, title: "AI/ML Learner", desc: "Exploring automation & modeling" },
  { icon: FaDatabase, title: "Data Science Learner", desc: "Analyzing & visualizing datasets" },
  { icon: FaShieldAlt, title: "Frontend Designer", desc: "Interactive & modern UI with React" }
];

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const textPrimary = isDark ? "text-neutral-300" : "text-neutral-700";
  const textHeading = isDark ? "text-white" : "text-neutral-900";
  const accentGradient = isDark
    ? "from-blue-400 via-blue-500 to-indigo-500"
    : "from-blue-600 via-blue-500 to-indigo-600";

  return (
    <div className={`${isDark ? "bg-black" : "bg-white"} min-h-screen transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 text-center md:text-left"
          >
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${textHeading}`}>
              Hi, I'm <br />
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${accentGradient}`}>
                Sandaruwan Warnasooriya
              </span>
            </h1>

            <motion.p
              className={`text-lg sm:text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${accentGradient}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.45 }}
            >
              Full Stack Developer • B.Sc (Hons) CIS
            </motion.p>

            <motion.p
              className={`text-[16px] sm:text-[17px] leading-relaxed ${textPrimary}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              I'm a passionate Full Stack Developer specialized in modern web technologies.
              I enjoy building interactive experiences, solving algorithmic challenges, and exploring
              AI/ML and data-driven applications.
              <br /><br />
              Former Software Engineering Intern at{" "}
              <span className="font-semibold">MTD Walkers (Pvt) Ltd</span> (2024–2025) under ZMedia Digital Solutions.
              <br /><br />
              I'm open to opportunities, collaborations, and impactful engineering work.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <Link to="/work">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ duration: 0.16 }}
                  className={`px-8 py-3 rounded-lg font-semibold bg-gradient-to-r ${accentGradient} text-white`}
                >
                  View Projects
                </motion.button>
              </Link>

              <Link to="/connect">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ duration: 0.16 }}
                  className={`px-8 py-3 rounded-lg font-semibold border-2
                    ${isDark ? "border-blue-400 text-blue-400 hover:bg-blue-950"
                      : "border-blue-600 text-blue-600 hover:bg-blue-50"}`}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-10"
          >
            <div
              className={`relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 
              ${isDark ? "border-blue-900/40" : "border-blue-200"} shadow-xl`}
            >
              <img
                src="./profile.jpg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* ROLES SECTION */}
        {/* ROLES SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {roles.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{
                scale: 1.04,
                translateY: -3
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className={`
        group flex items-center gap-4 p-4 rounded-xl cursor-pointer border transition-all duration-300
        ${isDark
                  ? "bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:border-blue-500/60 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                  : "bg-white border-blue-100 hover:bg-blue-50 hover:border-blue-400 hover:shadow-[0_0_10px_rgba(59,130,246,0.25)]"
                }
      `}
            >
              <Icon
                className={`
          text-2xl transition-all
          bg-clip-text text-transparent
          bg-gradient-to-r ${accentGradient}
          group-hover:text-blue-600
        `}
              />
              <div>
                <h4 className={`font-semibold text-[17px] transition-colors
          ${isDark ? "text-white group-hover:text-blue-400" : "text-neutral-900 group-hover:text-blue-700"}
        `}>
                  {title}
                </h4>
                <p className={`text-[14px] transition-colors
          ${isDark ? "text-neutral-400 group-hover:text-neutral-300" : "text-neutral-600 group-hover:text-neutral-700"}
        `}>
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
