import React, { Component } from "react";
import "./Home.css";
import {Link } from "@reach/router" 
export class Home extends Component {
  render() {
    return (
      <div className="home-page">
        {/* <img src={require('./logo1.png')} /> */}

        <div className="top-content">
          <img
            src={require("./logo1.png").default}
            className="top-logo"
            alt="avator"
          />
          <header className="home-header">UTUMISHI KWA WOTE </header>
          <img
            src={require("./logo2.png").default}
            className="top-logo2"
            alt="avator"
          />
        </div>

        <nav className="homepage-navbar">
          <ul className="navbar-list">
            <Link to ="/">
            <span>
              <li>HOME</li>{" "}
            </span>
            </Link>
            <Link  to ="/About">          
            <span>
              <li>ABOUT US</li>
            </span>
            </Link>
            <Link to ="/Contact">
              <span>
              <li>CONTACTS</li>
            </span>
            </Link>

            <span>
              <li>GET STARTED </li>
            </span>
          </ul>

          {/* <aside>
            <button>GET STARTED </button>
          </aside> */}
        </nav>
      </div>
    );
  }
}

export default Home;
