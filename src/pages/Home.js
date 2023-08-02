import React from "react";
import "./css/home.css";
import StickyHeader from "../components/StickyHeader";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* Sticky header */}
      <StickyHeader />

      {/* Hero section */}
      <Hero />

      {/* Content section */}
      <div
        className="background-color-section"
        style={{ backgroundColor: "#0E192A" }}
      >
        {/* Services section */}
        <Services />

        {/* Work section */}
        <Work />

        {/* About section */}
        <About />

        {/* Testimonials section */}
        <Testimonials />

        {/* Contact section */}
        <Contact />

        {/* Footer section */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
