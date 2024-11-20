import React from "react";
import Menu from "./Menu";
import "./Footer.css";

const Footer = ({ title }) => {
  const footerMenuItems = [
    { text: "Privacy Policy", url: "/privacy" },
    { text: "Terms of Service", url: "/terms" },
    { text: "Contact Us", url: "/contact" },
  ];

  return (
    <footer className="footer">
      <h1>{title}</h1>
      <Menu list={footerMenuItems} />
    </footer>
  );
};

export default Footer;
