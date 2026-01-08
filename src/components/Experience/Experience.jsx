import React from "react";

export const Experience = () => {
  const openCertificate = (file) => {
    const url = `${import.meta.env.BASE_URL}certificate/${file}`;
    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen w-full bg-[#050414] text-white px-6 py-24">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {/* OCAC */}
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}internship/ocactower.jpg`}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-purple-400 text-xl font-semibold">
              Core Java Intern
            </h3>
            <p className="text-gray-300 mt-2">OCAC, Bhubaneswar</p>

            <button
              className="mt-4 border border-[#7C3AED] text-[#7C3AED] px-8 py-3 rounded-lg font-semibold hover:bg-[#7C3AED] hover:text-white transition-all shadow-md"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "certificate/java.pdf";
                link.download = "Sujit_java.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              View Certificate
            </button>
          </div>
        </div>

        {/* CTTC */}
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}internship/cttc.jpg`}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-purple-400 text-xl font-semibold">
              Machine Learning Intern
            </h3>
            <p className="text-gray-300 mt-2">CTTC, Bhubaneswar</p>

            <button
              className="mt-4 border border-[#7C3AED] text-[#7C3AED] px-8 py-3 rounded-lg font-semibold hover:bg-[#7C3AED] hover:text-white transition-all shadow-md"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "certificate/aiml.pdf";
                link.download = "Sujit_Aiml.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              View Certificate
            </button>
          </div>
        </div>

        {/* NEXTWAVE */}
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}internship/next_wave.png`}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-purple-400 text-xl font-semibold">
              Generative AI Course
            </h3>
            <p className="text-gray-300 mt-2">NextWave</p>

            <button
              className="mt-4 border border-[#7C3AED] text-[#7C3AED] px-8 py-3 rounded-lg font-semibold hover:bg-[#7C3AED] hover:text-white transition-all shadow-md"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "certificate/next_wave_com.pdf";
                link.download = "Sujit_next_wave.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              View Certificate
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
