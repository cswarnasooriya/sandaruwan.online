import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { ExternalLink,  } from "lucide-react";

const projects = [
  {
    title: "AI Learning Assistant Web App",
    description: "Cloud-based note workspace with JWT auth, CRUD, tagging, and responsive UI.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind", "Vercel"],
    image: "",
    live: "",
    github: "",
    type: "Full Stack",
    year: "2026 - Ongoing"
  },
  {
    title: "Book Store",
    description: "Custom alias shortener with analytic tracking and secure backend APIs.",
    tech: ["React","Node.js", "Express", "MongoDB", "JWT"],
    image: "",
    github: "",
    type: "Backend",
    year: "2025 Oct"
  },
  {
    title: "Zmedia Digital Solution - Official Website",
    description: "Modern business website or Zmedia Digital Solution Company and optimized for SEO, speed and deployment.",
    tech: ["React", "Tailwind", "Vercel"],
    live: "https://zmediadigital.com",
    image: "",
    type: "Frontend",
    year: "2025 Jan"
  },
];

export default function Work() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const cardBg = isDark ? "bg-blue-950/40 border-blue-900/40" : "bg-blue-50/70 border-blue-200";

  return (
    <div className={`${containerBg} min-h-screen pt-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto pb-20">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${headingColor}`}>
            My <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Work</span>
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${textPrimary}`}>
            A collection of projects that demonstrate my experience building full-stack applications & digital solutions.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`border ${cardBg} rounded-2xl overflow-hidden backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
            >
              {/* IMAGE */}
              {p.image && (
                <div className="relative group h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className="p-5">
                <h2 className={`text-xl font-bold mb-2 ${headingColor}`}>
                  {p.title}
                </h2>

                <p className={`text-sm mb-4 leading-relaxed ${textPrimary}`}>
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 text-xs font-medium rounded-lg ${
                        isDark
                          ? "bg-blue-900/50 text-blue-300 border border-blue-800/40"
                          : "bg-blue-100 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between text-sm font-medium mt-2">
                  <span className={`${textSecondary}`}>{p.type}</span>
                  <span className={`${textPrimary}`}>{p.year}</span>
                </div>

                {/* LINKS */}
                {(p.live || p.github) && (
                  <div className="flex gap-3 mt-5">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        className={`flex items-center gap-1 text-sm underline-offset-2 hover:underline ${textSecondary}`}
                      >
                        Live <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        className={`flex items-center gap-1 text-sm underline-offset-2 hover:underline ${textSecondary}`}
                      >
                        Code <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="https://github.com/cswarnasooriya"
            target="_blank"
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isDark
                ? "border-2 border-blue-400 text-blue-400 hover:bg-blue-950 hover:shadow-blue-900/30"
                : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:shadow-blue-200"
            }`}
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
