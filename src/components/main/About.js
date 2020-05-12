import React from "react";
import Logo from "../ui/Logo";

const About = () => {
  return (
    <div className="container my-3">
      <div className="logo">
        <Logo />
      </div>
      <h1 id="about" className="text-center headers-custom mt-5">
        About
      </h1>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center about-me-col">
          <div className="about-me-img-wrapper">
            <img
              className="about-me-img"
              src={require("../../images/artboard-4.png")}
              alt="hello"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center mt-5">
          <h6 className="text-center">About me</h6>
          <p>
            I am a web developer who loves coding, enjoys learning and
            exploring. My main goal is to work on products that are changing the
            world or making your everyday easier. I have competitive nature, I’m
            always seeking for more, I enjoy overcoming challenges. I use React,
            Node.js with Express, and MongoDB NoSQL. Javascript, SASS, Bootstrap
            and Material Design, but I’m intrested in Data science and Machine
            learning with Python. In my free time I like working out and
            occasionally playing video games such as HearthStone. I grew up on
            Blizzard. Thank you and I am looking forward to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
