import React from "react";
import Logo from "../../assets/logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      <h1>Nirbhi</h1>
    </div>
  );
};

export default Header;
