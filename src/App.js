import React from "react";
import "./App.css";
// import components
import LandingPage from "./components/main/LandingPage";
import Projects from "./components/main/Projects";
import About from "./components/main/About";
import Contact from "./components/main/Contact";

const App = () => (
  <div>
    <LandingPage />
    <Projects />
    <About />
    <Contact />
  </div>
);

export default App;
