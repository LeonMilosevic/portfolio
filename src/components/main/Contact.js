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

const Contact = () => {
  let logo = useRef(null);
  let header = useRef(null);
  let name = useRef(null);
  let email = useRef(null);
  let phone = useRef(null);
  let github = useRef(null);
  const history = useHistory();

  const changeFromContactToAny = (destination) => (e) => {
    e.preventDefault();
    // pass parametars from home page elements to animate
    changePageExitTransition(
      logo,
      document.querySelector(".nav"),
      header,
      name,
      email,
      phone,
      github
    );
    setTimeout(() => {
      history.push(destination);
    }, 1600);
  };

  useEffect(() => {
    const circle1 = document.querySelector(".loader_circle__circle_1");
    const circle2 = document.querySelector(".loader_circle__circle_2");
    const circle3 = document.querySelector(".loader_circle__circle_3");
    const nav = document.querySelector(".nav");

    const tl = new gsap.timeline();

    gsap.to(circle1, { opacity: 0.15, duration: 0.9, ease: Back });
    gsap.to(circle2, { opacity: 0.15, duration: 0.9, ease: Back });
    gsap.to(circle3, { opacity: 0.15, duration: 0.9, ease: Back });

    tl.to(header, {
      opacity: 1,
      duration: 0.2,
      ease: Back,
      delay: 0.7,
      yPercent: 80,
    });
    tl.to(name, {
      opacity: 1,
      duration: 0.2,
      ease: Back,
      yPercent: -20,
    });
    tl.to(email, {
      opacity: 1,
      duration: 0.2,
      ease: Back,
      yPercent: -20,
    });
    tl.to(phone, {
      opacity: 1,
      duration: 0.2,
      ease: Back,
      yPercent: -20,
    });
    tl.to(github, {
      opacity: 1,
      duration: 0.2,
      ease: Back,
      yPercent: -20,
    });
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
      <div ref={(el) => (logo = el)} className="logo">
        <Logo changePageFromAnyPageToHome={changeFromContactToAny("/")} />
      </div>
      <Nav
        changePageFromAnyPageToSkills={changeFromContactToAny("/skills")}
        changePageFromAnyPageToProjects={changeFromContactToAny("/projects")}
        changePageFromAnyPageToAbout={changeFromContactToAny("/about")}
      />
      <div className="contact-page_wrapper">
        <div
          ref={(el) => (header = el)}
          className="contact-page_conatct-header"
        >
          Contact me
        </div>
        <div className="contact-page_contact-info_wrapper">
          <div
            className="contact-page_contact-info_name"
            ref={(el) => (name = el)}
          >
            Leon Milosevic
          </div>
          <div
            className="contact-page_contact-info_email"
            ref={(el) => (email = el)}
          >
            email: leonn.milosevic@gmail.com
          </div>
          <div
            className="contact-page_contact-info_phone"
            ref={(el) => (phone = el)}
          >
            phone: +37060754357
          </div>
          <div>
            <a
              ref={(el) => (github = el)}
              rel="noopener noreferrer"
              target="_blank"
              className="contact-page_contact-info_github"
              href="https://github.com/LeonMilosevic?tab=repositories"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
