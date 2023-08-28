import React, { useState } from "react";
import "./css/hamburgerMenu.css";

const HamburgerMenu = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className="hamburger-menu">
      {isOpen && (
        <div
          className="overlay"
          onClick={handleLinkClick}
        ></div>
      )}
      <div
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <ul className="menu-items">
          <li>
            <a
              className="nav-link"
              href="/#Services"
              onClick={handleLinkClick}
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="/#Work"
              onClick={handleLinkClick}
            >
              Work
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="/#About"
              onClick={handleLinkClick}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="/#Testimonials"
              onClick={handleLinkClick}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="/#Contact"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="/portfolio"
              onClick={handleLinkClick}
            >
              Portfolio
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
