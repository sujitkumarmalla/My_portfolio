import React from "react";

export const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen w-full bg-[#050414] relative overflow-hidden text-white"
    >
      {/* GRID BACKGROUND (same as hero) */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)]
        bg-[size:40px_40px] opacity-20"
      />

      {/* PURPLE GLOW (same as hero) */}
      <div
        className="absolute right-[-150px] top-1/2 w-[400px] h-[400px]
        bg-purple-600 rounded-full blur-[180px] opacity-40"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
       {/* EDUCATION HEADER */}
{/* EDUCATION HEADER */}
<div className="mb-20 relative flex items-center justify-center">

  {/* LEFT BRAND */}
  <div className="absolute left-0 text-purple-400 font-semibold text-lg md:text-xl tracking-wider">
    mrsonu18
  </div>

  {/* CENTER TITLE */}
  <h2 className="text-4xl md:text-5xl font-bold text-white relative">
    Education
    <span className="block mx-auto mt-3 w-16 h-[3px] bg-purple-500 rounded-full"></span>
  </h2>

</div>



        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-purple-500/50 -translate-x-1/2" />

          {/* 10th */}
          <div className="mb-20 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 text-center md:text-right">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
                <h3 className="text-xl font-semibold text-purple-400">
                  10th Standard
                </h3>
                <p className="mt-2 text-gray-300">
                  Nayahat High School
                </p>
                <p className="text-gray-400">Percentage: 81%</p>
              </div>
            </div>

            <div className="w-5 h-5 bg-purple-500 rounded-full z-10 my-6 md:my-0" />
            <div className="md:w-1/2" />
          </div>

          {/* +2 */}
          <div className="mb-20 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2" />

            <div className="w-5 h-5 bg-purple-500 rounded-full z-10 my-6 md:my-0" />

            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
                <h3 className="text-xl font-semibold text-purple-400">
                  +2 (Higher Secondary)
                </h3>
                <p className="mt-2 text-gray-300">
                  Swadhin Residential College
                </p>
                <p className="text-gray-400">Nimapada, Puri</p>
                <p className="text-gray-400">Percentage: 84%</p>
              </div>
            </div>
          </div>

          {/* BTECH */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 text-center md:text-right">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
                <h3 className="text-xl font-semibold text-purple-400">
                  B.Tech (Pursuing)
                </h3>
                <p className="mt-2 text-gray-300">
                  GIFT Autonomous College
                </p>
                <p className="text-gray-400">
                  Current CGPA: 8.45
                </p>
              </div>
            </div>

            <div className="w-5 h-5 bg-purple-500 rounded-full z-10 my-6 md:my-0" />
            <div className="md:w-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};
