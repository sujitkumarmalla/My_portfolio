import React from "react";
import { useNavigate } from "react-router-dom";

export const Work = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Frontend Projects",
      img: "/projects/f1.jpg",
      path: "/work/frontend",
    },
    {
      name: "AI / ML Projects",
      img: "/projects/aiml.jpg",
      path: "/work/aiml",
    },
  ];

  return (
    <section
      id="work"
      className="min-h-screen w-full bg-[#050414] relative overflow-hidden text-white py-24 px-6"
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)]
        bg-[size:40px_40px] opacity-20"
      />

      {/* PURPLE GLOW */}
      <div
        className="absolute left-[-150px] top-1/2 w-[400px] h-[400px]
        bg-purple-600 rounded-full blur-[180px] opacity-40"
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          My Work
          <span className="block mx-auto mt-3 w-16 h-[3px] bg-purple-500 rounded-full"></span>
        </h2>

        {/* CATEGORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="
                bg-white/5 backdrop-blur-md rounded-xl border border-white/10 
                shadow-lg shadow-purple-500/20
                flex flex-col items-center p-6
                transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-purple-500
                duration-300
              "
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                {cat.name}
              </h3>
              <button
                onClick={() => navigate(cat.path)}
                className="px-6 py-2 bg-purple-500 rounded-full text-white hover:bg-purple-600 transition"
              >
                View Projects
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
