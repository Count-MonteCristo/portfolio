import React from "react";
import StickyHeader from "../components/StickyHeader";
import HeroPortfolio from "../components/HeroPortfolio";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <>
      {/* Sticky header */}
      <StickyHeader />

      {/* Hero section */}
      <HeroPortfolio />

      {/* Content section */}
      <div
        className="background-color-section"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Projects section */}
        <Projects />
        <div
        className="background-color-section"
        style={{ backgroundColor: "#1C1C1C" }}
        >
        {/* Footer section */}
        <Footer />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
