import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import { Link } from "react-router-dom";
import { 
  FaCode, 
  FaLaptopCode, 
  FaDatabase, 
  FaTerminal, 
  FaNetworkWired,
  FaLightbulb
} from "react-icons/fa";

const categories = [
  {
    id: "lang",
    label: "Languages",
    tag: "01",
    icon: FaCode,
    skills: ["JavaScript", "Python", "Java", "PHP", "C", "Go"],
  },
  {
    id: "web",
    label: "Web Development",
    tag: "02",
    icon: FaLaptopCode,
    skills: ["React", "Next.js", "HTML & CSS", "Tailwind CSS", "MERN Stack"],
  },
  {
    id: "db",
    label: "Database & Backend",
    tag: "03",
    icon: FaDatabase,
    skills: ["Node.js", "SQL / MySQL", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    tag: "04",
    icon: FaTerminal,
    skills: ["Git & GitHub", "VS Code", "Postman", "Linux CLI", "Supabase"],
  },
  {
    id: "cs",
    label: "Computer Science",
    tag: "05",
    icon: FaNetworkWired,
    skills: ["Data Structures", "Algorithms", "System Design", "Machine Learning"],
  },
];

const stats = [
  { value: "20+", label: "Technologies" },
  { value: "05", label: "Domains" },
  { value: "03+", label: "Years" },
  { value: "∞", label: "Curiosity" },
];

const learningTags = [
  "AI & Machine Learning",
  "Cloud Architecture",
  "System Design",
  "Clinical Data Science",
  "Frontend Engineering",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? categories
      : categories.filter((c) => c.id === activeFilter);

  /* ── Darker & Professional Design Tokens ──────────────────────────── */
  const bg          = isDark ? "#060A14"              : "#F8FAFC";
  const surface     = isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(255, 255, 255, 0.75)";
  const surfaceAlt  = isDark ? "rgba(30, 41, 59, 0.5)" : "rgba(241, 245, 249, 0.8)";
  const border      = isDark ? "rgba(79, 70, 229, 0.2)" : "rgba(79, 70, 229, 0.15)";
  
  // Darker font colors for a sharper, more grounded look
  const textPrimary = isDark ? "#CBD5E1"               : "#020617"; // Dark mode: Slate 300, Light mode: Slate 950
  const textMuted   = isDark ? "#828C9A"               : "#334155"; // Dark mode: Custom deeper gray, Light mode: Slate 700
  
  // Slightly deeper gradients to match the darker text
  const accent1     = "#4F46E5"; // Deep Indigo
  const accent2     = "#0891B2"; // Deep Cyan
  const gradientPrimary = `linear-gradient(135deg, ${accent1} 0%, ${accent2} 100%)`;
  
  // Subtle glowing layers
  const glowIndigo = isDark ? "rgba(79, 70, 229, 0.15)" : "rgba(79, 70, 229, 0.08)";
  const glowCyan   = isDark ? "rgba(8, 145, 178, 0.15)" : "rgba(8, 145, 178, 0.08)";

  return (
    <div style={{
        minHeight: "100vh", background: bg, padding: "100px 1.5rem",
        transition: "background 0.4s ease", position: "relative", overflow: "hidden"
    }}>
      
      {/* ── Abstract Background Orbs ─────────────────────────────────────── */}
      <div style={{
        position: "absolute", top: "-5%", left: "-10%", width: "40vw", height: "40vw",
        background: glowIndigo, filter: "blur(140px)", borderRadius: "50%", zIndex: 0, pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "-10%", width: "45vw", height: "45vw",
        background: glowCyan, filter: "blur(140px)", borderRadius: "50%", zIndex: 0, pointerEvents: "none"
      }} />

      {/* Google Fonts & Custom CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap');

        .sk-glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .sk-glass-card:hover {
          transform: translateY(-8px);
          border-color: rgba(8, 145, 178, 0.4) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15), 0 0 20px ${glowCyan};
        }
        .sk-skill-chip {
          transition: all 0.3s ease;
        }
        .sk-skill-chip:hover {
          background: ${gradientPrimary} !important;
          color: #fff !important;
          border-color: transparent !important;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 15px rgba(8, 145, 178, 0.25);
        }
        .sk-btn-primary {
          background: ${gradientPrimary};
          background-size: 200% auto;
          box-shadow: 0 8px 25px rgba(79, 70, 229, 0.25);
          transition: all 0.4s ease;
        }
        .sk-btn-primary:hover {
          background-position: right center;
          box-shadow: 0 12px 30px rgba(8, 145, 178, 0.35);
          transform: translateY(-2px);
        }
        .sk-btn-outline {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .sk-btn-outline:hover {
          border-color: ${accent2} !important;
          color: ${accent2} !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 20px ${glowCyan};
        }
        .sk-filter-btn {
          transition: all 0.3s ease;
        }
        .sk-filter-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.15);
        }
        .gradient-text {
          background: ${gradientPrimary};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Hero header ──────────────────────────────────── */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: surface, border: `1px solid ${border}`,
            borderRadius: 999, padding: "8px 20px", marginBottom: 28,
            backdropFilter: "blur(10px)", boxShadow: `0 4px 20px ${glowIndigo}`
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: accent2, boxShadow: `0 0 12px ${accent2}` }} />
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: textPrimary, letterSpacing: "0.05em", fontWeight: 500 }}>
              SYSTEM.SKILLS === "INITIALIZED"
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: "clamp(46px, 6.5vw, 78px)",
            fontWeight: 800, lineHeight: 1.1, color: textPrimary, margin: "0 0 20px", letterSpacing: "-0.02em"
          }}>
            My Tech{" "}
            <span className="gradient-text">
              Stack
            </span>
          </h1>

          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 17, color: textMuted,
            maxWidth: 600, margin: "0 auto", lineHeight: 1.7, fontWeight: 400
          }}>
            A comprehensive overview of the languages, frameworks, and tools I use 
            to engineer scalable backends, interactive frontends, and data-driven models.
          </p>
        </motion.div>

        {/* ── Stats row ────────────────────────────────────── */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18, marginBottom: 70
        }}>
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="sk-glass-card" style={{
                background: surface, border: `1px solid ${border}`, borderRadius: 24, padding: "32px 16px", textAlign: "center"
            }}>
              <div className="gradient-text" style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 48, fontWeight: 800, lineHeight: 1
              }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 13, color: textMuted, marginTop: 14, letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 500 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Filter pills ─────────────────────────────────── */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginBottom: 50
        }}>
          {[{ id: "all", label: "All Technologies" }, ...categories.map(c => ({ id: c.id, label: c.label }))].map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button key={f.id} onClick={() => setActiveFilter(f.id)} className="sk-filter-btn" style={{
                  fontFamily: "'Fira Code', monospace", fontSize: 14, fontWeight: 500,
                  padding: "10px 24px", borderRadius: 999, cursor: "pointer",
                  border: `1px solid ${isActive ? "transparent" : border}`,
                  background: isActive ? gradientPrimary : surface,
                  color: isActive ? "#fff" : textPrimary,
                  backdropFilter: "blur(10px)", outline: "none",
                  boxShadow: isActive ? `0 8px 20px ${glowIndigo}` : "none"
              }}>
                {isActive ? `> ${f.label}` : f.label}
              </button>
            );
          })}
        </motion.div>

        {/* ── Skill cards (Bento Grid) ─────────────────────── */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24, marginBottom: 70
        }}>
          {filtered.map((cat) => (
            <motion.div key={cat.id} variants={fadeUp} className="sk-glass-card" style={{
                background: surface, border: `1px solid ${border}`, borderRadius: 24, padding: "34px"
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 30 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, background: glowIndigo,
                    border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <cat.icon style={{ fontSize: 20, color: accent2 }} />
                  </div>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 700, color: textPrimary, margin: 0 }}>
                    {cat.label}
                  </h2>
                </div>
                <span style={{
                  fontFamily: "'Fira Code', monospace", fontSize: 12, color: accent1, background: glowIndigo,
                  border: `1px solid ${border}`, borderRadius: 8, padding: "6px 12px", fontWeight: 600
                }}>
                  {cat.tag}
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {cat.skills.map((skill) => (
                  <span key={skill} className="sk-skill-chip" style={{
                      fontFamily: "'Fira Code', monospace", fontSize: 13, color: textPrimary, fontWeight: 500,
                      background: surfaceAlt, border: `1px solid ${border}`, borderRadius: 10, padding: "8px 18px", cursor: "default"
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Continuous learning banner ───────────────────── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sk-glass-card" style={{
            background: isDark ? `linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(79, 70, 229,0.1) 100%)` : `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(79, 70, 229,0.05) 100%)`, 
            border: `1px solid ${border}`, borderRadius: 30, padding: "48px", marginBottom: 70, position: "relative", overflow: "hidden"
        }}>
          <FaLightbulb style={{ position: "absolute", right: "-30px", top: "-30px", fontSize: 240, color: glowCyan, opacity: 0.4 }} />

          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 13, color: accent2, marginBottom: 18, fontWeight: 600 }}>
            <span style={{ color: accent1 }}>while</span> (alive) {"{"} evolve() {"}"}
          </div>

          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 36, fontWeight: 800, color: textPrimary, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
            Continuous Engineering Evolution
          </h2>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 17, color: textMuted, lineHeight: 1.8, margin: "0 0 32px", maxWidth: 700, fontWeight: 400 }}>
            Technology shifts rapidly. I'm constantly pushing boundaries by exploring new architectural patterns, 
            AI integrations, and optimizing system performance to build robust, future-proof solutions.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            {learningTags.map((tag) => (
              <span key={tag} style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600, color: textPrimary,
                  background: glowCyan, border: `1px solid ${border}`, borderRadius: 999, padding: "10px 22px"
              }}>
                <span style={{ color: accent2, marginRight: 6 }}>#</span>{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── CTAs ──────────────────────────────────────────── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{
            display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap"
        }}>
          <Link to="/work">
            <button className="sk-btn-primary" style={{
                color: "#fff", border: "none", padding: "16px 40px", borderRadius: 14,
                fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, cursor: "pointer"
            }}>
              See Systems in Action
            </button>
          </Link>
          <Link to="/connect">
            <button className="sk-btn-outline" style={{
                background: surface, color: textPrimary, border: `1px solid ${border}`,
                padding: "16px 40px", borderRadius: 14, fontFamily: "'Outfit', sans-serif",
                fontSize: 16, fontWeight: 600, cursor: "pointer", backdropFilter: "blur(10px)"
            }}>
              Discuss Architecture
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}