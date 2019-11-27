import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";

const LandingPage = () => {
  return (
    <div id="top" className="container-fluid landing-page">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav-custom-fixed">
        <ul className="list-unstyled">
          <li className="list-unstyled-item-custom item-top">
            <div className="cover-div-top"></div>
            <a className="nav-links" href="#top">
              top
            </a>
          </li>
          <li className="list-unstyled-item-custom item-project">
            <div className="cover-div-project"></div>
            <a className="nav-links" href="#projects">
              projects
            </a>
          </li>
          <li className="list-unstyled-item-custom item-about">
            <div className="cover-div-about"></div>
            <a className="nav-links" href="#about">
              about me
            </a>
          </li>
          <li className="list-unstyled-item-custom item-contact">
            <div className="cover-div-contact"></div>
            <a className="nav-links" href="#contact">
              contact
            </a>
          </li>
        </ul>
      </div>
      <div className="custom-text">
        Hello, I'm <span style={{ color: "#14f7ee" }}>Leon</span>, <hr />
        web developer
        <hr />
        Nice to meet you!
      </div>
      <div className="image">
        <img
          className="display-image"
          src={require("../../images/background-2.png")}
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingPage;
