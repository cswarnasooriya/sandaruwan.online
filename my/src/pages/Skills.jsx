import React, { useState, useEffect } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90, icon: "⚙️" },
      { name: "PHP", level: 70, icon: "🔧" },
      { name: "Java", level: 80, icon: "☕" },
      { name: "Python", level: 84, icon: "🐍" },
      { name: "C", level: 70, icon: "⚡" }
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 92, icon: "⚛️" },
      { name: "HTML", level: 95, icon: "🌐" },
      { name: "CSS", level: 90, icon: "🎨" },
      { name: "Tailwind", level: 88, icon: "💨" },
      { name: "MERN Stack", level: 86, icon: "📚" },
      { name: "Next Js", level: 82, icon: "📚" }
    ],
  },
  {
    title: "Database & Backend",
    skills: [
      { name: "SQL", level: 85, icon: "🗄️" },
      { name: "MySQL", level: 80, icon: "🐬" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "Node.js", level: 82, icon: "🟢" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90, icon: "📋" },
      { name: "GitHub", level: 92, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
    ],
  },
  {
    title: "Computer Science",
    skills: [
      { name: "Data Structures", level: 85, icon: "🏗️" },
      { name: "Algorithms", level: 82, icon: "🧠" },
      { name: "Computer Architecture", level: 78, icon: "🔧" },
      { name: "System Design", level: 75, icon: "📐" },
    ],
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const cardBg = isDark
    ? "bg-blue-950/50 border-blue-900/40"
    : "bg-blue-50 border-blue-200";
  const accentBg = isDark ? "bg-blue-900/30" : "bg-blue-100/50";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const SkillBar = ({ skill, delay }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => setAnimatedLevel(skill.level), delay);
      return () => clearTimeout(timer);
    }, [skill.level, delay]);

    return (
      <div className="mb-4 cursor-pointer">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">{skill.icon}</span>
            <span className={`font-semibold ${textPrimary}`}>
              {skill.name}
            </span>
          </div>
          <span className={`text-sm font-medium ${textPrimary}`}>
            {skill.level}%
          </span>
        </div>
        <div className={`w-full rounded-full h-2.5 overflow-hidden ${isDark ? "bg-blue-900/30" : "bg-blue-200"}`}>
          <div
            className="h-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-[1200ms] ease-out"
            style={{ width: `${animatedLevel}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={`${containerBg} min-h-screen px-4 sm:px-6 lg:px-8 py-20`}>
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent leading-tight">
            My Skills
          </h1>
          <p className={`text-lg md:text-xl mt-4 ${textPrimary} max-w-3xl mx-auto`}>
            A professional overview of my technical skillsets and development journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { v: "8+", l: "Technologies" },
            { v: "5", l: "Categories" },
            { v: "3+", l: "Years Learning" },
            { v: "∞", l: "Passion" },
          ].map((s, i) => (
            <div
              key={i}
              className={`text-center cursor-pointer ${cardBg} rounded-xl p-6 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${isDark ? "hover:shadow-blue-900/30" : "hover:shadow-blue-200"}`}
            >
              <div className={`text-3xl font-extrabold ${textSecondary}`}>{s.v}</div>
              <div className={`text-sm font-medium mt-1 ${textPrimary}`}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {categories.map((category, idx) => (
            <div
              key={category.title}
              className={`transition-all duration-700 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${0.2 + idx * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`${cardBg} rounded-xl border-2 p-8 transition-all duration-300
                ${hoveredCard === idx
                  ? isDark
                    ? "border-blue-600 shadow-lg shadow-blue-900/30"
                    : "border-blue-400 shadow-lg shadow-blue-200"
                  : ""
                }`}
              >
                <h2 className={`text-2xl font-bold mb-6 ${textSecondary}`}>
                  {category.title}
                </h2>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar key={skill.name} skill={skill} delay={400 + skillIdx * 120} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning */}
        <div
          className={`${accentBg} border-2 ${isDark ? "border-blue-800" : "border-blue-300"}
            rounded-xl p-10 transition-all duration-700`}
        >
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Continuous Learning
          </h2>
          <p className={`text-lg leading-relaxed mb-6 ${textPrimary}`}>
            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks,
            diving into emerging fields, and refining my core engineering fundamentals.
          </p>
          <div className="flex flex-wrap gap-3">
            {["AI & ML", "Cloud Computing", "System Design", "Open Source", "Frontend Engineering"]
              .map((tag, i) => (
                <div key={i}
                  className={`${accentBg} border-2 rounded-full px-6 py-2 text-sm font-semibold cursor-pointer
                    ${isDark ? "border-blue-700 text-blue-300" : "border-blue-400 text-blue-700"}
                    transition-all hover:-translate-y-1`}>
                  {tag}
                </div>
              ))
            }
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 flex gap-4 justify-center flex-wrap">
          <Link to="/work">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              View My Projects
            </button>
          </Link>
          <Link to="/connect">
            <button className={`${isDark ? "border-2 border-blue-400 text-blue-400 hover:bg-blue-900" : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"} px-8 py-3 rounded-lg font-semibold transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
              Let's Collaborate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
