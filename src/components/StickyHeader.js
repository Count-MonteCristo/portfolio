import React from "react";
import "./css/stickyHeader.css";

const StickyHeader = () => {
  return (
    <nav className="sticky-header">
      <ul>
        <li>
          <a href="/#Services">Services</a>
        </li>
        <li>
          <a href="/#Work">Work</a>
        </li>
        <li>
          <a href="/#About">About</a>
        </li>
        <li>
          <a href="/#Testimonials">Testimonials</a>
        </li>
        <li>
          <a href="/#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default StickyHeader;
