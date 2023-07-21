import React from "react";
import "./css/home.css";
import Typewriter from "typewriter-effect";
import stripesSVG from "../assets/heroStripes.svg";
import companyLogos from "../assets/companies.png";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <div className="hero">
        <div className="hero-text">
          <h2 className="hero-subtitle">Hello, my name is Luis.</h2>
          <h1 className="hero-heading">
            <Typewriter
              options={{
                autoStart: true, // Automatically starts typing on mount
                loop: true, // Loops the typewriter animation
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("I am a Software Engineer")
                  .pauseFor(1500)
                  .deleteChars(18)
                  .typeString("n SEO Editor")
                  .pauseFor(1500)
                  .start();
              }}
            />
          </h1>
          <p className="hero-description">
            A one-stop shop for all your website needs.
          </p>
          <a
            href="/contact"
            className="hero-button"
          >
            Contact Me
          </a>
        </div>
        <div className="hero-graphic">{/* Add graphic here */}</div>
      </div>
      <img
        src={stripesSVG}
        alt="Stripes"
        className="heroStripes-svg"
      />

      {/* Trusted by section */}
      <div className="trusted-section">
        <div className="container">
          <h2 className="trustedSection-title">Trusted by</h2>
          <div className="row">
            <div className="company-logos">
              <img
                src={companyLogos}
                alt="Company Logos"
                className="company-logos"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
