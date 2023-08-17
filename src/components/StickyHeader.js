import React from "react";
import "./css/stickyHeader.css";

const StickyHeader = () => {
  return (
    <nav className="sticky-header">
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
    </nav>
  );
};

export default StickyHeader;
