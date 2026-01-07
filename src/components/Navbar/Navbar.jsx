import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white cursor-pointer">
          mrsonu18
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `font-medium text-white pb-1 transition-all duration-300
                   ${isActive ? "text-cyan-400 border-b-2 border-cyan-400" : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon (optional) */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
};
