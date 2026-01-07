import React from "react";

export const Skills = () => {
  const skills = [
    { name: "Java", percent: 80, img: "/skilcard/java.png" },
    { name: "Python", percent: 70, img: "/skilcard/python.png" },
    { name: "C", percent: 60, img: "/skilcard/clogo.jpg" },
    { name: "DBMS", percent: 60, img: "/skilcard/dbms.png" },
    { name: "MongoDB", percent: 80, img: "/skilcard/mongodbi.jpg" },
    { name: "DSA", percent: 40, img: "/skilcard/dsa.jpg" },
    { name: "React", percent: 75, img: "/skilcard/react.png" },
    { name: "MachineLearning", percent: 75, img: "/skilcard/machinelearning.jpg" },
  ];

  return (
    <section
      id="skills"
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills
            <span className="block mx-auto mt-3 w-16 h-[3px] bg-purple-500 rounded-full"></span>
          </h2>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-lg flex flex-col"
            >
              {/* Skill Name + Image */}
              <div className="flex items-center mb-4">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <h3 className="text-xl font-semibold text-purple-400">
                  {skill.name}
                </h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-4">
                <div
                  className="bg-purple-500 h-4 rounded-full"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
              <p className="mt-2 text-gray-300">{skill.percent}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
