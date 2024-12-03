import React from "react";
import Logo from "./Logo";
import DateTime from "./DateTime";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <header className="header">
      <Logo logoSrc="/assets/logo.png" />
      <h1>{title}</h1>
      <DateTime />
    </header>
  );
};

export default Header;
