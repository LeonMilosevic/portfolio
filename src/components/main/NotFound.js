import React, { useRef, useEffect } from "react";
import Nav from "./Nav";
import Logo from "../ui/Logo";
import Dots from "../ui/Dots";
// import helpers
import { useHistory } from "react-router-dom";
import {
  changePageExitTransition,
  reduceCircleOpacity,
  fadeOutLogoNav,
} from "../ui/Helpers";

const NotFound = () => {
  let nav = React.createRef(null);
  let logo = useRef(null);
  let notFoundRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    reduceCircleOpacity();

    fadeOutLogoNav(logo, nav.current);
  }, [nav]);

  const changeFromNotFoundToAny = (destination) => (e) => {
    e.preventDefault();
    // pass parametars from home page elements to animate
    changePageExitTransition(logo, nav.current, notFoundRef);
    setTimeout(() => {
      history.push(destination);
    }, 1600);
  };
  return (
    <div className="container my-3">
      <Dots
        extraClassCirlcle1={"landing-page_circle__circle-scale_1"}
        extraClassCirlcle2={"landing-page_circle__circle-scale_2"}
        extraClassCirlcle3={"landing-page_circle__circle-scale_3"}
      />
      <div ref={(el) => (logo = el)} className="logo">
        <Logo changePageFromAnyPageToHome={changeFromNotFoundToAny("/")} />
      </div>
      <Nav
        ref={nav}
        changePageFromAnyPageToSkills={changeFromNotFoundToAny("/skills")}
        changePageFromAnyPageToProjects={changeFromNotFoundToAny("/projects")}
        changePageFromAnyPageToAbout={changeFromNotFoundToAny("/about")}
        changePageFromAnyPageToContact={changeFromNotFoundToAny("/contact")}
      />
      <div className="not-found" ref={(el) => (notFoundRef = el)}>
        <h1>404. Page not found</h1>
      </div>
    </div>
  );
};

export default NotFound;
