import React, { useEffect } from "react";
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
  useEffect(() => {
    const handleScroll = () => {
      const elementsToFadeIn = document.querySelectorAll(
        ".services-section-heading, .content-section-text, .services-section-card-design, .services-section-card-development, .services-section-card-seo, .work-section-heading, .work-section-content, .work-section-cta, .about-section-heading, .about-section-content, .about-section-cta-text, .company-logos, .testimonials-section-heading, .testimonial-item, .contact-section-heading, .contact-section-text, .social-buttons"
      );

      elementsToFadeIn.forEach((element) => {
        const contentPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (contentPosition < screenHeight * 0.8) {
          element.classList.add("fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
