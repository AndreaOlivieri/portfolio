import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/_shared_/Alert";
import Main from "components/main/Main";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Header />
        <Main />
        <Footer />
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
};

export default App;
