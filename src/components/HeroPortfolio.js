import React from "react";
import "./css/heroPortfolio.css";
import stripesSVG from "../assets/heroStripes.svg";

const HeroPortfolio = () => {
  return (
    <>
      <div
        id="home"
        className="hero"
      >
        <div className="container"></div>
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
