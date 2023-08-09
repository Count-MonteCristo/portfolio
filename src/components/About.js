import React from "react";
import "./css/about.css";
import h2StripesSVG from "../assets/h2Stripes.svg";
import COLogo from "../assets/co.png";
import PDLogo from "../assets/pd.png";
import TPLogo from "../assets/tp.png";

const About = () => {
  return (
    <>
      <div
        id="About"
        className="about-section"
      >
        <div className="about-section-heading">
          <img
            src={h2StripesSVG}
            alt="Stripes"
            className="h2Stripes-svg"
          />
          <h2>About</h2>
        </div>
        <p className="content-section-text">A quick glimpse into who I am.</p>

        <div className="about-section-content">
          <div className="about-section-content-1">
            <div className="about-section-content-1-card">
              <div className="about-section-content-1-card-title">
                A Software Engineer and SEO Editor working remotely from San
                Antonio, Texas
              </div>
              <div className="about-section-content-1-card-description">
                What sets me apart is my dedication to staying updated with the
                latest trends and technologies in the ever-evolving digital
                landscape. I always seek opportunities to learn and implement
                innovative solutions that deliver a competitive edge to my
                clients.
              </div>
            </div>
            <img />
          </div>
          <div className="about-section-cta-text">
            <h3>Trusted by</h3>
          </div>
          <div className="company-logos">
            <img
              src={COLogo}
              alt="Clean Origin logo"
              className="company-logo"
            />
            <img
              src={PDLogo}
              alt="Parker Dewey logo"
              className="company-logo"
            />
            <img
              src={TPLogo}
              alt="The Path logo"
              className="company-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
