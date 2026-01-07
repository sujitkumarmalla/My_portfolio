import React from "react";
import { useNavigate } from "react-router-dom";

export const FrontendProjects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      name: "TicTacToe",
      img: "/projects/tictactoe.jpg",
      demo: "https://example.com/tictactoe",
      code: "https://github.com/username/tictactoe",
    },
    {
      name: "Calculator Basic",
      img: "/projects/calculator.jpg",
      demo: "https://example.com/calculator",
      code: "https://github.com/username/calculator",
    },
    {
      name: "Todo App",
      img: "/projects/todo.jpg",
      demo: "https://example.com/todo",
      code: "https://github.com/username/todo",
    },
    {
      name: "Pokemon Card",
      img: "/projects/pokemon.jpg",
      demo: "https://example.com/pokemon",
      code: "https://github.com/username/pokemon",
    },
    {
      name: "Rock Paper Scissors",
      img: "/projects/rockpaper.jpg",
      demo: "https://example.com/rockpaper",
      code: "https://github.com/username/rockpaper",
    },
    {
      name: "Myntra Clone",
      img: "/projects/myntra.jpg",
      demo: "https://example.com/myntra",
      code: "https://github.com/username/myntra-clone",
    },
    {
      name: "Weather App",
      img: "/projects/weather.png",
      demo: "https://example.com/weather",
      code: "https://github.com/username/weather-app",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-[#050414] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <button
          onClick={() => navigate("/work")}
          className="mb-8 px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
        >
          ← Back to Work
        </button>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Frontend Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-lg flex flex-col"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-400 mb-4">
              {project.name}
            </h3>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-auto">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-500 rounded-full text-white hover:bg-cyan-600 transition"
              >
                View Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-500 rounded-full text-white hover:bg-purple-600 transition"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
