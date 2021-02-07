import React, { useRef, useEffect } from "react";
import Dots from "../ui/Dots";
import Nav from "./Nav";
import Logo from "../ui/Logo";
// imoprt helpers
import { changePageExitTransition } from "../ui/Helpers";
// import third party
import { gsap, Back } from "gsap";
import { useHistory } from "react-router-dom";

const LandingPage = (props) => {
  let headerText = useRef(null);
  let subHeaderText = useRef(null);
  let logo = useRef(null);
  let nav = React.createRef(null);
  const history = useHistory();

  const changeFromHomeToAny = (destination) => (e) => {
    e.preventDefault();
    // pass parametars from home page elements to animate
    changePageExitTransition(logo, nav.current, headerText, subHeaderText);
    setTimeout(() => {
      history.push(destination);
    }, 1600);
  };

  useEffect(() => {
    let navTl = new gsap.timeline();
    let tl = new gsap.timeline();

    tl.to(headerText, {
      opacity: 1,
      delay: 0.3,
      duration: 0.5,
      ease: Back,
      yPercent: 20,
    });

    tl.to(subHeaderText, {
      opacity: 1,
      duration: 0.3,
      ease: Back,
      xPercent: -70,
    });

    navTl.to(nav.current, { opacity: 1, duration: 1, delay: 1.6, ease: Back });
    tl.to(logo, { opacity: 1, duration: 1, delay: 0.5, ease: Back });
  }, [nav]);

  return (
    <div className="container-fluid">
      <div ref={(el) => (logo = el)} className="logo">
        <Logo />
      </div>
      <div>
        <Dots
          extraClassCirlcle1={"landing-page_circle__circle-scale_1"}
          extraClassCirlcle2={"landing-page_circle__circle-scale_2"}
          extraClassCirlcle3={"landing-page_circle__circle-scale_3"}
        />
      </div>
      <div ref={(el) => (headerText = el)} className="landing-page_header-text">
        leon milosevic
      </div>
      <div
        ref={(el) => (subHeaderText = el)}
        className="landing-page_subheader-text"
      >
        data scientist
      </div>
      <Nav
        ref={nav}
        changePageFromAnyPageToSkills={changeFromHomeToAny("/skills")}
        changePageFromAnyPageToProjects={changeFromHomeToAny("/projects")}
        changePageFromAnyPageToAbout={changeFromHomeToAny("/about")}
        changePageFromAnyPageToContact={changeFromHomeToAny("/contact")}
      />
    </div>
  );
};

export default LandingPage;
