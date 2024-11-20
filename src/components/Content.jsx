import React from "react";
import "./Content.css";

const Content = ({ title }) => {
  return (
    <main className="content">
      <h1>{title}</h1>
    </main>
  );
};

export default Content;
