import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Header />
        <main>
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
        </main>
        <Footer />
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
};

export default App;
