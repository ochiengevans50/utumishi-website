import { Component } from "react";
import Home from "./Home";

import Information from "./Information";
import About from "./About";
import Contact from "./Contact";

import { Router } from "@reach/router";
import "./Mainpage.css";
import Footer from "./Footer";

export class Mainpage extends Component {
  render() {
    return (
      <div className="mainpage">
        <Home />
        <div style={{ overflowY: "scroll" }}>
          <Router>
            <Information path="/" />
            <About path="/About" />
            <Contact path="/Contact" />
          </Router>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Mainpage;
