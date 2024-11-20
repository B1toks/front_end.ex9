import React from "react";
import Menu from "./Menu";
import "./SideBar.css";

const SideBar = ({ title }) => {
  const menuItems = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "External Link", url: "https://example.com" },
    { text: "No URL" },
  ];

  return (
    <aside className="sidebar">
      <h1>{title}</h1>
      <Menu list={menuItems} />
    </aside>
  );
};

export default SideBar;
