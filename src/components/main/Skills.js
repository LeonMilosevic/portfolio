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
            <li className="skills-page_list-header stagger-front">Languages</li>
            <li className="skills-page_list-li stagger-front">Python</li>
            <li className="skills-page_list-li stagger-front">SQL</li>
            <li className="skills-page_list-li stagger-front">
              Java
            </li>
            <li className="skills-page_list-li stagger-front">
              Javascript
            </li>
          </ul>
        </div>
        <div>
          <ul ref={(el) => (backEndUl = el)} className="skills-page_list">
            <li className="skills-page_list-header stagger-back">Skills</li>
            <li className="skills-page_list-li stagger-back">Data Exploration</li>
            <li className="skills-page_list-li stagger-back">
              Data Wrangling
            </li>
            <li className="skills-page_list-li stagger-back">Scraping</li>
            <li className="skills-page_list-li stagger-back">Building APIs</li>
            <li className="skills-page_list-li stagger-back">Feature Engineering</li>
            <li className="skills-page_list-li stagger-back">Modeling</li>
            <li className="skills-page_list-li stagger-back">Object Oriented Programming</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
