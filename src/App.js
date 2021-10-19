
import React, { Component } from 'react';
import './App.css';
import Mainpage from "./UserPanel/Mainpage";
// import Information from './UserPanel/Information';

export class App extends Component {
render() {
    return (
      <div className="home-page">
        <Mainpage/>
        {/* <Information/> */}
      </div>
    )
  }
}

export default App


