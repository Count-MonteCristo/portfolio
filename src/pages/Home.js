import React from "react";
import "./css/home.css";
import Typewriter from "typewriter-effect";
import stripesSVG from "../assets/heroStripes.svg";
import companyLogos from "../assets/companies.png";
import TabbedInterface from "../components/TabbedInterface";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <div className="hero">
        <div className="container">
          <div className="hero-text">
            <h2 className="hero-subtitle">Hi, my name is Luis!</h2>
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
              An all-in-one solution for your website needs.
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

      {/* Services section */}
      <div className="services-section">
        <div className="container">
          <h2 className="servicesSection-title">What I do</h2>
          <p className="servicesSection-p">
            I'm a passionate Software Engineer and SEO Editor dedicated to
            crafting exceptional online experiences. With a fusion of creativity
            and technical expertise, I offer a range of services that empower
            businesses to thrive in the digital realm. Here's what I can do for
            you:
          </p>
          <div className="tabs">
            <TabbedInterface />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
