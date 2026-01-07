import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#050414] border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* LEFT - BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white">mrsonu18</h2>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Frontend Developer focused on building modern, responsive,
              and user-friendly web applications.
            </p>
          </div>

          {/* CENTER - QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-cyan-400">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
              <li><a href="#work" className="hover:text-cyan-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>

          {/* RIGHT - SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Connect
            </h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cyan-400">GitHub</a>
              <a href="#" className="hover:text-cyan-400">LinkedIn</a>
              <a href="#" className="hover:text-cyan-400">Instagram</a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} mrsonu18. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
