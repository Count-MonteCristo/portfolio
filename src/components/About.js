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
          <h2>Get To Know Me</h2>
        </div>

        <div className="about-section-content">
          <div className="about-section-content-1">
            <div className="about-section-content-1-card">
              <div className="about-section-content-1-card-description">
                Based out of San Antonio, Texas, I'm a software engineer and digital marketer on a mission to create digital experiences 
                that captivate users and forge genuine connections between brands and their audiences.
                <br/>
                <br/>
                I believe that great work comes from a balanced life, so I always make time for hobbies that inspire me and keep my energy high.
                <br/>
                <br/>
                That is why when I'm not coding or brainstorming, I am all about lifting weights, playing rugby, jamming to live music of every kind, travelling all over, and 
                cherishing moments with friends and family.
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
