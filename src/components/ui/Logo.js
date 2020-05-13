import { ReactComponent as LogoImg } from "../../images/logo.svg";
import { Link } from "react-router-dom";

import React from "react";

const Logo = (props) => {
  return (
    <Link onClick={props.changePageFromAnyPageToHome} to="/">
      <LogoImg />
    </Link>
  );
};

export default Logo;
