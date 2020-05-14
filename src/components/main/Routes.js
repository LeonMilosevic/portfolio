import React from "react";
import { Switch, Route } from "react-router-dom";
// import component
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import ProjectsOld from "./ProjectsOld";
import Skills from "./Skills";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/projectsold" component={ProjectsOld} />
      <Route exact path="/skills" component={Skills} />
    </Switch>
  );
};

export default Routes;
