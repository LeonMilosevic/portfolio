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
  let nav = React.createRef(null);
  let frontEndUl = useRef(null);
  let backEndUl = useRef(null);
  let frontEndEl = useRef(null);
  let backEndEl = useRef(null);
  let reactEl = useRef(null);
  let javascriptEl = useRef(null);
  let gsapEl = useRef(null);
  let materialuiEl = useRef(null);
  let bootstrapEl = useRef(null);
  let materializeEl = useRef(null);
  let sassEl = useRef(null);
  let nodeEl = useRef(null);
  let javaEl = useRef(null);
  let springEl = useRef(null);
  let mysqlEl = useRef(null);
  let mongoEl = useRef(null);

  const history = useHistory();

  const changeFromSkillsToAny = (destination) => (e) => {
    e.preventDefault();
    // pass parametars from home page elements to animate
    changePageExitTransition(logo, nav.current, frontEndUl, backEndUl);
    setTimeout(() => {
      history.push(destination);
    }, 1600);
  };

  useEffect(() => {
    const circle1 = document.querySelector(".loader_circle__circle_1");
    const circle2 = document.querySelector(".loader_circle__circle_2");
    const circle3 = document.querySelector(".loader_circle__circle_3");

    gsap.to(circle1, { opacity: 0.15, duration: 0.9, ease: Back });
    gsap.to(circle2, { opacity: 0.15, duration: 0.9, ease: Back });
    gsap.to(circle3, { opacity: 0.15, duration: 0.9, ease: Back });

    // timeline for animations of skill sets
    const tlFrontEndElements = new gsap.timeline();
    const tlBackEndElements = new gsap.timeline();
    // push front end element down
    tlFrontEndElements.to(frontEndEl, {
      opacity: 1,
      duration: 0.2,
      ease: Back,
      delay: 0.7,
      yPercent: 80,
    });
    // pushing frontend elements up
    tlFrontEndElements.to(sassEl, {
      opacity: 1,
      duration: 0.1,
      delay: 0.4,
      ease: Back,
      yPercent: -20,
    });
    tlFrontEndElements.to(materializeEl, {
      opacity: 1,
      duration: 0.1,
      ease: Back,
      yPercent: -20,
    });
    tlFrontEndElements.to(bootstrapEl, {
      opacity: 1,
      duration: 0.1,
      ease: Back,
      yPercent: -20,
    });
    tlFrontEndElements.to(materialuiEl, {
      opacity: 1,
      duration: 0.1,
      ease: Back,
      yPercent: -20,
    });
    tlFrontEndElements.to(gsapEl, {
      opacity: 1,
      duration: 0.1,
      ease: Back,
      yPercent: -20,
    });
    tlFrontEndElements.to(javascriptEl, {
      opacity: 1,
      duration: 0.1,
      ease: Back,
      yPercent: -20,
    });
    tlFrontEndElements.to(reactEl, {
      opacity: 1,
      duration: 0.1,
      ease: Back,
      yPercent: -20,
    });
    tlBackEndElements.to(backEndEl, {
      opacity: 1,
      duration: 0.2,
      ease: Back,
      delay: 0.7,
      yPercent: 80,
    });
    // pushing backend elements up
    tlBackEndElements.to(mongoEl, {
      opacity: 1,
      duration: 0.1,
      delay: 0.4,
      ease: Back,
      yPercent: -20,
    });
    tlBackEndElements.to(mysqlEl, {
      opacity: 1,
      duration: 0.1,
      ease: Back,
      yPercent: -20,
    });
    tlBackEndElements.to(springEl, {
      opacity: 1,
      duration: 0.1,
      ease: Back,
      yPercent: -20,
    });
    tlBackEndElements.to(javaEl, {
      opacity: 1,
      duration: 0.1,
      ease: Back,
      yPercent: -20,
    });
    tlBackEndElements.to(nodeEl, {
      opacity: 1,
      duration: 0.1,
      ease: Back,
      yPercent: -20,
    });

    gsap.to(logo, { opacity: 1, duration: 0.8, ease: Back, delay: 2 });
    gsap.to(nav.current, { opacity: 1, duration: 0.8, ease: Back, delay: 2 });
  }, [nav]);
  return (
    <div className="container my-3">
      <Dots
        extraClassCirlcle1={"landing-page_circle__circle-scale_1"}
        extraClassCirlcle2={"landing-page_circle__circle-scale_2"}
        extraClassCirlcle3={"landing-page_circle__circle-scale_3"}
      />
      <Nav
        ref={nav}
        changePageFromAnyPageToAbout={changeFromSkillsToAny("/about")}
        changePageFromAnyPageToProjects={changeFromSkillsToAny("/projects")}
        changePageFromAnyPageToContact={changeFromSkillsToAny("/contact")}
      />
      <div ref={(el) => (logo = el)} className="logo">
        <Logo changePageFromAnyPageToHome={changeFromSkillsToAny("/")} />
      </div>
      <div className="skills-page-text_wrapper">
        <div className="skills-page-text-left_table">
          <ul ref={(el) => (frontEndUl = el)} className="skills-page_list">
            <li
              ref={(el) => (frontEndEl = el)}
              className="skills-page_list-header"
            >
              Front-end
            </li>
            <li ref={(el) => (reactEl = el)} className="skills-page_list-li">
              React
            </li>
            <li
              ref={(el) => (javascriptEl = el)}
              className="skills-page_list-li"
            >
              Javascript
            </li>
            <li ref={(el) => (gsapEl = el)} className="skills-page_list-li">
              Gsap animation library
            </li>
            <li
              ref={(el) => (materialuiEl = el)}
              className="skills-page_list-li"
            >
              Material UI
            </li>
            <li
              ref={(el) => (bootstrapEl = el)}
              className="skills-page_list-li"
            >
              Bootstrap
            </li>
            <li
              ref={(el) => (materializeEl = el)}
              className="skills-page_list-li"
            >
              Materialize
            </li>
            <li ref={(el) => (sassEl = el)} className="skills-page_list-li">
              html5/css3/Sass
            </li>
          </ul>
        </div>
        <div className="skills-page-text-right_table">
          <ul ref={(el) => (backEndUl = el)} className="skills-page_list">
            <li
              ref={(el) => (backEndEl = el)}
              className="skills-page_list-header"
            >
              Back-end
            </li>
            <li ref={(el) => (nodeEl = el)} className="skills-page_list-li">
              Node JS
            </li>
            <li ref={(el) => (javaEl = el)} className="skills-page_list-li">
              Java
            </li>
            <li ref={(el) => (springEl = el)} className="skills-page_list-li">
              Spring Boot, Spring framework, Hibernate
            </li>
            <li ref={(el) => (mysqlEl = el)} className="skills-page_list-li">
              MySQL Database
            </li>
            <li ref={(el) => (mongoEl = el)} className="skills-page_list-li">
              MongoDB Database
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
