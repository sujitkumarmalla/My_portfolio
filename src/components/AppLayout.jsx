// AppLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

export const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#050414]">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1 relative z-10 mt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
