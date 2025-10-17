import React from "react";
import LandingSection from "./sections/LandingSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactMeSection from "./sections/ContactMeSection";

const Main: React.FC = () => {
  return (
    <main>
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
    </main>
  );
};

export default Main;
