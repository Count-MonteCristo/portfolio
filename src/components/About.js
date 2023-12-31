import React from "react";
import "./css/about.css";
import h2StripesSVG from "../assets/h2Stripes.svg";
import COLogo from "../assets/co.png";
import KPMGLogo from "../assets/KPMG_logo.png";
import PDLogo from "../assets/pd.png";
import ShipLogo from "../assets/ship-logo.svg";
import AMSALogo from "../assets/a&m.png";
import ProfilePicture from "../assets/Profile.jpg";

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
                A Software Engineer and SEO Specialist working remotely from San
                Antonio, Texas
              </div>
              <div className="about-section-content-1-card-description">
                I help craft websites that engage users and connect brands with
                their audiences in a meaningful way.
                <br />
                <br />
                In my free time, you'll find me at the gym, going to concerts of
                all music genres, and spending time with my loved ones.
              </div>
            </div>
            <img
              src={ProfilePicture}
              alt="profile"
              className="profile"
            />
          </div>
          <div className="about-section-cta-text">
            <h3>Trusted by</h3>
          </div>
          <div className="company-logos">
            <img
              src={KPMGLogo}
              alt="KPMG logo"
              className="company-logo"
            />
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
              src={AMSALogo}
              alt="Texas A&M-SA logo"
              className="company-logo"
            />
            <img
              src={ShipLogo}
              alt="The Path logo"
              className="company-logo"
            />
          </div>
          <div className="about-section-cta-text-2">
            <h3>... and many more.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
