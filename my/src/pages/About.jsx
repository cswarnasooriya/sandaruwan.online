import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaGraduationCap,
  FaYoutube,
  FaArrowRight,
  FaLinkedinIn,
  FaBriefcase,
  FaGlobe,
  FaTerminal
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  /* ── Darker & Professional Design Tokens (Matches Home & Skills) ── */
  const bg          = isDark ? "#060A14"              : "#F8FAFC";
  const surface     = isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(255, 255, 255, 0.75)";
  const surfaceAlt  = isDark ? "rgba(30, 41, 59, 0.5)" : "rgba(241, 245, 249, 0.8)";
  const border      = isDark ? "rgba(79, 70, 229, 0.2)" : "rgba(79, 70, 229, 0.15)";
  
  const textPrimary = isDark ? "#CBD5E1"               : "#020617";
  const textMuted   = isDark ? "#828C9A"               : "#334155";
  
  const accent1     = "#4F46E5"; // Deep Indigo
  const accent2     = "#0891B2"; // Deep Cyan
  const gradientPrimary = `linear-gradient(135deg, ${accent1} 0%, ${accent2} 100%)`;
  
  const glowIndigo = isDark ? "rgba(79, 70, 229, 0.15)" : "rgba(79, 70, 229, 0.08)";
  const glowCyan   = isDark ? "rgba(8, 145, 178, 0.15)" : "rgba(8, 145, 178, 0.08)";

  const journey = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Foundation",
      date: "Present",
      description: "Final year B.Sc (Hons) in CIS undergraduate at Sabaragamuwa University of Sri Lanka. Building strong fundamentals in Software Engineering and Machine Learning principles.",
    },
    {
      icon: <FaCode />,
      title: "Development Mastery",
      date: "Continuous",
      description: "Progressed from core web technologies (HTML/CSS/JS) to advanced React frontend architecture, expanding into full-stack MERN & Go development.",
    },
    {
      icon: <FaBriefcase />,
      title: "Real-World Engineering",
      date: "2024 - Present",
      description: "Developed and deployed 6+ production-ready applications spanning clinical systems, e-commerce, AI tools, and commercial business platforms.",
    },
    {
      icon: <FaGlobe />,
      title: "Digital Ecosystems",
      date: "Warna Digital Solutions",
      description: "Founder of Warna Digital Solutions, engaging in content creation, technical community building, and delivering bespoke web solutions for clients.",
    },
  ];

  const highlights = [
    { value: "08+", title: "Production Projects", desc: "Deployed, live applications serving real-world use cases." },
    { value: "Rev", title: "Commercial Solutions", desc: "Generated value through client projects and business platforms." },
    { value: "Tech", title: "Content Creation", desc: "Growing developer community via YouTube & digital platforms." },
    { value: "Full", title: "Stack Expertise", desc: "End-to-end MERN stack mastery with robust deployment experience." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: bg, transition: "background 0.4s ease", position: "relative", overflow: "hidden", paddingBottom: "100px" }}>
      
      {/* ── Abstract Background Orbs ── */}
      <div style={{
        position: "absolute", top: "10%", left: "-10%", width: "40vw", height: "40vw",
        background: glowIndigo, filter: "blur(140px)", borderRadius: "50%", zIndex: 0, pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "-5%", width: "45vw", height: "45vw",
        background: glowCyan, filter: "blur(140px)", borderRadius: "50%", zIndex: 0, pointerEvents: "none"
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap');

        .ab-glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .ab-glass-card:hover {
          transform: translateY(-8px);
          border-color: rgba(8, 145, 178, 0.4) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15), 0 0 20px ${glowCyan};
        }
        .ab-timeline-item {
          transition: all 0.3s ease;
        }
        .ab-timeline-item:hover .timeline-icon {
          background: ${gradientPrimary} !important;
          color: white !important;
          transform: scale(1.1);
          border-color: transparent !important;
          box-shadow: 0 0 15px rgba(8, 145, 178, 0.5);
        }
        .ab-btn-primary {
          background: ${gradientPrimary};
          background-size: 200% auto;
          box-shadow: 0 8px 25px rgba(79, 70, 229, 0.25);
          transition: all 0.4s ease;
        }
        .ab-btn-primary:hover {
          background-position: right center;
          box-shadow: 0 12px 30px rgba(8, 145, 178, 0.35);
          transform: translateY(-2px);
        }
        .ab-btn-outline {
          transition: all 0.3s ease;
        }
        .ab-btn-outline:hover {
          border-color: ${accent2} !important;
          color: ${accent2} !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 20px ${glowCyan};
        }
        .gradient-text {
          background: ${gradientPrimary};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 1.5rem 0", position: "relative", zIndex: 1 }}>

        {/* ══ HEADER SECTION ═════════════════════════════════════ */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ textAlign: "center", marginBottom: 70 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: surface, border: `1px solid ${border}`,
            borderRadius: 999, padding: "8px 20px", marginBottom: 28,
            backdropFilter: "blur(10px)", boxShadow: `0 4px 20px ${glowIndigo}`
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: accent2, boxShadow: `0 0 12px ${accent2}` }} />
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: textPrimary, letterSpacing: "0.05em", fontWeight: 500 }}>
              USER.PROFILE === "ACTIVE"
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: "clamp(46px, 6.5vw, 78px)",
            fontWeight: 800, lineHeight: 1.1, color: textPrimary, margin: "0 0 20px", letterSpacing: "-0.02em"
          }}>
            About{" "}
            <span className="gradient-text">
              Me
            </span>
          </h1>

          <div style={{ width: 60, height: 4, background: gradientPrimary, margin: "0 auto 24px", borderRadius: 4 }} />

          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 18, color: textMuted,
            maxWidth: 650, margin: "0 auto", lineHeight: 1.7, fontWeight: 400
          }}>
            A passionate engineer and continuous learner, dedicated to translating complex problems into scalable, user-centric digital solutions.
          </p>
        </motion.div>

        {/* ══ INTRO CARD ═════════════════════════════════════════ */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="ab-glass-card" style={{
            background: surface, border: `1px solid ${border}`, borderRadius: 24, padding: "clamp(30px, 5vw, 50px)", marginBottom: 80
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <FaTerminal style={{ fontSize: 28, color: accent2 }} />
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, color: textPrimary, margin: 0 }}>
              Welcome to My Journey
            </h2>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 17, color: textMuted, lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
              I'm <span style={{ color: textPrimary, fontWeight: 600 }}>Sandaruwan Warnasooriya</span>, a final-year undergraduate student pursuing a B.Sc (Hons) in Computing Information Systems. My technical journey began with a deep curiosity for fundamental Data Structures and Algorithms, which naturally evolved into a passion for full-stack web architecture and machine learning.
            </p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 17, color: textMuted, lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
              Moving from theoretical university concepts to practical, real-world engineering, I've developed a robust skill set spanning the modern web ecosystem. Today, I combine academic rigor with hands-on development experience to build systems that are not just functional, but scalable and impactful.
            </p>
          </div>
        </motion.div>

        {/* ══ TIMELINE / JOURNEY ════════════════════════════════ */}
        <div style={{ marginBottom: 90 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: "center", marginBottom: 50 }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(32px, 4vw, 42px)", fontWeight: 800, color: textPrimary, margin: 0 }}>
              Development <span className="gradient-text">Path</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24
          }}>
            {journey.map((item, index) => (
              <motion.div key={index} variants={fadeUp} className="ab-timeline-item" style={{
                background: surfaceAlt, border: `1px solid ${border}`, borderRadius: 20, padding: "32px", position: "relative", overflow: "hidden"
              }}>
                {/* Subtle top border gradient */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: gradientPrimary, opacity: 0.5 }} />
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div className="timeline-icon" style={{
                    width: 48, height: 48, borderRadius: 14, background: glowIndigo, border: `1px solid ${border}`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: accent2, transition: "all 0.3s ease"
                  }}>
                    {item.icon}
                  </div>
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: accent1, background: glowIndigo, padding: "4px 10px", borderRadius: 8, fontWeight: 600 }}>
                    {item.date}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 700, color: textPrimary, marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: textMuted, lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ══ HIGHLIGHTS ════════════════════════════════════════ */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="ab-glass-card" style={{
            background: surface, border: `1px solid ${border}`, borderRadius: 24, padding: "clamp(30px, 5vw, 50px)", marginBottom: 80
        }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800, color: textPrimary, margin: 0 }}>
              Career <span className="gradient-text">Highlights</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 30 }}>
            {highlights.map((h, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 32, fontWeight: 700, color: accent2, opacity: 0.8 }}>
                  {h.value}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 600, color: textPrimary, marginBottom: 8 }}>
                    {h.title}
                  </h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: textMuted, lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ══ CTA SECTION ═══════════════════════════════════════ */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 14, color: accent1, marginBottom: 24, fontWeight: 500 }}>
            <FaTerminal style={{ display: "inline", marginRight: 8, color: accent2 }}/>
            AWAITING_NEW_CHALLENGES
          </p>
          
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 32, fontWeight: 700, color: textPrimary, marginBottom: 30 }}>
            Let's Build Something Great Together
          </h2>

          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/work">
              <button className="ab-btn-primary" style={{
                  display: "flex", alignItems: "center", gap: 10,
                  color: "#fff", border: "none", padding: "16px 36px", borderRadius: 14,
                  fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, cursor: "pointer"
              }}>
                View My Projects <FaArrowRight />
              </button>
            </Link>
            <a href="https://www.linkedin.com/in/cswarnasooriya/" target="_blank" rel="noopener noreferrer">
              <button className="ab-btn-outline" style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: surface, color: textPrimary, border: `1px solid ${border}`,
                  padding: "16px 36px", borderRadius: 14, fontFamily: "'Outfit', sans-serif",
                  fontSize: 16, fontWeight: 600, cursor: "pointer", backdropFilter: "blur(10px)"
              }}>
                Connect on LinkedIn <FaLinkedinIn style={{ color: accent2 }} />
              </button>
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}