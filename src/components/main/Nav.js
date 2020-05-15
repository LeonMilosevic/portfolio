import React from "react";
// import third party
import { NavLink } from "react-router-dom";

const Nav = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="nav">
      <div className="nav_links">
        <NavLink
          onFocus={() => "this.blur()"}
          to="/skills"
          onClick={props.changePageFromAnyPageToSkills}
          activeClassName="selected"
          className="nav_link"
        >
          skills
        </NavLink>
      </div>
      <div className="nav_links">
        <NavLink
          onFocus={() => "this.blur()"}
          to="/projects"
          onClick={props.changePageFromAnyPageToProjects}
          activeClassName="selected"
          className="nav_link"
        >
          projects
        </NavLink>
      </div>
      <div className="nav_links">
        <NavLink
          onFocus={() => "this.blur()"}
          to="/about"
          className="nav_link"
          activeClassName="selected"
          onClick={props.changePageFromAnyPageToAbout}
        >
          about
        </NavLink>
      </div>
      <div className="nav_links">
        <NavLink
          onFocus={() => "this.blur()"}
          to="/contact"
          onClick={props.changePageFromAnyPageToContact}
          activeClassName="selected"
          className="nav_link"
        >
          contact
        </NavLink>
      </div>
    </div>
  );
});

export default Nav;
