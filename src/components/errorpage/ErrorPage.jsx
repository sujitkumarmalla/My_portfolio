import React from "react";

// Error Page
export const ErrorPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#050414] text-white">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4 text-purple-500 ">404</h1>
      <p className="text-xl mb-6 ">Page Not Found</p>
      <a
        href="/"
        className="px-6 py-2 bg-purple-500 rounded-full hover:bg-purple-600 transition"
      >
        Go Home
      </a>
    </div>
  </div>
);
