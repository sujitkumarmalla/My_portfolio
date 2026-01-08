import React, { useEffect, useState } from "react";
import abcImg from "../../assets/abc.jpg";

export const About = () => {
  const fullText = "Malla";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [showHeader, setShowHeader] = useState(false); // show About header
  const [showResumeButton, setShowResumeButton] = useState(true); // show Resume button

  // Typewriter effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Scroll listener to show/hide About header and Resume button
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top <= 100) {
          setShowHeader(true);
          setShowResumeButton(false);
        } else {
          setShowHeader(false);
          setShowResumeButton(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open resume
  const openResume = () => {
    const link = document.createElement("a");
    link.href = "certificate/Sujit_resume.pdf"; // put Resume.pdf in public folder
    link.download = "Sujit_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* About header on top when scrolled */}
      {showHeader && (
        <div className="fixed top-0 left-0 w-full bg-[#050414] text-white text-2xl font-bold py-4 text-center shadow-md z-50">
          About
        </div>
      )}

      {/* Home / About Section */}
      <section
        id="home"
        className="min-h-screen w-full bg-[#050414] relative overflow-hidden flex items-center justify-center"
      >
        <div
          id="about"
          className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-screen gap-12 pt-24 md:pt-32"
          // <- pt-24 ensures content is below fixed navbar
        >
          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center md:text-left">
            <p className="text-gray-400 text-lg mb-2">Hi, I am</p>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Sujit Kumar <span className="text-purple-500">{text}</span>
              <span className="animate-pulse text-purple-500">|</span>
            </h1>

            <h2 className="mt-4 text-xl md:text-2xl font-semibold text-purple-400">
              I am a Web Developer
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              I am a frontend-focused developer passionate about building modern,
              responsive, and visually appealing web applications.
            </p>
          </div>

          {/* RIGHT IMAGE + Resume Button */}
          <div className="flex flex-col items-center">
            <div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full 
              border-4 border-purple-500 overflow-hidden
              shadow-[0_0_80px_rgba(168,85,247,0.6)]"
            >
              <img
                src={abcImg}
                alt="Sujit Malla"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Resume Button below image - only on Home */}
            {showResumeButton && (
              <button
                onClick={openResume}
                className="mt-6 border border-[#7C3AED] text-[#7C3AED] px-8 py-3 rounded-lg font-semibold
                hover:bg-[#7C3AED] hover:text-white transition-all shadow-md"
              >
                View Resume
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
