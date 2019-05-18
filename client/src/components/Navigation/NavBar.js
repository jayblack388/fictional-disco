import React from "react";
import MediaQuery from "react-responsive";
import { ButtonLink } from "../Link";

import logo from "../../assets/images/head.png";

const MobileNav = () => {
  return (
    <React.Fragment>
      <ButtonLink to="/" className="brand-btn">
        <img alt="logo" src={logo} />
      </ButtonLink>
    </React.Fragment>
  );
};

const LargeNav = () => {
  return (
    <React.Fragment>
      <ButtonLink to="/" className="brand-btn">
        <img alt="logo" src={logo} />
      </ButtonLink>
      <ButtonLink to="/" className="component-link">
        Components
      </ButtonLink>
    </React.Fragment>
  );
};

class NavBar extends React.Component {
  render() {
    return (
      <nav className="jb-navbar">
        <MediaQuery maxWidth={768}>
          <MobileNav />
        </MediaQuery>
        <MediaQuery minWidth={769}>
          <LargeNav />
        </MediaQuery>
      </nav>
    );
  }
}

export default NavBar;
