import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaCode,
  FaDatabase,
  FaPython,
  FaGraduationCap,
  FaShieldAlt,
  FaTerminal,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const roles = [
  { icon: FaCode,         title: "Full Stack Developer",   desc: "Building modern scalable web solutions" },
  { icon: FaDatabase,     title: "Backend Architecture",   desc: "Go · PostgreSQL · MERN Stack" },
  { icon: FaPython,       title: "ML & Data Science",      desc: "Clinical data pipelines & modelling" },
  { icon: FaGraduationCap,title: "Problem Solver",         desc: "Complex data structures & algorithms" },
  { icon: FaShieldAlt,    title: "UI/UX Engineering",      desc: "Interactive, next-gen React interfaces" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
});

const cardVariants = {
  hidden:  { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  /* ── Darker & Professional Design Tokens (Matches Skills.jsx) ── */
  const bg          = isDark ? "#060A14"              : "#F8FAFC";
  const surface     = isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(255, 255, 255, 0.75)";
  const border      = isDark ? "rgba(79, 70, 229, 0.2)" : "rgba(79, 70, 229, 0.15)";
  
  const textPrimary = isDark ? "#CBD5E1"               : "#020617";
  const textMuted   = isDark ? "#828C9A"               : "#334155";
  
  const accent1     = "#4F46E5"; // Deep Indigo
  const accent2     = "#0891B2"; // Deep Cyan
  const gradientPrimary = `linear-gradient(135deg, ${accent1} 0%, ${accent2} 100%)`;
  
  const glowIndigo = isDark ? "rgba(79, 70, 229, 0.15)" : "rgba(79, 70, 229, 0.08)";
  const glowCyan   = isDark ? "rgba(8, 145, 178, 0.15)" : "rgba(8, 145, 178, 0.08)";

  return (
    <div style={{ minHeight: "100vh", background: bg, transition: "background 0.4s ease", position: "relative", overflow: "hidden" }}>
      
      {/* ── Abstract Background Orbs ── */}
      <div style={{
        position: "absolute", top: "-5%", left: "-10%", width: "40vw", height: "40vw",
        background: glowIndigo, filter: "blur(140px)", borderRadius: "50%", zIndex: 0, pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "-5%", width: "45vw", height: "45vw",
        background: glowCyan, filter: "blur(140px)", borderRadius: "50%", zIndex: 0, pointerEvents: "none"
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap');

        .hm-role-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .hm-role-card:hover {
          transform: translateY(-8px);
          border-color: rgba(8, 145, 178, 0.4) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15), 0 0 20px ${glowCyan};
        }
        .hm-btn-primary {
          background: ${gradientPrimary};
          background-size: 200% auto;
          box-shadow: 0 8px 25px rgba(79, 70, 229, 0.25);
          transition: all 0.4s ease;
        }
        .hm-btn-primary:hover {
          background-position: right center;
          box-shadow: 0 12px 30px rgba(8, 145, 178, 0.35);
          transform: translateY(-2px);
        }
        .gradient-text {
          background: ${gradientPrimary};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .floating-terminal {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 1.5rem", position: "relative", zIndex: 1 }}>

        {/* ══ HERO SECTION ═════════════════════════════════════ */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          marginBottom: 90,
        }}>

          {/* LEFT — Text & CTAs */}
          <motion.div {...fadeUp(0)} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: surface, border: `1px solid ${border}`,
              borderRadius: 999, padding: "8px 20px", width: "fit-content",
              backdropFilter: "blur(10px)", boxShadow: `0 4px 20px ${glowIndigo}`
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: accent2, boxShadow: `0 0 12px ${accent2}` }} />
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: textPrimary, letterSpacing: "0.05em", fontWeight: 500 }}>
                SYSTEM.STATUS === "AVAILABLE"
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "clamp(46px, 6.5vw, 78px)",
              fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: textPrimary, margin: 0
            }}>
              Hi, I'm{" "}
              <span className="gradient-text">
                Sandaruwan
              </span>
              <br />Warnasooriya
            </h1>

            <motion.p {...fadeUp(0.2)} style={{
              fontFamily: "'Fira Code', monospace", fontSize: 14, color: accent1, margin: 0, fontWeight: 500
            }}>
              {">"} Full Stack Developer | B.Sc (Hons) CIS
            </motion.p>

            <motion.p {...fadeUp(0.3)} style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 17, lineHeight: 1.7,
              color: textMuted, fontWeight: 400, maxWidth: 520, margin: 0
            }}>
              Engineering modern web solutions and exploring the intersections of data science. 
              I build scalable backends, interactive UIs, and robust ML-driven applications.
            </motion.p>

            <motion.div {...fadeUp(0.4)} style={{ display: "flex", gap: 16, marginTop: 10 }}>
              <Link to="/work">
                <button className="hm-btn-primary" style={{
                  color: "#fff", border: "none", padding: "16px 34px", borderRadius: 14,
                  fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, cursor: "pointer"
                }}>
                  View Architecture & Projects
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — Avatar & Floating Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            {/* Main Avatar */}
            <div style={{
              width: "320px", height: "320px", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              overflow: "hidden", border: `2px solid ${border}`,
              boxShadow: `0 20px 50px rgba(0,0,0,0.3), inset 0 0 20px ${glowIndigo}`,
              transition: "border-radius 0.5s ease"
            }}>
              <img src="./profile.jpg" alt="Sandaruwan Warnasooriya" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            {/* Floating Terminal Snippet */}
            <div className="floating-terminal" style={{
              position: "absolute", bottom: "-10%", left: "-5%",
              background: isDark ? "#0F172A" : "#1E293B",
              border: `1px solid rgba(255,255,255,0.08)`, borderRadius: 16, padding: "20px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)", zIndex: 10
            }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }}/>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#eab308" }}/>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }}/>
              </div>
              <pre style={{
                fontFamily: "'Fira Code', monospace", fontSize: 13, color: "#A78BFA", margin: 0, lineHeight: 1.5
              }}>
                <span style={{ color: "#38BDF8" }}>const</span> developer = {"{"}<br/>
                &nbsp;&nbsp;stack: [<span style={{ color: "#A3E635" }}>'MERN'</span>, <span style={{ color: "#A3E635" }}>'Go'</span>],<br/>
                &nbsp;&nbsp;focus: <span style={{ color: "#A3E635" }}>'ML & Web'</span><br/>
                {"}"};
              </pre>
            </div>
          </motion.div>
        </div>

        {/* ══ DIVIDER (UPGRADED) ════════════════════════════════════════ */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            gap: 16, 
            marginBottom: 70, 
            marginTop: 40 
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 32px)", width: "100%" }}>
            {/* Left Line */}
            <div style={{ 
              flex: 1, height: "2px", 
              background: `linear-gradient(90deg, transparent, ${accent1})`, 
              opacity: 0.6 
            }} />
            
            {/* Center Pill */}
            <div style={{ 
              display: "flex", alignItems: "center", gap: 14, 
              padding: "16px 40px", 
              background: glowIndigo,
              border: `1px solid ${border}`,
              borderRadius: 50,
              boxShadow: `0 8px 30px ${glowIndigo}, inset 0 0 15px ${glowCyan}`,
              backdropFilter: "blur(12px)"
            }}>
              <FaTerminal style={{ fontSize: "clamp(20px, 2.5vw, 26px)", color: accent2 }}/>
              <span style={{ 
                fontFamily: "'Fira Code', monospace", 
                fontSize: "clamp(16px, 2.5vw, 22px)", 
                fontWeight: 700,
                color: textPrimary, 
                letterSpacing: "0.15em",
              }}>
                CORE COMPETENCIES
              </span>
            </div>
            
            {/* Right Line */}
            <div style={{ 
              flex: 1, height: "2px", 
              background: `linear-gradient(270deg, transparent, ${accent2})`, 
              opacity: 0.6 
            }} />
          </div>
          
          {/* Subtitle */}
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ 
              fontFamily: "'Outfit', sans-serif", 
              fontSize: 16, 
              color: textMuted, 
              fontWeight: 400,
              letterSpacing: "0.05em"
            }}
          >
            Technologies & architectures I use to build robust solutions
          </motion.span>
        </motion.div>

        {/* ══ BENTO ROLES GRID ════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {roles.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="hm-role-card"
              style={{
                display: "flex", flexDirection: "column", gap: 18,
                background: surface, border: `1px solid ${border}`,
                borderRadius: 24, padding: "32px",
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 16,
                background: glowIndigo,
                border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon style={{ fontSize: 22, color: accent2 }} />
              </div>
              <div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 700, color: textPrimary, margin: "0 0 8px" }}>
                  {title}
                </h4>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: textMuted, margin: 0, fontWeight: 400, lineHeight: 1.6 }}>
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}