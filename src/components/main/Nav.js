import React from "react";
// import third party
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <div className="nav_links">
        <Link
          to="/skills"
          onClick={props.changePageFromAnyPageToSkills}
          className="nav_link"
        >
          skills
        </Link>
      </div>
      <div className="nav_links">
        <Link
          to="/projects"
          onClick={props.changePageFromAnyPageToProjects}
          className="nav_link"
        >
          projects
        </Link>
      </div>
      <div className="nav_links">
        <Link
          to="/about"
          className="nav_link"
          onClick={props.changePageFromAnyPageToAbout}
        >
          about
        </Link>
      </div>
      <div className="nav_links">
        <Link
          to="/contact"
          onClick={props.changePageFromAnyPageToContact}
          className="nav_link"
        >
          contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
