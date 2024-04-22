import React from "react";
import "./header.css";
import logo from "../../assets/DominosLogo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo dominos" />
    </div>
  );
};

export default Header;
