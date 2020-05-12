import { ReactComponent as LogoImg } from "../../images/logo.svg";
import { Link } from "react-router-dom";

import React from "react";

const Logo = () => {
  return (
    <Link to="/">
      <LogoImg />
    </Link>
  );
};

export default Logo;
