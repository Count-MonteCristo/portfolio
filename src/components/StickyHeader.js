import React, { useState, useEffect } from "react";
import "./css/stickyHeader.css";
import HamburgerMenu from "./HamburgerMenu";

const StickyHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky-header">
      <div className="header-element">
        <img
          alt="Logo"
          src="/path/to/logo.png"
        />
      </div>
      {windowWidth >= 900 ? (
        <div>
          <ul>
            <li>
              <a
                className="nav-link"
                href="/#Services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="/#Work"
              >
                Work
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="/#About"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="/#Testimonials"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="/#Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <HamburgerMenu onClose={handleMenuToggle} />
      )}
    </nav>
  );
};

export default StickyHeader;
