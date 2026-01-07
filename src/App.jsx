import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Contact } from "./components/Contacts/Contact";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Work } from "./components/Work/Work";
import { FrontendProjects } from "./components/Work/FrontendProjects";
import { AIMLProjects } from "./components/Work/Aiml";
import { Footer } from "./components/Footer/Footer";

// Error Page
const ErrorPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#050414] text-white">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <a
        href="/"
        className="px-6 py-2 bg-purple-500 rounded-full hover:bg-purple-600 transition"
      >
        Go Home
      </a>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="bg-[#050414] relative min-h-screen">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Navbar always visible */}
        <Navbar />

        <div className="relative z-10">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <div>
                  <About />
                  <Education />
                  <Experience />
                  <Skills />
                  <Work />
                  <Contact />
                  <Footer />
                </div>
              }
            />

            {/* Individual pages for each section */}
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/frontend-projects" element={<FrontendProjects />} />
            <Route path="/aiml-projects" element={<AIMLProjects />} />

            {/* Redirect common aliases to proper routes */}
            <Route path="/work/frontend" element={<Navigate to="/frontend-projects" />} />
            <Route path="/work/aiml" element={<Navigate to="/aiml-projects" />} />

            {/* Catch-all Error Page */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
