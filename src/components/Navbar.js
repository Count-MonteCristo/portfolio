import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "reactstrap";
import "./css/Navbar.css";
import stripesSVG from "../assets/navStripes.svg";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleNavLinkClick = () => {
    // Scrolls to the top of the page when a nav link is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="md"
      id="navbar"
      className={isSticky ? "sticky" : ""}
    >
      <Container className="navbar-container">
        <Link
          to="/"
          className="navbar-brand"
        ></Link>

        <Nav className="navbar-nav">
          <Link
            to="/"
            className="nav-link"
            id="home-link"
            onClick={handleNavLinkClick}
          >
            Home
            <img
              src={stripesSVG}
              alt="Stripes"
              className="stripes-svg"
            />
          </Link>

          <Link
            to="/about"
            className="nav-link"
            id="about-link"
            onClick={handleNavLinkClick}
          >
            About
            <img
              src={stripesSVG}
              alt="Stripes"
              className="stripes-svg"
            />
          </Link>

          <Link
            to="/portfolio"
            className="nav-link"
            id="portfolio-link"
            onClick={handleNavLinkClick}
          >
            Portfolio
            <img
              src={stripesSVG}
              alt="Stripes"
              className="stripes-svg"
            />
          </Link>

          <Link
            to="/contact"
            className="nav-link"
            id="contact-link"
            onClick={handleNavLinkClick}
          >
            Contact
            <img
              src={stripesSVG}
              alt="Stripes"
              className="stripes-svg"
            />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
