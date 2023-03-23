import React from "react";

import "./Header.scss";

import Logo from "../../images/logos/LogoColor.png";

type HeaderProps = {
  showScreenshots?: boolean
  cta?: React.ReactElement
}

const Header = () => {
    return (
        <div className="header">
          <img className="logo" src={Logo} />
          <a className="login" href={'https://web.kotobaten.app'}>
            Login
          </a>
        </div>
    );
};

export default Header;
