import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  Mail,
  Phone,
  GraduationCap,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Facebook,
  Youtube,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Connect() {
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

  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "warnasooriyacs2000@gmail.com",
      link: "mailto:warnasooriyacs2000@gmail.com",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Academic Email",
      value: "wmcswarnasuriya@std.appsc.sab.ac.lk",
      link: "mailto:wmcswarnasuriya@std.appsc.sab.ac.lk",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+94 76 729 7190",
      link: "tel:+94767297190",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      label: "Education",
      value: "BSc (Hons) in CIS - SUSL · Diploma in HRM",
    },
  ];

  const socials = [
    { icon: <Github className="w-6 h-6" />, label: "GitHub", link: "https://github.com/cswarnasooriya" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", link: "https://www.linkedin.com/in/cswarnasooriya/" },
    { icon: <MessageCircle className="w-6 h-6" />, label: "WhatsApp", link: "https://wa.me/94767297190" },
    { icon: <Youtube className="w-6 h-6" />, label: "YouTube", link: "https://www.youtube.com/@warna_digital" },
    { icon: <Facebook className="w-6 h-6" />, label: "Facebook", link: "https://www.facebook.com/warnasooriyacs" },
    { icon: <Instagram className="w-6 h-6" />, label: "Instagram", link: "https://instagram.com/warna_00" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: bg, transition: "background 0.4s ease", position: "relative", overflow: "hidden", paddingBottom: "100px" }}>

      {/* ── Abstract Background Orbs ── */}
      <div style={{
        position: "absolute", top: "20%", left: "-10%", width: "40vw", height: "40vw",
        background: glowIndigo, filter: "blur(140px)", borderRadius: "50%", zIndex: 0, pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", right: "-5%", width: "45vw", height: "45vw",
        background: glowCyan, filter: "blur(140px)", borderRadius: "50%", zIndex: 0, pointerEvents: "none"
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap');

        .cn-glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .cn-glass-card:hover {
          transform: translateY(-5px);
          border-color: rgba(8, 145, 178, 0.4) !important;
          box-shadow: 0 15px 35px rgba(0,0,0,0.15), 0 0 20px ${glowCyan};
        }
        .cn-social-card {
          transition: all 0.3s ease;
        }
        .cn-social-card:hover {
          background: ${gradientPrimary} !important;
          border-color: transparent !important;
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);
        }
        .cn-social-card:hover .social-icon, .cn-social-card:hover .social-text {
          color: #ffffff !important;
        }
        .cn-btn-primary {
          background: ${gradientPrimary};
          background-size: 200% auto;
          box-shadow: 0 8px 25px rgba(79, 70, 229, 0.25);
          transition: all 0.4s ease;
        }
        .cn-btn-primary:hover {
          background-position: right center;
          box-shadow: 0 12px 30px rgba(8, 145, 178, 0.35);
          transform: translateY(-2px);
        }
        .cn-btn-outline {
          transition: all 0.3s ease;
        }
        .cn-btn-outline:hover {
          border-color: #10B981 !important;
          color: #10B981 !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(16, 185, 129, 0.15);
        }
        .gradient-text {
          background: ${gradientPrimary};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .avatar-glow {
          animation: pulse-glow 4s infinite alternate;
        }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 20px ${glowIndigo}, inset 0 0 10px ${glowCyan}; }
          100% { box-shadow: 0 0 40px ${glowCyan}, inset 0 0 20px ${glowIndigo}; }
        }
      `}</style>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "120px 1.5rem 0", position: "relative", zIndex: 1 }}>

        {/* ══ HEADER SECTION ═════════════════════════════════════ */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 70 }}>

          <div style={{ position: "relative", marginBottom: 30 }}>
            <div className="avatar-glow" style={{
              width: 140, height: 140, borderRadius: "30%", padding: 4,
              background: gradientPrimary, display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <img
                src="./profile.png"
                alt="Sandaruwan Warnasooriya"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "28%" }}
              />
            </div>
            <div style={{
              position: "absolute", bottom: -10, right: -10, background: surface, border: `1px solid ${border}`,
              backdropFilter: "blur(10px)", padding: "6px 12px", borderRadius: 999, display: "flex", alignItems: "center", gap: 6
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }} />
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: textPrimary, fontWeight: 600 }}>AVAILABLE</span>
            </div>
          </div>

          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 800, lineHeight: 1.1, color: textPrimary, margin: "0 0 16px", letterSpacing: "-0.02em"
          }}>
            Let's <span className="gradient-text">Connect</span>
          </h1>

          <p style={{
            fontFamily: "'Fira Code', monospace", fontSize: 15, color: accent2, margin: "0 0 16px", fontWeight: 500
          }}>
            Associate Software Engineer · Former Full Stack Developer
          </p>

          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 16, color: textMuted,
            maxWidth: 500, lineHeight: 1.6, fontWeight: 400, margin: 0
          }}>
            Open for opportunities, collaborations, and architectural discussions. Drop a message!
          </p>
        </motion.div>

        {/* ══ DIRECT CONTACTS GRID ════════════════════════════════ */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, marginBottom: 50
        }}>
          {contacts.map((item, i) => {
            const isLink = !!item.link;
            const Wrapper = isLink ? "a" : "div";
            return (
              <motion.div key={i} variants={fadeUp}>
                <Wrapper
                  href={item.link}
                  target={isLink ? "_blank" : undefined}
                  rel={isLink ? "noopener noreferrer" : undefined}
                  className="cn-glass-card"
                  style={{
                    display: "flex", alignItems: "center", gap: 20,
                    background: surface, border: `1px solid ${border}`,
                    borderRadius: 20, padding: "24px", textDecoration: "none",
                    cursor: isLink ? "pointer" : "default"
                  }}
                >
                  <div style={{
                    width: 56, height: 56, borderRadius: 16, background: glowIndigo,
                    border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    <div style={{ color: accent2 }}>{item.icon}</div>
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 13, color: accent1, margin: "0 0 6px", fontWeight: 600 }}>
                      {item.label}
                    </p>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 16, color: textPrimary, margin: 0,
                      fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                    }}>
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ══ SOCIALS GRID ════════════════════════════════════════ */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: "center", marginBottom: 30 }}>
          <div style={{ width: 40, height: 2, background: border, margin: "0 auto 20px" }} />
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 24, fontWeight: 700, color: textPrimary, margin: 0 }}>
            Find Me <span className="gradient-text">Online</span>
          </h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 70
        }}>
          {socials.map((social, i) => (
            <motion.a key={i} variants={fadeUp} href={social.link} target="_blank" rel="noopener noreferrer" className="cn-social-card" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
              background: surfaceAlt, border: `1px solid ${border}`,
              borderRadius: 16, padding: "20px", textDecoration: "none"
            }}>
              <div className="social-icon" style={{ color: textMuted, transition: "color 0.3s ease" }}>
                {social.icon}
              </div>
              <span className="social-text" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, color: textPrimary, transition: "color 0.3s ease" }}>
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* ══ CTAs ═══════════════════════════════════════════════ */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{
          display: "flex", flexDirection: "column", sm: "row", gap: 20, justifyContent: "center", alignItems: "center", flexWrap: "wrap"
        }}>
          <a href="mailto:warnasooriyacs2000@gmail.com" className="cn-btn-primary" style={{
            display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
            color: "#fff", border: "none", padding: "18px 40px", borderRadius: 16,
            fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, cursor: "pointer"
          }}>
            <Mail size={20} /> Initiate Email Thread
          </a>

          <a href="https://wa.me/94767297190" target="_blank" rel="noopener noreferrer" className="cn-btn-outline" style={{
            display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
            background: surface, color: textPrimary, border: `1px solid ${border}`,
            padding: "18px 40px", borderRadius: 16, fontFamily: "'Outfit', sans-serif",
            fontSize: 16, fontWeight: 600, cursor: "pointer", backdropFilter: "blur(10px)"
          }}>
            <MessageCircle size={20} /> Ping on WhatsApp
          </a>
        </motion.div>

      </div>
    </div>
  );
}