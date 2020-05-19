import React, { useState, useEffect, useRef } from "react";
import Close from "../ui/Close";
// import third party
import { Link, useHistory } from "react-router-dom";
import { gsap } from "gsap";

const ProjectSingle = (props) => {
  const [item, setItem] = useState();
  let subTitleRef = useRef(null);
  let titleRef = useRef(null);
  let techStackRef = useRef(null);
  let descriptionRef = useRef(null);
  let imageRef = useRef(null);
  let containerRef = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);
  let closeRef = useRef(null);
  let tl = new gsap.timeline();
  const history = useHistory();

  const changeColor = (link) => {
    link.style.color = item.bgColor;
  };

  const changeColorBack = (link) => {
    link.style.color = "#ffffff";
  };

  const backToProjectsPage = (destination) => (e) => {
    e.preventDefault();
    tl.reverse();
    gsap.to(containerRef, {
      position: "fixed",
      bottom: 0,
      height: "0vh",
      duration: 0.2,
      delay: 2.5,
    });
    setTimeout(() => {
      history.push(destination);
    }, 2700);
  };

  useEffect(() => {
    setItem(props.location.state);
  }, [props.location.state]);

  useEffect(() => {
    if (item !== undefined) {
      tl.addLabel("sameStartHeaders");

      tl.to(
        subTitleRef,
        {
          yPercent: -100,
          duration: 0.4,
          delay: 0.5,
        },
        "sameStartHeaders"
      )
        .to(
          titleRef,
          {
            yPercent: -90,
            duration: 0.4,
            delay: 0.5,
          },
          "sameStartHeaders"
        )
        .to(
          techStackRef,
          {
            yPercent: -90,
            duration: 0.4,
            delay: 0.5,
          },
          "sameStartHeaders"
        )
        .to(descriptionRef, {
          yPercent: -10,
          duration: 0.4,
          opacity: 1,
        })
        .to(imageRef, {
          opacity: 1,
          duration: 0.7,
          xPercent: -10,
        })
        .to(closeRef, {
          opacity: 1,
          duration: 0.7,
        });
    }
  }, [tl, item]);

  return (
    <>
      {item !== undefined && (
        <div
          ref={(el) => (containerRef = el)}
          style={{ backgroundColor: item.bgColor }}
          className="container-fluid singe-project-container"
        >
          <div ref={(el) => (closeRef = el)} className="single-project-close">
            <Close backToProjectsPage={backToProjectsPage("/projects")} />
          </div>
          <div className="single-project-main">
            <div className="single-project-subheader-wrapper">
              <div
                ref={(el) => (subTitleRef = el)}
                className="single-project-subheader"
              >
                {item.titleDescription}
              </div>
            </div>
            <div className="single-project-header-wrapper">
              <div
                ref={(el) => (titleRef = el)}
                className="single-project-header"
              >
                {item.title}
              </div>
            </div>
            <div className="single-project-underheader-wrapper">
              <div
                ref={(el) => (techStackRef = el)}
                className="single-project-underheader"
              >
                {item.techStack.join(", ")}
              </div>
            </div>

            <div
              ref={(el) => (descriptionRef = el)}
              className="single-project-description"
            >
              <p className="single-project-description_title">Overview:</p>
              <p>{item.description}</p>
            </div>
          </div>
          <div
            ref={(el) => (imageRef = el)}
            className="single-project-image-container"
          >
            <img
              style={{ maxWidth: "350px", maxHeight: "350px" }}
              className="single-project-image_img"
              src={item.backgroundImg}
              alt=""
            />
            <div className="single-project-links">
              <div>
                <Link
                  ref={(el) => (link1 = el)}
                  className="single-project-link"
                  to={item.linkWebsite}
                  onMouseEnter={() => changeColor(link1)}
                  onMouseLeave={() => changeColorBack(link1)}
                >
                  Website Live
                </Link>
              </div>
              <div>
                <Link
                  ref={(el) => (link2 = el)}
                  className="single-project-link"
                  to={item.linkCodeFront}
                  onMouseEnter={() => changeColor(link2)}
                  onMouseLeave={() => changeColorBack(link2)}
                >
                  Frontend Code
                </Link>
              </div>
              <div>
                <Link
                  ref={(el) => (link3 = el)}
                  className="single-project-link"
                  to={item.linkCodeBack}
                  onMouseEnter={() => changeColor(link3)}
                  onMouseLeave={() => changeColorBack(link3)}
                >
                  Backend Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectSingle;
