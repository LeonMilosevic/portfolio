import React, { useRef, useEffect } from "react";
import Dots from "../ui/Dots";
import Nav from "./Nav";
import Logo from "../ui/Logo";
// import third party
import { gsap, Back } from "gsap";

const LandingPage = () => {
  let headerText = useRef(null);
  let subHeaderText = useRef(null);
  let logo = useRef(null);

  useEffect(() => {
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

    tl.to(logo, { opacity: 1, duration: 1, delay: 1, ease: Back });
  }, []);
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
        software developer
      </div>
      <Nav />
    </div>
  );
};

export default LandingPage;
