import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header title="Header" />
      <div className="main">
        <SideBar title="SideBar" />
        <Content title="Content" />
      </div>
      <Footer title="Footer" />
    </div>
  );
};

export default App;
