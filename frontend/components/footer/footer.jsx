import React from "react";

const Footer = () => {
  return (
    <div className="footer-box">
      <ul className="footer-icons">
        <li>
          <a href="https://github.com/nykiway">
            <i className="fab fa-github-alt" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nicolewiehe/">
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://angel.co/u/nicole-wiehe">
            <i className="fab fa-angellist" />
          </a>
        </li>
      </ul>
      <div className="footer-links">
        <p className="footer-notification">
          Clone of Headspace. Created by Nicole Wiehe. August 2020.
        </p>
      </div>
    </div>
  );
}

export default Footer;
