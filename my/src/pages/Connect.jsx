import React from "react";
import {
  Mail,
  Phone,
  GraduationCap,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Twitter,
  Facebook,
  Youtube,
  User,
} from "lucide-react";
import { useTheme } from "../context/Theme/ThemeContext";

const Connect = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "warnasooriyacs2000@gmail.com",
      link: "mailto:warnasooriyacs2000@gmail.com",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Academic Email",
      value: "wmcswarnasuriya@std.appsc.sab.ac.lk",
      link: "mailto:wmcswarnasuriya@std.appsc.sab.ac.lk",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+94 76 729 7190",
      link: "tel:+94767297190",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      label: "Education",
      value: "BSc (Hons) in CIS 2026 · Diploma in HRM 2022 · GCE A/L 2019",
    },
  ];

  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/cswarnasooriya",
      hover: "hover:text-gray-800",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/cswarnasooriya/",
      hover: "hover:text-blue-600",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      link: "https://instagram.com/warna_00",
      hover: "hover:text-pink-600",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      link: "https://wa.me/94767297190",
      hover: "hover:text-green-600",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      link: "https://www.facebook.com/warnasooriyacs",
      hover: "hover:text-blue-700",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      label: "YouTube",
      link: "https://www.youtube.com/@warna_digital",
      hover: "hover:text-red-600",
    },
  ];

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 py-12 pt-24 transition-colors duration-500 ${
        isDark
          ? "bg-black text-gray-300"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-700"
      }`}
    >
      <div
        className={`max-w-4xl w-full rounded-3xl p-8 backdrop-blur-sm shadow-2xl border transition-all duration-500 ${
          isDark
            ? "bg-blue-950/40 border-blue-900/40"
            : "bg-white/90 border-blue-100"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-1">
              <img
                src="./profile-2.jpg"
                alt="profile"
                className="w-full h-full object-cover rounded-2xl cursor-pointer"
              />
            </div>
          </div>

          <h1
            className={`text-4xl font-bold mb-3 text-center leading-tight ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Connect with{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className={`text-lg font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Software Engineer · Full Stack Developer · Designer
          </p>
        </div>

        {/* Contacts */}
        <div className="grid gap-4 mb-8">
          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.link ?? undefined}
              target={item.link ? "_blank" : undefined}
              className={`flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-500 cursor-pointer border ${
                isDark
                  ? "bg-blue-950/40 border-blue-900/40 hover:bg-blue-950"
                  : "bg-white/80 border-blue-100 hover:bg-blue-50"
              } hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="text-blue-600">{item.icon}</div>
              <div>
                <p className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {item.label}
                </p>
                <p className={`font-semibold text-lg ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Socials */}
        <h2 className={`text-2xl font-semibold mb-6 text-center ${isDark ? "text-gray-200" : "text-gray-800"}`}>
          Find Me On
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              className={`flex items-center gap-4 rounded-xl px-5 py-4 border transition-all duration-500 group cursor-pointer hover:-translate-y-1 ${
                isDark
                  ? "bg-blue-950/40 border-blue-900/40 hover:bg-blue-950"
                  : "bg-white/80 border-blue-100 hover:bg-blue-50"
              }`}
            >
              <div className={`transition-transform duration-300 group-hover:scale-125 ${social.hover}`}>
                {social.icon}
              </div>
              <span className="font-medium">{social.label}</span>
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a
            href="mailto:warnasooriyacs2000@gmail.com"
            className={`px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-500 text-center cursor-pointer ${
              isDark
                ? "bg-blue-900 text-white hover:scale-110"
                : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-110"
            }`}
          >
            <Mail className="inline w-5 h-5 mr-2" />
            Send Email
          </a>

          <a
            href="https://wa.me/94767297190"
            target="_blank"
            className={`px-8 py-4 rounded-xl border-2 font-semibold transition-all duration-500 text-center cursor-pointer ${
              isDark
                ? "border-blue-900 text-blue-400 hover:bg-green-600 hover:text-white hover:border-green-600"
                : "border-blue-600 text-blue-600 hover:bg-green-500 hover:text-white hover:border-green-500"
            }`}
          >
            <MessageCircle className="inline w-5 h-5 mr-2" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
