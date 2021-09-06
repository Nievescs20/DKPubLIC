import React from "react";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./Routes";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Drawer />
      <Routes />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
