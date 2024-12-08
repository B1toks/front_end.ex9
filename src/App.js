import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import ProductCatalog from "./components/ProductCatalog";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header title="Header" />
      <div className="main">
        <SideBar title="SideBar" />
        <div className="content">
          <Content title="Content" />
          <ProductCatalog />
          <Cart />
        </div>
      </div>
      <Footer title="Footer" />
    </div>
  );
};

export default App;
