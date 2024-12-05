import React from "react";
import "./css/about.css";
import h2StripesSVG from "../assets/h2Stripes.svg";
import COLogo from "../assets/co.png";
import KPMGLogo from "../assets/KPMG_logo.png";
import PDLogo from "../assets/pd.png";
import ShipLogo from "../assets/ship-logo.png";
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
          <h2>Who I Am</h2>
        </div>

        <div className="about-section-content">
          <div className="about-section-content-1">
            <div className="about-section-content-1-card">
              <div className="about-section-content-1-card-description">
                A San Antonio digital creator hustling to turn digital dreams into reality.
                <br/>
                <br/>
                By day, I'm crafting solutions that help businesses grow. By night, I'm playing rugby, jamming to live music, or exploring the world, proving that a killer career and an epic life aren't mutually exclusive.
                <br/>
                <br/>
                Whether I'm designing a website that tells a brand's story or creating a marketing campaign that cuts through the noise, I bring the same energy I bring to the rugby field - 
                <br/>
                <br/>
                100% commitment, zero BS.
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
              alt="Ship.com logo"
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
