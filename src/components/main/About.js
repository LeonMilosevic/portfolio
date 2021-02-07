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

const About = () => {
  let logo = useRef(null);
  let textHeader = useRef(null);
  let text = useRef(null);
  let image = useRef(null);
  let nav = React.createRef(null);
  const history = useHistory();

  const changeFromAboutToAny = (destination) => (e) => {
    e.preventDefault();
    // pass parametars from home page elements to animate
    changePageExitTransition(logo, nav.current, textHeader, text, image);
    setTimeout(() => {
      history.push(destination);
    }, 1600);
  };

  useEffect(() => {
    reduceCircleOpacity();

    const tl = new gsap.timeline();

    tl.to(textHeader, {
      opacity: 1,
      duration: 0.5,
      ease: Back,
      delay: 0.7,
      yPercent: 80,
    });
    tl.to(text, {
      opacity: 1,
      duration: 0.5,
      ease: Back,
      yPercent: -60,
    });
    tl.to(image, {
      opacity: 1,
      duration: 0.5,
      ease: Back,
      xPercent: 50,
    });
    fadeOutLogoNav(logo, nav.current);
  }, [nav]);
  return (
    <div className="container my-3">
      <Nav
        ref={nav}
        changePageFromAnyPageToSkills={changeFromAboutToAny("/skills")}
        changePageFromAnyPageToProjects={changeFromAboutToAny("/projects")}
        changePageFromAnyPageToContact={changeFromAboutToAny("/contact")}
      />
      <Dots
        extraClassCirlcle1={"landing-page_circle__circle-scale_1"}
        extraClassCirlcle2={"landing-page_circle__circle-scale_2"}
        extraClassCirlcle3={"landing-page_circle__circle-scale_3"}
      />
      <div ref={(el) => (logo = el)} className="logo">
        <Logo changePageFromAnyPageToHome={changeFromAboutToAny("/")} />
      </div>
      <div className="about-page-text-image_wrapper">
        <div ref={(el) => (image = el)} className="about-page-img_wrapper">
          <img
            className="about-page-img_img"
            src={require("../../images/artboard-4.png")}
            alt="personalImg"
          />
        </div>
        <div className="about-page_text-wrapper">
          <h6
            ref={(el) => (textHeader = el)}
            className="about-page_text-header"
          >
            About me
          </h6>
          <p className="about-page_text-text" ref={(el) => (text = el)}>
            I am a data science enthusiast who loves exploring data, finding patterns and
            helping businesses succeed. My main goal is to work on projects that are interesting
            and helping users in any way. I have competitive nature, I’m always
            seeking for more, I enjoy overcoming challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
