// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components / Pages
import { AppLayout } from "./components/AppLayout";
import { About } from "./components/About/About";
import { Contact } from "./components/Contacts/Contact";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Work } from "./components/Work/Work";
import { FrontendProjects } from "./components/Work/FrontendProjects";
import { AIMLProjects } from "./components/Work/Aiml";
import { ErrorPage } from "./components/errorpage/ErrorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* All pages wrapped in AppLayout */}
        <Route path="/" element={<AppLayout />}>
          {/* Home page with all sections */}
          <Route
            index
            element={
              <>
                <About />
                <Education />
                <Experience />
                <Skills />
                <Work />
                <Contact />
              </>
            }
          />

          {/* Individual pages */}
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="frontend-projects" element={<FrontendProjects />} />
          <Route path="aiml-projects" element={<AIMLProjects />} />

          {/* Redirect old work routes */}
          <Route path="work/frontend" element={<Navigate to="/frontend-projects" />} />
          <Route path="work/aiml" element={<Navigate to="/aiml-projects" />} />

          {/* Catch-all error page */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
