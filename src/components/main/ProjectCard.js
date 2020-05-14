import React from "react";

const ProjectCard = React.forwardRef((props, ref) => {
  return (
    <div
      style={{ backgroundImage: `url("${props.backgroundImage}")` }}
      ref={ref}
      className="projects-page-gallery_card"
    >
      <span className="projects-page-gallery_card__header">{props.header}</span>
      <span className="projects-page-gallery_card__info">{props.info}</span>
    </div>
  );
});

export default ProjectCard;
