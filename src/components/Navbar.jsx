import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-blue-300">Laxmi</h1>

        <ul className="flex gap-6 text-white font-medium">
          <li><a href="#home" className="hover:text-blue-300">Home</a></li>
          <li><a href="#about" className="hover:text-blue-300">About</a></li>
          <li><a href="#skills" className="hover:text-blue-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
