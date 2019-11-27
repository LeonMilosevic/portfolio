import React from "react";

const Project = props => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1 className="project-header">
            <div className={props.coverHeader}></div>
            {props.projectName}
          </h1>
          <div className="card">
            <div className="card-wrapper">
              <a className="nav-links" target="_blank" href={props.linkSite}>
                <img
                  className="rounded-image-custom"
                  src={props.img}
                  alt="display"
                />
              </a>

              <div className="card-body">
                <h4 className="card-title text-center">{props.projectDesc}</h4>
                <h5 className="text-center project-tech">
                  Technology used: {props.techUsed}
                </h5>
                <div className="project-links">
                  <a
                    className="project-link"
                    rel="noopener noreferrer"
                    href={props.linkCodeFront}
                    target="_blank"
                  >
                    code front-end
                  </a>
                  {props.backendLink}
                  <a
                    className="project-link"
                    rel="noopener noreferrer"
                    href={props.linkSite}
                    target="_blank"
                  >
                    view Website
                  </a>
                </div>
                <ul className="list-unstyled">{props.children}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
