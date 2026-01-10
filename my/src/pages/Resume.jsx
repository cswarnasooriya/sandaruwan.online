import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { Download, ExternalLink, MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import { FaSchool } from "react-icons/fa";

const Resume = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const cardBg = isDark ? "bg-blue-950/40 border-blue-900/40" : "bg-blue-50/60 border-blue-200";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";

  return (
    <div className={`${containerBg} min-h-screen pt-28 px-6 pb-20 transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${headingColor}`}>
            Find My Professional Resume 2026
          </h1>
          <p className={`mt-8 text-lg ${textPrimary}`}>
            Junior Software Engineer · Web Developer · MERN Fullstack Developer · ML/AI Learner
          </p>
        </div>

        {/* Summary */}
        <div className={`rounded-2xl border ${cardBg} p-6 mb-10 backdrop-blur-sm shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-3 ${headingColor}`}>Summary</h2>
          <p className={`leading-relaxed ${textPrimary} text-justify`}>
             I am Sandaruwan Warnasooriya, Passionate Full Stack Developer with experience in MERN stack development, frontend engineering, Interactive and Fast Learner at AI and ML also, 
            and scalable web application deployment. Skilled in transforming ideas into functional digital products with attention 
            to performance, user experience, and modern design standards. Content creator and lifelong learner exploring 
            AI/ML and system design fundamentals. Hope to skilled up and develop my skill in my Software Engineer carrer path also in 2026.
          </p>
        </div>

        {/* Skills Section */}
        <div className={`rounded-2xl border ${cardBg} p-6 mb-10 backdrop-blur-sm shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-5 ${headingColor}`}>Technical Skills</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>Frontend</h3>
              <ul className={`space-y-1 ${textPrimary}`}>
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Python</li>
                <li>PHP</li>
                <li>HTML / CSS</li>
              </ul>
            </div>

            <div>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>Backend</h3>
              <ul className={`space-y-1 ${textPrimary}`}>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>REST APIs</li>
                <li>MySQL / PostgreSQL</li>
              </ul>
            </div>

            <div>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>Tools & Platforms</h3>
              <ul className={`space-y-1 ${textPrimary}`}>
                <li>Git / GitHub</li>
                <li>Vercel / Render</li>
                <li>VS Code</li>
                <li>Docker (Basics)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className={`rounded-2xl border ${cardBg} p-6 mb-10 backdrop-blur-sm shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-5 ${headingColor}`}>Experience</h2>
          <div className="space-y-4">

            {/* Internship Example */}
            <div className="pb-2">
              <div className="flex items-center gap-2 font-semibold">
                <Briefcase size={18} className={textSecondary} />
                <span className={headingColor}>Software Engineering Intern — MTD Walkers Colombo 03 (Zmedia Digital)</span>
              </div>
              <p className={`text-sm ${textSecondary} mt-1`}>2024 — 2025</p>
              <ul className={`mt-2 list-disc pl-6 space-y-1 ${textPrimary} text-md`}>
                <li>Contributed to internal and client web products and business websites.</li>
                <li>Improved UI/UX for better customer engagement and conversions.</li>
                <li>Worked with MERN stack to build features and fix production issues.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className={`rounded-2xl border ${cardBg} p-6 mb-10 backdrop-blur-sm shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-5 ${headingColor}`}>Highlighted Projects</h2>
          <ul className={`space-y-3 ${textPrimary}`}>
            <li>
              <span className={`${headingColor} font-semibold`}>Travel & Tourism Web System</span> — Full-stack MERN travel platform with authentication, booking & services modules.
            </li>
            <li>
              <span className={`${headingColor} font-semibold`}>AI Content Tool</span> — AI-powered web content generator using OpenAI API.
            </li>
            <li>
              <span className={`${headingColor} font-semibold`}>Business & Portfolio Websites</span> — Designed and deployed business portfolios for clients and freelancers.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className={`rounded-2xl border ${cardBg} p-6 mb-10 backdrop-blur-sm shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-5 ${headingColor}`}>Education</h2>
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <GraduationCap size={18} className={textSecondary} />
                <span className={headingColor}>B.Sc (Hons) in CIS — Sabaragamuwa University of Sri Lanka</span>
              </div>
              <p className={`text-sm ${textSecondary}`}>2021 — 2026</p>
            </div>

            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Award size={18} className={textSecondary} />
                <span className={headingColor}>Diploma in Human Resource Management - IMBS Green Campus</span>
              </div>
              <p className={`text-sm ${textSecondary}`}>2022</p>
            </div>

            <div>
              <div className="flex items-center gap-2 font-semibold">
                <FaSchool size={18} className={textSecondary} />
                <span className={headingColor}>G.C.E.(A/L) 2019 - Narammala Mayurapada Central College</span>
              </div>
              <p className={`text-sm ${textSecondary}`}>2019</p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="/Sandaruwan_SE_CV.pdf"
            download
            className={`px-8 py-3 rounded-lg font-semibold cursor-pointer shadow transition-all duration-300 inline-flex items-center gap-2 ${
              isDark ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            <Download size={18} />
            Download PDF
          </a>

          <a
            href="https://drive.google.com/file/d/1-bR3deNKMltE0ceO5CVLCJ5AMCW-fkgF/view?usp=sharing"
            target="_blank"
            className={`px-8 py-3 rounded-lg border-2 font-semibold cursor-pointer transition-all duration-300 inline-flex items-center gap-2 ${
              isDark
                ? "border-blue-400 text-blue-400 hover:bg-blue-950/50"
                : "border-blue-600 text-blue-600 hover:bg-blue-50"
            }`}
          >
            <ExternalLink size={18} />
            Open Online
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
