import React from "react";
import "./css/footer.css";

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
          <div className="footer-right">
            <p>Designed & Built by Luis Navarro</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
