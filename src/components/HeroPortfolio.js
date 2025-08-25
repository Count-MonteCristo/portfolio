import React, { useState, useEffect } from "react";
import "./css/heroPortfolio.css";
import stripesSVG from "../assets/heroStripes.svg";
import h2StripesSVG from "../assets/h2Stripes.svg";
import projectsData from "./projectsData";

const HeroPortfolio = () => {
  const [totalProjects, setTotalProjects] = useState(0);

  useEffect(() => {
    // Calculate the total number of projects from the projectsData array
    setTotalProjects(projectsData.length);
  }, []);

  return (
    <>
      <div
        id="home"
        className="hero fade-in"
      >
        <div className="container">
          <div className="portfolio-heading">Portfolio</div>
          <div className="portfolio-description">
            <div className="portfolio-text">
              Take a look at how I’ve helped others elevate their digital presence and reach their goals
            </div>
            <div className="portfolio-counter">
              <div className="successful-projects">
                <div className="number">{totalProjects}+</div>
                <div className="label">Successful projects</div>
              </div>
              <img
                src={h2StripesSVG}
                alt="Stripes"
                className="h2Stripes-svg"
              />
              <div className="experience">
                <div className="number">3</div>
                <div className="label">Years of experience</div>
              </div>
            </div>
          </div>
          <div className="hero-cta-button">
            <a href="/#Contact">
              <button className="cta-button-hero">Let's Work Together</button>
            </a>
          </div>
        </div>
      </div>
      <img
        src={stripesSVG}
        alt="Stripes"
        className="heroStripes-svg"
      />
    </>
  );
};

export default HeroPortfolio;
