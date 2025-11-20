import React from "react";
import profile from "../assets/profile.png";
import resumeFile from "../assets/resume.pdf";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white pt-28"
    >
      {/* LEFT TEXT SECTION */}
      <div className="max-w-xl">
        
        <p className="text-blue-400 text-lg font-semibold mb-2 tracking-wider">
          👋 Hello, I am
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Laxmi Yadav
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          Frontend Developer | JavaScript | React | UI Designer
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed mb-8">
          I build beautiful, responsive, and high-performance web applications
          using modern technologies like HTML,CSS,JavaScript, MongoDB,React,Tailwind CSS,Express, Node.js and APIs.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-5 mb-8">
          <a
            href={resumeFile}
            download="Laxmi_Yadav_Resume.pdf"
            className="px-7 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold text-white shadow-lg transition transform hover:scale-105"
          >
            📄 Download Resume
          </a>

          <a
            href="#contact"
            className="px-7 py-3 border border-blue-400 hover:bg-blue-600 hover:text-white rounded-xl font-semibold shadow-lg transition transform hover:scale-105"
          >
            🤝 Hire Me
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-3xl text-gray-300">
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="mailto:laxmi23@gmail.com" className="hover:text-red-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="relative group">
        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full group-hover:opacity-50 transition"></div>

        <img
          src={profile}
          alt="profile"
          className="relative w-72 md:w-80 rounded-full shadow-[0_0_25px_rgb(59,130,246)] border border-blue-400 p-1 group-hover:scale-105 transition"
        />
      </div>
    </section>
  );
};

export default Hero;
