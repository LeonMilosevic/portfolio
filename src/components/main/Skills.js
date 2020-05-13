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

const Skills = () => {
  let logo = useRef(null);
  useEffect(() => {
    const circle1 = document.querySelector(".loader_circle__circle_1");
    const circle2 = document.querySelector(".loader_circle__circle_2");
    const circle3 = document.querySelector(".loader_circle__circle_3");
    const nav = document.querySelector(".nav");

    gsap.to(circle1, { opacity: 0.15, duration: 0.9, ease: Back });
    gsap.to(circle2, { opacity: 0.15, duration: 0.9, ease: Back });
    gsap.to(circle3, { opacity: 0.15, duration: 0.9, ease: Back });

    gsap.to(logo, { opacity: 1, duration: 0.8, ease: Back, delay: 2 });
    gsap.to(nav, { opacity: 1, duration: 0.8, ease: Back, delay: 2 });
  }, []);
  return (
    <div className="container my-3">
      <Dots
        extraClassCirlcle1={"landing-page_circle__circle-scale_1"}
        extraClassCirlcle2={"landing-page_circle__circle-scale_2"}
        extraClassCirlcle3={"landing-page_circle__circle-scale_3"}
      />
      <Nav
        changePageFromAnyPageToSkills={""}
        changePageFromAnyPageToProjects={""}
        changePageFromAnyPageToContact={""}
      />
      <div ref={(el) => (logo = el)} className="logo">
        <Logo changePageFromAnyPageToHome={""} />
      </div>
      <div className="skills-page-text_wrapper">
        <div className="skills-page-text-left_table">
          <ul>
            <li>Front-end</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Gsap animation library</li>
            <li>Material UI</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>html5/css3</li>
          </ul>
        </div>
        <div className="skills-page-text-right_table">
          <ul>
            <li>Back-end</li>
            <li>Node JS</li>
            <li>Java</li>
            <li>OOP concept</li>
            <li>Spring Boot, Spring framework, Hibernate</li>
            <li>MySQL Database</li>
            <li>MongoDB Database</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
