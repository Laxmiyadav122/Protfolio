import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaWind,
  FaFigma,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-400 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-blue-300 text-4xl" /> },
    { name: "Tailwind CSS", icon: <FaWind className="text-cyan-300 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-4xl" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-green-300 text-4xl" /> },

    // New Skills ↓
    { name: "Git", icon: <FaGitAlt className="text-red-400 text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300 text-4xl" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-400 text-4xl" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen pt-10 pb-20 px-6 bg-black text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="text-blue-400">Skills</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group p-6 bg-gray-900 rounded-2xl shadow-lg border border-gray-700 flex flex-col items-center justify-center gap-4 hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-blue-500/20 cursor-pointer"
          >
            {skill.icon}
            <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
