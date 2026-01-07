import React from "react";







export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen w-full bg-[#050414] relative overflow-hidden text-white"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* HEADER */}
        <div className="mb-20 relative flex items-center justify-center">
          <div className="absolute left-0 text-purple-400 font-semibold text-lg md:text-xl tracking-wider">
            mrsonu18
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white relative">
            Experience
            <span className="block mx-auto mt-3 w-16 h-[3px] bg-purple-500 rounded-full"></span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* OCAC */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden">
            <img
              src="/internship/ocactower.jpg"
              alt="OCAC"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-400">
                Core Java Intern
              </h3>
              <p className="text-gray-300 mt-2">
                OCAC, Bhubaneswar
              </p>
             
  <button
  onClick={() => window.open("/certificates/ocac.pdf", "_blank")}
  className="inline-block mt-4 text-sm text-purple-400 hover:underline"
>
  View Certificate
</button>



            </div>
          </div>

          {/* CTTC */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden">
            <img
              src="/internship/cttc.jpg"
              alt="CTTC"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-400">
                Machine Learning Intern
              </h3>
              <p className="text-gray-300 mt-2">
                CTTC, Bhubaneswar
              </p>
              <a
                href="/certificate/cttc.pdf"
                target="_blank"
                className="inline-block mt-4 text-sm text-purple-400 hover:underline"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* NEXTWAVE */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden">
            <img
              src="/internship/next_wave.png"
              alt="next_wave"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-400">
                Generative AI Course
              </h3>
              <p className="text-gray-300 mt-2">
                NextWave
              </p>
              <a
                href="/certificate/nextwave.pdf"
                target="_blank"
                className="inline-block mt-4 text-sm text-purple-400 hover:underline"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
