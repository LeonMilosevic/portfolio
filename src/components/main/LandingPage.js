import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";

const LandingPage = () => {
  return (
    <div className="container-fluid">
      <div className="logo">
        <Logo />
      </div>
      <div className="landing-page_circle_holder"></div>
    </div>
  );
};

export default LandingPage;
