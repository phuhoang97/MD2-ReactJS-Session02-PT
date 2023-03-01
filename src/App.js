import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./css/bootstrap.css";
import "./css/responsive.css";
import "./css/style.css";

// import React from "react";
// class App extends React.Component {

// Cách chia component theo header, footer, content, ...

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
