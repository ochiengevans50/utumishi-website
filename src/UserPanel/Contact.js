import React, { Component } from "react";
import "./Contact.css";

export class Contact extends Component {
  render() {
    return (
      <div className="contact-content">
        <h4 className="Contact-header"> Our Contact</h4>
        <hr/>
        <h5 className="contact-email">Email:</h5>
        <p>info@kenyapolice.go.ke </p>

        <h5>Hotline Number:</h5>
        <p>999/112/911</p>
      </div>
    );
  }
}

export default Contact;
