import React from "react";
import { Switch, Route } from "react-router-dom";
// import component
import Home from "../main/Home";
import About from "../main/About";
import Contact from "../main/Contact";
import Projects from "../main/Projects";
import ProjectsOld from "../main/ProjectsOld";
import Skills from "../main/Skills";
import ProjectSingle from "../main/ProjectSingle";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/project/:id" component={ProjectSingle} />
      <Route exact path="/projectsold" component={ProjectsOld} />
      <Route exact path="/skills" component={Skills} />
    </Switch>
  );
};

export default Routes;
