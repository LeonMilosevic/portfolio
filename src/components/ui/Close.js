import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Close = (props) => {
  return (
    <Link
      to="/projects"
      className="single-project-close_icon"
      onClick={props.backToProjectsPage}
    >
      <AiOutlineCloseCircle />
    </Link>
  );
};

export default Close;
