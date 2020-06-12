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
  reduceCircleOpacity,
  fadeOutLogoNav,
} from "../ui/Helpers";

const Skills = () => {
  let logo = useRef(null);
  let nav = React.createRef(null);
  let frontEndUl = useRef(null);
  let backEndUl = useRef(null);

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
    reduceCircleOpacity();
    let frontEndElements = null;
    let backEndElements = null;
    frontEndElements = document.querySelectorAll(".stagger-front");
    backEndElements = document.querySelectorAll(".stagger-back");
    // timeline for animations of skill sets
    const tlFrontEndElements = new gsap.timeline();
    const tlBackEndElements = new gsap.timeline();
    tlFrontEndElements.to(frontEndElements, {
      opacity: 1,
      delay: 0.7,
      stagger: { each: 0.1, from: "end", ease: Back },
    });

    tlBackEndElements.to(backEndElements, {
      opacity: 1,
      delay: 0.7,
      stagger: { each: 0.1, from: "end", ease: Back },
    });

    fadeOutLogoNav(logo, nav.current);
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
        <div>
          <ul ref={(el) => (frontEndUl = el)} className="skills-page_list">
            <li className="skills-page_list-header stagger-front">Front-end</li>
            <li className="skills-page_list-li stagger-front">React</li>
            <li className="skills-page_list-li stagger-front">
              State management with Redux/Context
            </li>
            <li className="skills-page_list-li stagger-front">
              Javascript ES6 ES7
            </li>
            <li className="skills-page_list-li stagger-front">
              Gsap animation library
            </li>
            <li className="skills-page_list-li stagger-front">Material UI</li>
            <li className="skills-page_list-li stagger-front">Bootstrap</li>
            <li className="skills-page_list-li stagger-front">Materialize</li>
            <li className="skills-page_list-li stagger-front">Web Design</li>
            <li className="skills-page_list-li stagger-front">
              Implementation of UI design patterns
            </li>
          </ul>
        </div>
        <div>
          <ul ref={(el) => (backEndUl = el)} className="skills-page_list">
            <li className="skills-page_list-header stagger-back">Back-end</li>
            <li className="skills-page_list-li stagger-back">Node JS</li>
            <li className="skills-page_list-li stagger-back">
              Real time updates SocketIO
            </li>
            <li className="skills-page_list-li stagger-back">Java</li>
            <li className="skills-page_list-li stagger-back">
              Spring Boot, Spring framework, Hibernate
            </li>
            <li className="skills-page_list-li stagger-back">MySQL Database</li>
            <li className="skills-page_list-li stagger-back">
              MongoDB Database
            </li>
            <li className="skills-page_list-li stagger-back">
              Google cloud firebase
            </li>
            <li className="skills-page_list-li stagger-back">
              OOP patterns and designs
            </li>
            <li className="skills-page_list-li stagger-back">MVC patterns</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
