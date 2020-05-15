import React, { useEffect, useRef } from "react";
// import third party
import { gsap, Back } from "gsap";
import { useHistory } from "react-router-dom";
// import components
import Logo from "../ui/Logo";
import Dots from "../ui/Dots";
import Nav from "../main/Nav";
// imoprt helpers
import { changePageExitTransition } from "../ui/Helpers";
import ProjectCard from "./ProjectCard";
// import images
import clothifyImg from "../../images/clothify-img.png";
import poolmeImg from "../../images/poolme-img.png";
import domasImg from "../../images/domas-img.png";
import eeetwellImg from "../../images/eeetwell-img.png";

const Projects = () => {
  let logo = useRef(null);
  let galleryRef = useRef(null);
  let projectCard1 = React.createRef();
  let projectCard2 = React.createRef();
  let projectCard3 = React.createRef();
  let projectCard4 = React.createRef();
  let nav = React.createRef(null);
  let header = useRef(null);
  const history = useHistory();

  const changeFromProjectsToAny = (destination) => (e) => {
    e.preventDefault();
    // pass parametars from home page elements to animate
    changePageExitTransition(
      logo,
      nav.current,
      header,
      galleryRef
      // to be filled
    );
    setTimeout(() => {
      history.push(destination);
    }, 1600);
  };

  useEffect(() => {
    const circle1 = document.querySelector(".loader_circle__circle_1");
    const circle2 = document.querySelector(".loader_circle__circle_2");
    const circle3 = document.querySelector(".loader_circle__circle_3");

    const tl = new gsap.timeline();

    gsap.to(circle1, { opacity: 0.15, duration: 0.9, ease: Back });
    gsap.to(circle2, { opacity: 0.15, duration: 0.9, ease: Back });
    gsap.to(circle3, { opacity: 0.15, duration: 0.9, ease: Back });

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

    gsap.to(logo, { opacity: 1, duration: 0.8, ease: Back, delay: 2.2 });
    gsap.to(nav.current, { opacity: 1, duration: 0.8, ease: Back, delay: 2.2 });
  }, [projectCard1, projectCard2, projectCard3, projectCard4, nav]);
  return (
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
        <ProjectCard
          header={"E-commerce"}
          info={"React, Node"}
          backgroundImage={clothifyImg}
          ref={projectCard1}
          bgColor={"#289FFD"}
        />
        <ProjectCard
          header={"Car-share"}
          info={"React, Node"}
          backgroundImage={poolmeImg}
          ref={projectCard2}
          bgColor={"#12B890"}
        />
        <ProjectCard
          header={"E-commerce"}
          info={"React, Java"}
          backgroundImage={domasImg}
          ref={projectCard3}
          bgColor={"#C529D4"}
        />
        <ProjectCard
          header={"Calculator"}
          info={"Javascript"}
          backgroundImage={eeetwellImg}
          ref={projectCard4}
          bgColor={"#c2ab16"}
        />
      </div>
    </div>
  );
};

export default Projects;
