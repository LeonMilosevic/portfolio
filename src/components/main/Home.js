import React from "react";
// import components
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
