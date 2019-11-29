import React from "react";

const Contact = () => {
  return (
    <div className="container mb-5">
      <h1 id="contact" className="text-center headers-custom mt-5 my-4">
        Contact me
      </h1>
      <div className="row text-center">
        <div className="col-12 contact-wrapper">
          <div className="contact-wrapper-cover"></div>
          <div className="contact-wrapper-cover-bottom"></div>
          <h6>Leon Milosevic</h6>
          <h6>email: leonn.milosevic@gmail.com</h6>
          <h6>phone: +37060754357</h6>
          <div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="github-styled"
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
