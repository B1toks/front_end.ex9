import React from "react";
import "./Logo.css";

const Logo = ({ logoSrc }) => {
  return (
    <a href="/" className="logo">
      <img src={logoSrc} alt="Logo" />
    </a>
  );
};

export default Logo;
