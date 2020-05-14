import React from "react";
// import components
import Project from "./Project";

const Projects = () => {
  return (
    <div className="container">
      <h1 id="projects" className="text-center headers-custom">
        Projects
      </h1>
      <Project
        projectName={
          <a
            rel="noopener noreferrer"
            className="nav-links"
            target="_blank"
            href="http://167.172.178.229/"
          >
            GoTo share a ride
          </a>
        }
        projectDesc={"Connecting people to share a ride"}
        img={require("../../images/poolme-logo1.png")}
        techUsed={
          "React, Node, Javascript, sass, Socket IO, Google geolocation API, material design, Mongo DB"
        }
        linkCodeFront={"https://github.com/LeonMilosevic/poolme-front"}
        linkSite={"http://167.172.178.229/"}
        backendLink={
          <a
            className="project-link"
            rel="noopener noreferrer"
            href="https://github.com/LeonMilosevic/poolme-back"
            target="_blank"
          >
            code backend
          </a>
        }
      >
        <ul className="list-unstyled">
          <div className="row">
            <div className="col-12">
              <h5>
                <strong className="underline">
                  Featuers and about the app
                </strong>
              </h5>
              <p>
                App was designed for mobile usage rather than desktop. The app
                has a real-time chat feature. Users can search and pick a
                location from Google geolocation auto-suggest service. They can
                chose different type of rules they would like other passengers
                to follow, as well as any adittional text they would like to
                share. App also tracks peoples distance travaled, and combines
                it to display how much has the person traveled using this app.
                In order to share a ride or join as a passanger, users need to
                create an account and be logged in.
              </p>
            </div>
          </div>
        </ul>
      </Project>
      <Project
        projectName={
          <a
            rel="noopener noreferrer"
            className="nav-links"
            target="_blank"
            href="https://clothify.online/"
          >
            Clothify ecommerce
          </a>
        }
        projectDesc={"Fullstack ecommerce app"}
        img={
          "https://res.cloudinary.com/clothify/image/upload/v1574208952/facebook-logo_biobli.png"
        }
        techUsed={"React, Node, MongoDB, Express, Bootstrap, Sass"}
        linkCodeFront={"https://github.com/LeonMilosevic/ecommerce-front"}
        backendLink={
          <a
            className="project-link"
            rel="noopener noreferrer"
            href="https://github.com/LeonMilosevic/ecommerce-back"
            target="_blank"
          >
            code back-end
          </a>
        }
        linkSite={"https://clothify.online/"}
      >
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <li>
              <strong className="underline">Authentication</strong>:
            </li>
            <ul>
              <li>email sign in, facebook sign in</li>
              <li>forgot password option</li>
            </ul>
            <li>
              <strong className="underline">User</strong>:
            </li>
            <ul>
              <li>User dashboard</li>
              <li>Purchase history</li>
              <li>Test account: user@email.com, user123</li>
            </ul>
            <li>
              <strong className="underline">Admin</strong>:
            </li>
            <ul>
              <li>Admin Dashboard</li>
              <li>order notification</li>
              <li>Order managment</li>
              <li>Test account: admin@email.com, admin123</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <li>
              <strong className="underline">Products</strong>:
            </li>
            <ul>
              <li>Save favorite item</li>
              <li>Cart checkout</li>
              <li>Related products</li>
              <li>Image zoom</li>
              <li>Filtering</li>
              <li>Products on sale</li>
            </ul>
            <li>
              <strong className="underline">Payments:</strong>
            </li>
            <ul>
              <li>Credit card and paypal payments </li>
              <li>
                Test card: any name, nu: 4111 1111 1111 1111, exp date:higher
                than today{" "}
              </li>
            </ul>
          </div>
        </div>
      </Project>
      <Project
        projectName={
          <a
            rel="noopener noreferrer"
            className="nav-links"
            target="_blank"
            href="https://eeetwell-calories.herokuapp.com/"
          >
            Calorie Calculator
          </a>
        }
        projectDesc={"Heroku app Vanilla JS Calorie calculator"}
        img={require("../../images/eeetwell_logo_mobile.jpg")}
        techUsed={"Vanila JS, sass, material design"}
        linkCodeFront={
          "https://github.com/LeonMilosevic/eeetwell-diet-calculator"
        }
        linkSite={"https://eeetwell-calories.herokuapp.com/"}
      >
        <ul className="list-unstyled">
          <div className="row">
            <div className="col-12">
              <h5>
                <strong className="underline">
                  Featuers and about the app
                </strong>
              </h5>
              <p>
                While I was working in Eeetwell company, a lot of people were
                interested in knowing how much calories they are taking with
                their meal. I have decided to build a calculator app that would
                let them easily check that.
              </p>
            </div>
          </div>
        </ul>
      </Project>
    </div>
  );
};

export default Projects;
