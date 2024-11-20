import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";

const Menu = ({ list }) => {
  return (
    <ul className="menu">
      {list.map((item, index) => (
        <MenuItem key={index} text={item.text} url={item.url} />
      ))}
    </ul>
  );
};

export default Menu;
