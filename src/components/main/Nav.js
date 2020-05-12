import React from "react";
// import third party
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_links">
        <Link className="nav_link" to="/skills">
          skills
        </Link>
      </div>
      <div className="nav_links">
        <Link className="nav_link" to="/projects">
          projects
        </Link>
      </div>
      <div className="nav_links">
        <Link className="nav_link" to="/about">
          about
        </Link>
      </div>
      <div className="nav_links">
        <Link className="nav_link" to="/contact">
          contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
