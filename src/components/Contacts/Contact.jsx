import React, { useRef, useState } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

export const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Thank you for messaging me 😊 I will contact you soon!");
      setLoading(false);
      formRef.current.reset();
    }, 1200);
  };

  return (
    <section className="min-h-screen bg-[#050414] text-white px-6 py-24">
      
      {/* PAGE HEADING */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          <span className="text-white">Contact </span>
          <span className="text-purple-400">Me</span>
        </h1>
        <p className="mt-4 text-gray-400">
          Let’s connect and build something amazing together
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-7xl font-extrabold">
            <span className="text-white">mr </span>
            <span className="text-purple-400">sonu</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-md">
            Let’s build something amazing together.
          </p>

          <div className="flex gap-5 mt-8 justify-center md:justify-start">
            <a href="https://wa.me/qr/SHD5K3SL3IWEP1" target="_blank" rel="noreferrer"
              className="p-4 bg-white/5 rounded-full hover:bg-green-500/20">
              <FaWhatsapp className="text-2xl text-green-400" />
            </a>
            <a href="https://www.linkedin.com/in/sujit-kumar-malla-b83248294" target="_blank" rel="noreferrer"
              className="p-4 bg-white/5 rounded-full hover:bg-blue-500/20">
              <FaLinkedin className="text-2xl text-blue-400" />
            </a>
            <a href="https://github.com/sujitkumarmalla" target="_blank" rel="noreferrer"
              className="p-4 bg-white/5 rounded-full hover:bg-purple-500/20">
              <FaGithub className="text-2xl text-purple-400" />
            </a>
            <a href="mailto:sujitmalla000@gmail.com"
              className="p-4 bg-white/5 rounded-full hover:bg-cyan-500/20">
              <FaEnvelope className="text-2xl text-cyan-400" />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-semibold mb-6 text-center">
            Send Me a Message
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <input
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10"
            />
            <textarea
              rows="4"
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-3 py-3 rounded-full text-lg font-medium transition
                ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600"}`}
            >
              {loading ? "Sending..." : <>Send Message <FaPaperPlane /></>}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
