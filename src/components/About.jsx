const About = () => {
    return (
      <section
        id="about"
        className="min-h-screen py-5 px-6 bg-gradient-to-b from-gray-900 to-black text-white"
      >
        {/* HEADING */}
        <h2 className="text-5xl font-extrabold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
  
        {/* MAIN ABOUT CARD */}
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-white/10">
          
          {/* INTRO */}
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Hi! I'm <span className="text-blue-400 font-semibold">Laxmi Yadav</span>,
            a passionate and dedicated Frontend Developer from Jashpur, Chhattisgarh.
            I love building beautiful, responsive, and user-friendly web applications
            using modern technologies like React, HTML,JavaScript,CSS, and APIs.
          </p>
  
          {/* PERSONALITY & STRENGTHS */}
          <h3 className="text-3xl font-bold mb-5">✨ My Strengths</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-blue-400 mb-2">Patience</h4>
              <p className="text-gray-300">I stay calm and focused even during complex challenges.</p>
            </div>
  
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-blue-400 mb-2">Consistency</h4>
              <p className="text-gray-300">I study, practice, and improve myself every day.</p>
            </div>
  
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-blue-400 mb-2">Problem Solving</h4>
              <p className="text-gray-300">I love finding solutions and fixing errors in code.</p>
            </div>
          </div>
  
          {/* WHAT I DO */}
          <h3 className="text-3xl font-bold mb-5">💻 What I Do</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-300 mb-10">
            <li>Build modern and responsive websites using React + Tailwind</li>
            <li>Create interactive UI/UX designs with clean styling</li>
            <li>Work with APIs to fetch and display data</li>
            <li>Build small apps like MapApp, Recipe App, Weather App, Todo App, Calculator, Games</li>
            <li>Work with backend basics (Node.js + Express + MongoDB)</li>
          </ul>
  
          {/* LEARNING TIMELINE */}
          <h3 className="text-3xl font-bold mb-5">📘 My Learning Journey</h3>
  
          <div className="space-y-5 mb-10">
            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="text-xl font-semibold">2023 — Started HTML, CSS</h4>
              <p className="text-gray-400 text-sm">
                Learned structure, styling, layouts.
              </p>
            </div>
  
            <div className="border-l-4 border-purple-400 pl-4">
              <h4 className="text-xl font-semibold">2024 — JavaScript + Projects</h4>
              <p className="text-gray-400 text-sm">
                Made Map App,calculators, games, weather app, and learned DOM, APIs.
              </p>
            </div>
  
            <div className="border-l-4 border-pink-400 pl-4">
              <h4 className="text-xl font-semibold">2025 — React Developer</h4>
              <p className="text-gray-400 text-sm">
                Building professional portfolio, dynamic UI, and full-stack basics.
              </p>
            </div>
          </div>
  
          {/* TECH STACK */}
          <h3 className="text-3xl font-bold mb-5">🛠 Technologies I Use</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Node.js",
              "MongoDB",
              "GitHub",
              "REST APIs",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-5 py-2 bg-gray-800 text-gray-200 rounded-xl border border-gray-700 hover:bg-blue-600 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  