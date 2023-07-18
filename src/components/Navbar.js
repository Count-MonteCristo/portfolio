// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "reactstrap";
import "./css/Navbar.css"; // Import the custom CSS file

const NavBar = () => {
  return (
    <Navbar
      color="light"
      light
      expand="md"
    >
      <Container className="navbar-container">
        <Link
          to="/"
          className="navbar-brand"
        >
          Your Website Logo
        </Link>
        <Nav className="navbar-nav">
          <Link
            to="/"
            className="nav-link"
            id="home-link"
          >
            {" "}
            {/* Add ID for the Home link */}
            Home
          </Link>
          <Link
            to="/portfolio"
            className="nav-link"
            id="portfolio-link"
          >
            {" "}
            {/* Add ID for the Portfolio link */}
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            id="contact-link"
          >
            {" "}
            {/* Add ID for the Contact link */}
            Contact
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
