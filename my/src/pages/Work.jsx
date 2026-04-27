import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import { ExternalLink, Github, Terminal, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "MEDIX PRO Clinical System",
    description: "Unified clinical management system leveraging AI for medical record parsing and automated billing calculations.",
    tech: ["Golang", "PostgreSQL", "Supabase", "React"],
    image: "",
    live: "",
    github: "",
    type: "Full Stack",
    year: "2026"
  },
  {
    title: "GlycoPredict Analytics",
    description: "Research-driven web application utilizing a custom Scikit-learn pipeline for Multiclass Diabetes Risk Stratification via 11 clinical biomarkers.",
    tech: ["MERN Stack", "FastAPI", "Python", "Scikit-Learn"],
    image: "",
    live: "",
    github: "",
    type: "Machine Learning",
    year: "2026"
  },
  {
    title: "Shop Sense",
    description: "High-performance e-commerce app featuring Role-Based Access Control (RBAC), real-time database updates, and a seamless WhatsApp checkout flow.",
    tech: ["React", "Tailwind CSS", "Firebase", "Firestore"],
    image: "",
    live: "",
    github: "",
    type: "Full Stack",
    year: "2026"
  },
  {
    title: "My Pick - Product Store",
    description: "Modern full-stack product store featuring efficient data fetching, robust ORM integration, and a seamless end-to-end integration.",
    tech: ["TypeScript", "React", "PostgreSQL", "Drizzle ORM", "Node.js", "TanStack Query"],
    image: "",
    live: "",
    github: "",
    type: "Full Stack",
    year: "2026"
  },
  {
    title: "AI Learning Assistant",
    description: "Cloud-based note workspace with JWT authentication, CRUD operations, intelligent tagging, and a highly responsive UI.",
    tech: ["React", "Node.js", "MongoDB", "JWT Auth"],
    image: "",
    live: "",
    github: "",
    type: "Full Stack",
    year: "2026"
  },
  {
    title: "B & My Online",
    description: "Production-ready freelance online store leveraging Firebase infrastructure and integrating AI APIs for an intelligent, high-performance web experience.",
    tech: ["React", "Tailwind CSS", "Firebase Auth", "AI APIs"],
    image: "",
    live: "",
    github: "",
    type: "Freelance",
    year: "2025"
  },
  {
    title: "MIE Tutor",
    description: "Self-initiated full-stack course management platform featuring multi-role user registration (Students, Tutors, Admin) and optimized data handling.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "",
    live: "",
    github: "",
    type: "Full Stack",
    year: "2025"
  },
  {
    title: "The Global Youth League",
    description: "Designed and developed the official sports website for professional tournaments, handling both modern UI and backend server logic.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
    image: "",
    live: "",
    github: "",
    type: "Full Stack",
    year: "2025"
  },
  {
    title: "Zmedia Digital Solution",
    description: "Official company website built from the ground up during internship, optimized for responsiveness, SEO, and continuous deployment.",
    tech: ["React.js", "Tailwind CSS", "Vercel"],
    live: "https://zmediadigital.com",
    image: "",
    github: "",
    type: "Frontend",
    year: "2024"
  },
  {
    title: "Book Stock",
    description: "MERN-based web application engineered to showcase and manage book sales, integrating modern UI frameworks with robust backend handling.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "",
    live: "",
    github: "",
    type: "Full Stack",
    year: "2025"
  },
  {
    title: "E-COOP Marketplace",
    description: "Real-world community e-commerce web application for CO-OP City with an Admin Dashboard. Developed as a Group Leader.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "",
    live: "",
    github: "",
    type: "Full Stack",
    year: "2025"
  },
  {
    title: "Secure URL Shortener",
    description: "High-performance custom alias shortener engine featuring deep analytic tracking, rate limiting, and Redis caching.",
    tech: ["Node.js", "Redis", "MongoDB", "Express"],
    image: "",
    live: "",
    github: "",
    type: "Backend",
    year: "2024"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Work() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  /* ── Darker & Professional Design Tokens (Matches Cyber-Aurora Theme) ── */
  const bg = isDark ? "#060A14" : "#F8FAFC";
  const surface = isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(255, 255, 255, 0.75)";
  const surfaceAlt = isDark ? "rgba(30, 41, 59, 0.5)" : "rgba(241, 245, 249, 0.8)";
  const border = isDark ? "rgba(79, 70, 229, 0.2)" : "rgba(79, 70, 229, 0.15)";

  const textPrimary = isDark ? "#CBD5E1" : "#020617";
  const textMuted = isDark ? "#828C9A" : "#334155";

  const accent1 = "#4F46E5"; // Deep Indigo
  const accent2 = "#0891B2"; // Deep Cyan
  const gradientPrimary = `linear-gradient(135deg, ${accent1} 0%, ${accent2} 100%)`;

  const glowIndigo = isDark ? "rgba(79, 70, 229, 0.15)" : "rgba(79, 70, 229, 0.08)";
  const glowCyan = isDark ? "rgba(8, 145, 178, 0.15)" : "rgba(8, 145, 178, 0.08)";

  return (
    <div style={{ minHeight: "100vh", background: bg, transition: "background 0.4s ease", position: "relative", overflow: "hidden", paddingBottom: "100px" }}>

      {/* ── Abstract Background Orbs ── */}
      <div style={{
        position: "absolute", top: "10%", right: "-10%", width: "40vw", height: "40vw",
        background: glowIndigo, filter: "blur(140px)", borderRadius: "50%", zIndex: 0, pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "-5%", width: "45vw", height: "45vw",
        background: glowCyan, filter: "blur(140px)", borderRadius: "50%", zIndex: 0, pointerEvents: "none"
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap');

        .wk-glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .wk-glass-card:hover {
          transform: translateY(-8px);
          border-color: rgba(8, 145, 178, 0.4) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15), 0 0 20px ${glowCyan};
        }
        .wk-tech-chip {
          transition: all 0.3s ease;
        }
        .wk-glass-card:hover .wk-tech-chip {
          border-color: rgba(8, 145, 178, 0.3) !important;
        }
        .wk-img-container {
          overflow: hidden;
        }
        .wk-img-container img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wk-glass-card:hover .wk-img-container img {
          transform: scale(1.08);
        }
        .gradient-text {
          background: ${gradientPrimary};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .wk-link-btn {
          transition: all 0.3s ease;
        }
        .wk-link-btn:hover {
          color: ${accent2} !important;
          transform: translateY(-2px);
        }
        .wk-btn-outline {
          transition: all 0.3s ease;
        }
        .wk-btn-outline:hover {
          border-color: ${accent2} !important;
          color: ${accent2} !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 20px ${glowCyan};
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 1.5rem 0", position: "relative", zIndex: 1 }}>

        {/* ══ HEADER SECTION ═════════════════════════════════════ */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ textAlign: "center", marginBottom: 80 }}>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: surface, border: `1px solid ${border}`,
            borderRadius: 999, padding: "8px 20px", marginBottom: 28,
            backdropFilter: "blur(10px)", boxShadow: `0 4px 20px ${glowIndigo}`
          }}>
            <Terminal size={14} color={accent2} />
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: textPrimary, letterSpacing: "0.05em", fontWeight: 600 }}>
              SYSTEM.PORTFOLIO === "LOADED"
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: "clamp(46px, 6vw, 78px)",
            fontWeight: 800, lineHeight: 1.1, color: textPrimary, margin: "0 0 20px", letterSpacing: "-0.02em"
          }}>
            Featured <span className="gradient-text">Work</span>
          </h1>

          <div style={{ width: 60, height: 4, background: gradientPrimary, margin: "0 auto 24px", borderRadius: 4 }} />

          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 18, color: textMuted,
            maxWidth: 650, margin: "0 auto", lineHeight: 1.7, fontWeight: 400
          }}>
            A curated collection of full-stack applications, robust backend architectures, and modern web solutions I've engineered.
          </p>
        </motion.div>

        {/* ══ PROJECTS GRID ══════════════════════════════════════ */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 30, marginBottom: 80
        }}>
          {projects.map((p, i) => (
            <motion.div key={i} variants={fadeUp} className="wk-glass-card" style={{
              background: surface, border: `1px solid ${border}`,
              borderRadius: 24, overflow: "hidden", display: "flex", flexDirection: "column"
            }}>

              {/* IMAGE / FALLBACK */}
              <div className="wk-img-container" style={{
                height: "220px", width: "100%", background: surfaceAlt, borderBottom: `1px solid ${border}`,
                position: "relative", display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                {p.image ? (
                  <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  // Gradient Fallback for empty images
                  <div style={{
                    position: "absolute", inset: 0, background: `linear-gradient(135deg, ${glowIndigo} 0%, ${glowCyan} 100%)`,
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <FolderGit2 size={48} color={accent2} style={{ opacity: 0.6 }} />
                  </div>
                )}

                {/* Type Badge Overlay */}
                <div style={{
                  position: "absolute", top: 16, right: 16, background: "rgba(15, 23, 42, 0.75)",
                  backdropFilter: "blur(8px)", border: `1px solid ${border}`, borderRadius: 999, padding: "6px 14px",
                  fontFamily: "'Fira Code', monospace", fontSize: 11, color: "#fff", fontWeight: 600
                }}>
                  {p.type}
                </div>
              </div>

              {/* CONTENT */}
              <div style={{ padding: "30px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 13, color: accent1, fontWeight: 600 }}>
                    {p.year}
                  </span>
                </div>

                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 24, fontWeight: 700, color: textPrimary, margin: "0 0 14px", lineHeight: 1.3 }}>
                  {p.title}
                </h2>

                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: textMuted, lineHeight: 1.6, margin: "0 0 24px", fontWeight: 300, flexGrow: 1 }}>
                  {p.description}
                </p>

                {/* TECH STACK */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 26 }}>
                  {p.tech.map((tech, idx) => (
                    <span key={idx} className="wk-tech-chip" style={{
                      fontFamily: "'Fira Code', monospace", fontSize: 12, color: textPrimary,
                      background: surfaceAlt, border: `1px solid ${border}`, borderRadius: 8, padding: "6px 12px", fontWeight: 500
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div style={{ display: "flex", gap: 20, borderTop: `1px solid ${border}`, paddingTop: 20, marginTop: "auto" }}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="wk-link-btn" style={{
                      display: "flex", alignItems: "center", gap: 8, textDecoration: "none",
                      fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600, color: textPrimary
                    }}>
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="wk-link-btn" style={{
                      display: "flex", alignItems: "center", gap: 8, textDecoration: "none",
                      fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600, color: textPrimary
                    }}>
                      <Github size={18} /> Source Code
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* ══ CTA ═══════════════════════════════════════════════ */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: "center", marginTop: 40 }}>
          <a href="https://github.com/cswarnasooriya" target="_blank" rel="noopener noreferrer" className="wk-btn-outline" style={{
            display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none",
            background: surface, color: textPrimary, border: `1px solid ${border}`,
            padding: "16px 36px", borderRadius: 14, fontFamily: "'Outfit', sans-serif",
            fontSize: 16, fontWeight: 600, cursor: "pointer", backdropFilter: "blur(10px)"
          }}>
            <Github size={20} style={{ color: accent2 }} /> View Architecture on GitHub
          </a>
        </motion.div>

      </div>
    </div>
  );
}