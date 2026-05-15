import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaCode, FaTerminal, FaFacebook } from "react-icons/fa";

const SmokeCursor = () => {
  const canvasRef = useRef(null);
  const [isTouch, setIsTouch] = React.useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    let mouse = { x: -100, y: -100 };
    let isMoving = false;
    let timeout;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMoving = true;
      
      clearTimeout(timeout);
      timeout = setTimeout(() => isMoving = false, 100);

      // Spawn colorful smoke particles on move
      for(let i=0; i<3; i++){
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 10,
          y: mouse.y + (Math.random() - 0.5) * 10,
          size: Math.random() * 15 + 8,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5 - 0.5,
          life: 1,
          decay: Math.random() * 0.02 + 0.015,
          hue: [290, 320, 190, 260][Math.floor(Math.random() * 4)] // Fuchsia, Pink, Cyan, Purple
        });
      }
    };
    window.addEventListener('mousemove', onMouseMove);

    let animationFrame;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen';
      
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= p.decay;
        p.size += 0.3; // Expand slightly as it dissipates
        
        if (p.life > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
          gradient.addColorStop(0, `hsla(${p.hue}, 100%, 65%, ${p.life * 0.6})`);
          gradient.addColorStop(1, `hsla(${p.hue}, 100%, 65%, 0)`);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }
      
      particles = particles.filter(p => p.life > 0);
      
      // Idle slight pulse effect
      if (!isMoving && Math.random() < 0.1 && mouse.x > 0) {
         particles.push({
          x: mouse.x,
          y: mouse.y,
          size: Math.random() * 10 + 5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: Math.random() * -1,
          life: 0.5,
          decay: 0.02,
          hue: 290
        });
      }

      animationFrame = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <style>{`
        body, a, button, input, select, textarea, [role="button"] { cursor: none !important; }
        @media (pointer: coarse) {
          body, a, button, input, select, textarea, [role="button"] { cursor: auto !important; }
          a, button, [role="button"] { cursor: pointer !important; }
        }
      `}</style>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]" />
    </>
  );
};

const TiltPhoto = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full group mt-10 md:mt-0 mx-auto md:mx-0"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full relative rounded-full"
      >
        {/* Glow behind the photo */}
        <div className="absolute inset-[-15px] rounded-full bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-cyan-500 opacity-50 blur-2xl group-hover:opacity-80 group-hover:blur-3xl transition-all duration-700" style={{ transform: 'translateZ(-20px)' }} />
        
        {/* Border / Container */}
        <div className="absolute inset-0 rounded-full p-[5px] bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400" style={{ transform: 'translateZ(0px)' }}>
          <div className="w-full h-full rounded-full overflow-hidden bg-black shadow-inner">
            <img 
              src="./profile.png" 
              alt="Sandaruwan Warnasooriya" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Floating elements to give 3D depth */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] -right-[5%] w-16 h-16 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 shadow-[0_0_25px_rgba(34,211,238,0.5)] flex items-center justify-center z-20"
          style={{ transform: 'translateZ(50px)' }}
        >
          <FaCode className="text-cyan-300 text-2xl" />
        </motion.div>
        
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [12, -12, 12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[12%] -left-[8%] w-14 h-14 rounded-full bg-fuchsia-500/20 backdrop-blur-md border border-fuchsia-400/40 shadow-[0_0_25px_rgba(232,121,249,0.5)] flex items-center justify-center z-20"
          style={{ transform: 'translateZ(70px)' }}
        >
          <FaTerminal className="text-fuchsia-300 text-xl" />
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    document.body.classList.add("home-no-scroll");
    return () => {
      document.body.classList.remove("home-no-scroll");
    };
  }, []);

  const bg = isDark ? "#05050A" : "#F8FAFC";
  const textPrimary = isDark ? "#F8FAFC" : "#0F172A";
  const textSecondary = isDark ? "#94A3B8" : "#475569";

  return (
    <div 
      className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden transition-colors duration-500" 
      style={{ background: bg }}
    >
      <SmokeCursor />
      
      {/* Hide footer dynamically on Home */}
      <style>{`
        .home-no-scroll { overflow: hidden !important; height: 100dvh !important; }
        .home-no-scroll footer { display: none !important; }
      `}</style>

      {/* Vibrant Background Gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] bg-fuchsia-600/20 blur-[140px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] bg-cyan-600/20 blur-[140px] rounded-full pointer-events-none mix-blend-screen" />
      
      {/* Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="z-10 flex flex-col md:flex-row items-center justify-between px-6 w-full max-w-7xl mt-16 md:mt-0 gap-10 lg:gap-20">
        
        {/* LEFT: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(217,70,239,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse shadow-[0_0_10px_rgba(232,121,249,0.8)]" />
            <span className="text-xs md:text-sm font-semibold text-fuchsia-300 tracking-widest uppercase font-mono">Available for New Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[clamp(2.75rem,5vw,5.5rem)] font-extrabold tracking-tight leading-[1.05] mb-6 drop-shadow-xl"
            style={{ color: textPrimary, fontFamily: "'Outfit', sans-serif" }}
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400">Digital</span> <br className="hidden lg:block" />
            Experiences That Matter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[clamp(1rem,1.5vw,1.15rem)] md:pr-12 leading-relaxed mb-10 max-w-2xl"
            style={{ color: textSecondary, fontFamily: "'Outfit', sans-serif" }}
          >
            I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sandaruwan Warnasooriya</span>, a Full Stack Developer specializing in robust backends, interactive UIs, and ML-driven web solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <Link to="/work" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto rounded-2xl bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-semibold text-lg overflow-hidden transition-all hover:scale-[1.03] shadow-[0_0_40px_-10px_rgba(217,70,239,0.6)]">
              <span className="relative z-10 flex items-center gap-2">
                View Architecture <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
            <Link to="/connect" className="inline-flex items-center justify-center px-8 py-4 w-full sm:w-auto rounded-2xl border-2 border-purple-500/30 bg-purple-500/5 backdrop-blur-md text-lg font-semibold transition-all hover:bg-purple-500/15 hover:border-purple-500/60 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)]" style={{ color: textPrimary }}>
              Let's Connect
            </Link>
          </motion.div>
          
          {/* Socials */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 flex items-center justify-center md:justify-start gap-8 w-full"
          >
            <SocialIcon href="https://github.com/cswarnasooriya" icon={FaGithub} color={textSecondary} hoverColor={isDark ? "#fff" : "#0F172A"} />
            <SocialIcon href="https://www.linkedin.com/in/sandaruwan-warnasooriya/" icon={FaLinkedin} color={textSecondary} hoverColor="#0A66C2" />
            <SocialIcon href="https://www.facebook.com/cswarnasooriya.2000/" icon={FaFacebook} color={textSecondary} hoverColor="#1DA1F2" />
          </motion.div>
        </div>

        {/* RIGHT: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex justify-center items-center w-full"
        >
          <TiltPhoto />
        </motion.div>

      </div>
    </div>
  );
}

function SocialIcon({ href, icon: Icon, color, hoverColor }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110"
      style={{ color }}
      onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
      onMouseLeave={(e) => e.currentTarget.style.color = color}
    >
      <Icon />
    </a>
  );
}