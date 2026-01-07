import React, { useEffect, useState } from "react";
import abcImg from "../../assets/abc.jpg";

export const About = () => {
  const fullText = "Malla";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 300); // speed (ms)
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-[#050414] relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 
        flex flex-col md:flex-row items-center justify-between 
        min-h-screen gap-12">

        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-gray-400 text-lg mb-2">Hi, I am</p>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Sujit Kumar{" "}
            <span className="text-purple-500">{text}</span>
            <span className="animate-pulse text-purple-500">|</span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-purple-400">
            I am a Web Developer
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I am a frontend-focused developer passionate about building
            modern, responsive, and visually appealing web applications.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full 
          border-4 border-purple-500 overflow-hidden
          shadow-[0_0_80px_rgba(168,85,247,0.6)]">
          <img
            src={abcImg}
            alt="Sujit Malla"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
