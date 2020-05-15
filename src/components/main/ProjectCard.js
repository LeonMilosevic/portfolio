import React, { useRef } from "react";
// import third party
import { Link } from "react-router-dom";
import { gsap, Back } from "gsap";
// import helpers
import { useCombinedRefs } from "../ui/Helpers";

const ProjectCard = React.forwardRef((props, ref) => {
  let projectCardRef = useRef(null);
  let cardCoverRef = useRef(null);
  let headerRef = useRef(null);
  let infoRef = useRef(null);
  let detailsRef = useRef(null);
  let websiteRef = useRef(null);
  // use combined ref to forward it and for inner use as well
  const combinedRef = useCombinedRefs(ref, projectCardRef);
  let tl = new gsap.timeline();
  let tlInfo = new gsap.timeline();
  let tlHeader = new gsap.timeline();
  let tlLinks = new gsap.timeline();

  const hoverEffects = (e) => {
    tl.play();
    tl.to(cardCoverRef, {
      webkitClipPath: "polygon(0px 100%, 0px 15%, 100% 20%, 100% 100%)",
      ease: Back,
      duration: 0.3,
    });
    tlHeader.play();
    tlHeader.to(headerRef, { yPercent: -200, duration: 0.3 });
    tlInfo.play();
    tlInfo.to(infoRef, { yPercent: -300, duration: 0.3 });
    tlLinks.play();
    tlLinks.to(detailsRef, { opacity: 1, duration: 0.3 });
    tlLinks.to(websiteRef, { opacity: 1, duration: 0.3 });
  };

  const hoverEffectsLeave = (e) => {
    tl.reverse();
    tlHeader.reverse();
    tlInfo.reverse();
    tlLinks.reverse();
  };

  return (
    <div
      style={{ backgroundImage: `url("${props.backgroundImage}")` }}
      ref={combinedRef}
      className="projects-page-gallery_card"
      onMouseEnter={hoverEffects}
      onMouseLeave={hoverEffectsLeave}
    >
      <span
        ref={(el) => (headerRef = el)}
        className="projects-page-gallery_card__header"
      >
        {props.header}
      </span>
      <span
        ref={(el) => (infoRef = el)}
        className="projects-page-gallery_card__info"
      >
        {props.info}
      </span>
      <div
        style={{ backgroundColor: props.bgColor }}
        ref={(el) => (cardCoverRef = el)}
        className="card-cover"
      ></div>
      <span
        ref={(el) => (detailsRef = el)}
        className="project-card--btn project-card--btn_1"
      >
        <Link className="project-card--btn__link" to="/">
          View Details
        </Link>
      </span>
      <span
        ref={(el) => (websiteRef = el)}
        className="project-card--btn project-card--btn_2"
      >
        <Link className="project-card--btn__link" to="/">
          View Website
        </Link>
      </span>
    </div>
  );
});

export default ProjectCard;
