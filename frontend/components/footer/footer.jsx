import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-box">
        <ul className="footer-icons">
          <li>
            <i className="fab fa-github-alt" />
          </li>
          <li>
            <i className="fab fa-linkedin" />
          </li>
          <li>
            <i className="fab fa-angellist" />
          </li>
        </ul>
        <div className="footer-links">
          <p className="footer-notification">Clone of Headspace. Created by Nicole Wiehe. August 2020.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
