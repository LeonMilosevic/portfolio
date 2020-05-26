import React, { useEffect, useRef } from "react";
// import third party
import { gsap, Back } from "gsap";
import { useHistory } from "react-router-dom";
// import components
import Logo from "../ui/Logo";
import Dots from "../ui/Dots";
import Nav from "../main/Nav";
// imoprt helpers
import {
  changePageExitTransition,
  fadeOutElements,
  reduceCircleOpacity,
  fadeOutLogoNav,
} from "../ui/Helpers";
import { projectsApi } from "../data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  let logo = useRef(null);
  let galleryRef = useRef(null);
  let projectCard1 = React.createRef();
  let projectCard2 = React.createRef();
  let projectCard3 = React.createRef();
  let projectCard4 = React.createRef();
  let nav = React.createRef(null);
  let header = useRef(null);
  let exitDiv = useRef(null);
  const history = useHistory();

  const changeFromProjectsToAny = (destination) => (e) => {
    e.preventDefault();
    // pass parametars from home page elements to animate
    changePageExitTransition(logo, nav.current, header, galleryRef);
    setTimeout(() => {
      history.push(destination);
    }, 1600);
  };

  const changeFromProjectsToSingleProject = (destination, project) => (e) => {
    e.preventDefault();
    fadeOutElements(logo, nav.current, header, galleryRef);
    // play fade in block animation
    let tl = new gsap.timeline();
    exitDiv.style.backgroundColor = project.bgColor;
    tl.to(exitDiv, {
      top: 0,
      height: "100vh",
      position: "fixed",
      transformOrigin: "50% 50%",
      duration: 0.2,
      autoRound: false,
      ease: gsap.Power1,
      delay: 0.5,
    });
    setTimeout(() => {
      history.push({
        pathname: destination,
        state: project,
      });
    }, 1600);
  };

  useEffect(() => {
    console.log("hello project");
    reduceCircleOpacity();
    const tl = new gsap.timeline();

    tl.to(header, {
      opacity: 1,
      duration: 0.5,
      ease: Back,
      delay: 0.7,
      yPercent: 100,
    });
    tl.to(projectCard1.current, {
      opacity: 1,
      duration: 0.12,
      yPercent: -50,
      ease: Back,
      delay: 0.4,
    });
    tl.to(projectCard2.current, {
      opacity: 1,
      duration: 0.12,
      yPercent: -50,
      ease: Back,
    });
    tl.to(projectCard3.current, {
      opacity: 1,
      duration: 0.12,
      yPercent: -50,
      ease: Back,
    });
    tl.to(projectCard4.current, {
      opacity: 1,
      duration: 0.12,
      yPercent: -50,
      ease: Back,
    });

    fadeOutLogoNav(logo, nav.current);
  }, [projectCard1, projectCard2, projectCard3, projectCard4, nav]);
  return (
    <>
      <div className="container my-3">
        <Nav
          ref={nav}
          changePageFromAnyPageToSkills={changeFromProjectsToAny("/skills")}
          changePageFromAnyPageToAbout={changeFromProjectsToAny("/about")}
          changePageFromAnyPageToContact={changeFromProjectsToAny("/contact")}
        />
        <Dots
          extraClassCirlcle1={"landing-page_circle__circle-scale_1"}
          extraClassCirlcle2={"landing-page_circle__circle-scale_2"}
          extraClassCirlcle3={"landing-page_circle__circle-scale_3"}
        />
        <div ref={(el) => (logo = el)} className="logo">
          <Logo changePageFromAnyPageToHome={changeFromProjectsToAny("/")} />
        </div>
        <div ref={(el) => (header = el)} className="projects-page-header">
          Projects
        </div>
        <div ref={(el) => (galleryRef = el)} className="projects-page-gallery">
          {projectsApi.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              titleDescription={project.titleDescription}
              backgroundImage={project.cardImg}
              bgColor={project.bgColor}
              onClickFunction={changeFromProjectsToSingleProject(
                `/project/${project.id}`,
                project
              )}
              // pass project to link
              projectId={project.id}
              projectForward={project}
              // done
              linkWebsite={project.linkWebsite}
              ref={
                project.id === 0
                  ? projectCard1
                  : project.id === 1
                  ? projectCard2
                  : project.id === 2
                  ? projectCard3
                  : projectCard4
              }
            />
          ))}
        </div>
      </div>
      <div ref={(el) => (exitDiv = el)} className="exit-div"></div>
    </>
  );
};

export default Projects;
