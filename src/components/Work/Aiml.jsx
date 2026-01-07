import React from "react";

export const AIMLProjects = () => {
  const projects = [
    { name: "Spam Message Classifier", img: "/projects/spam.png" },
    { name: "IPL Win Probability Predictor", img: "/projects/ipl.png" },
    { name: "Movie Recommender System", img: "/projects/movie.png" },
    { name: "Smart Attendance System", img: "/projects/attendance.png" },
    { name: "Laptop Price Predictor", img: "/projects/laptop.png" },
  ];

  return (
    <section className="min-h-screen w-full bg-[#050414] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          AI / ML Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-lg"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-400">
              {project.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
