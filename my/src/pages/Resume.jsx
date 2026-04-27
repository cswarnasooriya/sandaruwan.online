import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import { Download, Terminal, FileText } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Resume() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  /* ── Darker & Professional Design Tokens (Matches Cyber-Aurora Theme) ── */
  const bg          = isDark ? "#060A14"               : "#F8FAFC";
  const surface     = isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(255, 255, 255, 0.75)";
  const border      = isDark ? "rgba(79, 70, 229, 0.2)": "rgba(79, 70, 229, 0.15)";
  const textPrimary = isDark ? "#CBD5E1"               : "#020617";
  const textMuted   = isDark ? "#828C9A"               : "#334155";
  
  const accent1     = "#4F46E5"; // Deep Indigo
  const accent2     = "#0891B2"; // Deep Cyan
  const gradientPrimary = `linear-gradient(135deg, ${accent1} 0%, ${accent2} 100%)`;
  
  const glowIndigo = isDark ? "rgba(79, 70, 229, 0.15)" : "rgba(79, 70, 229, 0.08)";
  const glowCyan   = isDark ? "rgba(8, 145, 178, 0.15)" : "rgba(8, 145, 178, 0.08)";

  // Drive links for PDF
  const cvEmbedUrl = "https://drive.google.com/file/d/1V9Tf5TWrFAVg3-8j9_JQBfo-xXkK-r8f/preview";
  const cvDownloadUrl = "https://drive.google.com/file/d/1V9Tf5TWrFAVg3-8j9_JQBfo-xXkK-r8f/view?usp=sharing";

  return (
    <div style={{ minHeight: "100vh", background: bg, transition: "background 0.4s ease", position: "relative", overflow: "hidden", paddingBottom: "100px" }}>
      
      {/* ── Abstract Background Orbs ── */}
      <div style={{
        position: "absolute", top: "10%", left: "-10%", width: "40vw", height: "40vw",
        background: glowIndigo, filter: "blur(140px)", borderRadius: "50%", zIndex: 0, pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", right: "-5%", width: "45vw", height: "45vw",
        background: glowCyan, filter: "blur(140px)", borderRadius: "50%", zIndex: 0, pointerEvents: "none"
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap');

        .rs-glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .rs-btn-primary {
          background: ${gradientPrimary};
          background-size: 200% auto;
          box-shadow: 0 8px 25px rgba(79, 70, 229, 0.25);
          transition: all 0.4s ease;
        }
        .rs-btn-primary:hover {
          background-position: right center;
          box-shadow: 0 12px 30px rgba(8, 145, 178, 0.35);
          transform: translateY(-2px);
        }
        .gradient-text {
          background: ${gradientPrimary};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pdf-container iframe {
          border-radius: 16px;
          border: 1px solid ${border};
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 1.5rem 0", position: "relative", zIndex: 1 }}>

        {/* ══ HEADER SECTION ═════════════════════════════════════ */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ textAlign: "center", marginBottom: 60 }}>
          
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: surface, border: `1px solid ${border}`,
            borderRadius: 999, padding: "8px 20px", marginBottom: 28,
            backdropFilter: "blur(10px)", boxShadow: `0 4px 20px ${glowIndigo}`
          }}>
            <Terminal size={14} color={accent2} />
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: textPrimary, letterSpacing: "0.05em", fontWeight: 600 }}>
              SYSTEM.RESUME === "LOADED"
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: "clamp(46px, 6vw, 78px)",
            fontWeight: 800, lineHeight: 1.1, color: textPrimary, margin: "0 0 20px", letterSpacing: "-0.02em"
          }}>
            View My <span className="gradient-text"> CV</span>
          </h1>

          <div style={{ width: 60, height: 4, background: gradientPrimary, margin: "0 auto 24px", borderRadius: 4 }} />

          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 18, color: textMuted,
            maxWidth: 650, margin: "0 auto", lineHeight: 1.7, fontWeight: 400
          }}>
            My academic foundation, technical skills, and professional journey summarized in one document.
          </p>

          <div style={{ marginTop: 30 }}>
            <a href={cvDownloadUrl} target="_blank" rel="noopener noreferrer" className="rs-btn-primary" style={{
                display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none",
                color: "#fff", border: "none", padding: "14px 32px", borderRadius: 14,
                fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, cursor: "pointer"
            }}>
              <Download size={20} /> Download Resume
            </a>
          </div>

        </motion.div>

        {/* ══ PDF VIEWER SECTION ════════════════════════════════ */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ display: "flex", justifyContent: "center" }}>
          <div className="rs-glass-card pdf-container" style={{
            width: "100%", maxWidth: "900px", background: surface, border: `1px solid ${border}`,
            borderRadius: 24, padding: "20px", display: "flex", flexDirection: "column", gap: 16
          }}>
            
            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingLeft: 10 }}>
              <FileText size={22} color={accent2} />
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 600, color: textPrimary, margin: 0 }}>
                SE_Sandaruwan_CV_2026.pdf
              </h2>
            </div>

            <div style={{ width: "100%", height: "800px", position: "relative" }}>
              <iframe 
                src={cvEmbedUrl} 
                width="100%" 
                height="100%" 
                allow="autoplay"
                title="Sandaruwan Warnasooriya CV"
                style={{ backgroundColor: isDark ? "#1E293B" : "#F1F5F9" }}
              />
            </div>
            
          </div>
        </motion.div>

      </div>
    </div>
  );
}