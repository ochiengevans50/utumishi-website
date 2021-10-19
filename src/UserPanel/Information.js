import { Component } from "react";
import "./information.css";

export class Information extends Component {
  render() {
    return (
      <div className="information">
        <div className="informative">
          <div className="slides ">
            <img
              src={require("./slide3.jpg").default}
              className="slide-1"
              alt="avator"
            />
            <img
              src={require("./slide4.jpg").default}
              className="slide-2"
              alt="avator"
            />
          </div>
          <div className="informative-content">
            <h4 className="heading1"> Vision & Mission</h4>
            <p className="vision">VISION:</p>
            <p>
              {" "}
              To be a world class police service, with a people-friendly,
              responsive and professional workforce.
            </p>
            <p className="vision">MISSION:</p>
            <p>
              {" "}
              We are committed to providing quality police service to meet the
              expectations of our customers; by upholding the rule of law,
              creating and maintaining strong partnerships for a conducive
              social, economic and political development of Kenya.
            </p>
          </div>
        </div>
        <div className="bottom- content">
             <h5 className="bottom-H"> BE INFORMED!   </h5>
          <p className="bottom-p">Every citizen has equal oppotunity and rights in Kenya, thats why we as the police are here to offer the best services.
             Dont let anyone destory the peace and well being of the society, get started with utumishi and Report any unusual incident at any nearest police station anywhere you are! </p>
        </div>
      </div>
    );
  }
}
export default Information;
