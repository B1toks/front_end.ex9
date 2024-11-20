import React from "react";
import "./SideBar.css";

const SideBar = ({ title }) => {
  return (
    <aside className="sidebar">
      <h1>{title}</h1>
    </aside>
  );
};

export default SideBar;
