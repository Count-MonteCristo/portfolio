import React from "react";
import "./css/about.css";
import h2StripesSVG from "../assets/h2Stripes.svg";
import COLogo from "../assets/co.png";
import PDLogo from "../assets/pd.png";
import TPLogo from "../assets/tp.png";
import AMSALogo from "../assets/a&m.png";

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
                I help craft websites that engage users and connect brands with
                their audiences in a meaningful way.
                <br />
                <br />
                In my free time, you'll find me outdoors braving the hot Texas
                weather, going to concerts of all music genres, and spending
                time with my loved ones.
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
            <img
              src={AMSALogo}
              alt="Texas A&M-SA logo"
              className="company-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
