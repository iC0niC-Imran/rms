import React, { Component } from "react";
import Body from "./BodyComponent/Body";
import Footer from "./FooterComponent/Footer";
import Header from "./HeaderComponent/Header";

class MainComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
export default MainComponent;
