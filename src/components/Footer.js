import React from "react";
import "./css/footer.css";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>
              © {new Date().getFullYear()} Luis Navarro. All rights reserved.
            </p>
          </div>
          <div className="footer-center">
            <img
              src={Logo}
              alt="logo"
              className="logo"
            />
          </div>
          <div className="footer-right">
            <p>Designed & built by Luis Navarro</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
