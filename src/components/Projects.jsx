import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  const projects = [
    {
      img: project1,
      title: "Weather App",
      desc: "A modern weather application using live API and dynamic UI.",
      live: "https://laxmiyadav122.github.io/WeatherApp/",    
      code: "https://github.com/Laxmiyadav122"        
    },
    {
      img: project2,
      title: "Library",
      desc: "A clean and simple to search library.",
      live: "https://laxmiyadav122.github.io/library/",            
      code: "https://github.com/Laxmiyadav122"            
    },
    {
      img: project3,
      title: "Map App",
      desc: "A beautifully designed Map App.",
      live: "https://laxmiyadav122.github.io/MapApp/",       
      code: "https://github.com/Laxmiyadav122"           
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen pt-10 pb-20 px-6 bg-gray-900 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-blue-400">Projects</span>
      </h2>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
        These are some of the projects I’ve created with passion.  
        I always focus on clean UI, smooth user experience, and beautiful design — 
        just like my personality: simple, elegant, and impactful. ✨
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 
            hover:scale-105 hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={p.img}
                alt={p.title}
                className="rounded-lg group-hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mt-4 group-hover:text-blue-400 transition">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mt-1">{p.desc}</p>

            {/* Buttons */}
            <div className="mt-4 flex items-center justify-between">

              {/* Live Demo Button */}
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg 
                hover:bg-blue-700 transition"
              >
                Live Demo <FaExternalLinkAlt />
              </a>

              {/* Code Button */}
              <a
                href={p.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg 
                hover:bg-gray-600 transition"
              >
                Code <FaGithub />
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
