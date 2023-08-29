import React from "react";
import "./css/work.css";
import h2StripesSVG from "../assets/h2Stripes.svg";
import ParkerDeweyHero from "../assets/ParkerDeweyHero.jpg";
import CleanOriginHero from "../assets/CleanOriginHero.jpg";
import PeerPlaceHero from "../assets/peer-place-hero.jpg";

const Work = () => {
  return (
    <>
      <div
        id="Work"
        className="work-section"
      >
        <div className="work-section-heading">
          <img
            src={h2StripesSVG}
            alt="Stripes"
            className="h2Stripes-svg"
          />
          <h2>Work</h2>
        </div>
        <p className="content-section-text">
          Below are some of the diverse and innovative projects where I've had
          the privilege to combine design, development, and SEO expertise to
          deliver outstanding digital experiences.
        </p>
        <div className="work-section-content">
          <div className="work-section-content-1">
            <div className="work-section-content-1-card">
              <div className="work-section-content-1-card-title">
                Responsive Website Revamp
              </div>
              <div className="work-section-content-1-card-description">
                Enhanced Parker Dewey's website through meticulous coding and
                engaging copy, providing a seamless experience for users.
              </div>
              <div className="work-section-content-1-card-tags">
                <div className="dev-tag">DEVELOPMENT</div>•
                <div className="seo-tag">SEO</div>
              </div>
            </div>
            <a
              href="https://www.parkerdewey.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ParkerDeweyHero}
                alt="Parker Dewey Website"
                className="project-image"
              />
            </a>
          </div>

          <div className="work-section-content-2">
            <a
              href="https://www.cleanorigin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={CleanOriginHero}
                alt="Parker Dewey Website"
                className="project-image"
              />
            </a>
            <div className="work-section-content-2-card">
              <div className="work-section-content-2-card-title">
                Increased Online Visibility
              </div>
              <div className="work-section-content-2-card-description">
                Continuously optimize Clean Origin's website for search engines,
                elevating its visibility and driving increased organic traffic.
              </div>
              <div className="work-section-content-2-card-tags">
                <div className="seo-tag">SEO</div>•
                <div className="design-tag">DESIGN</div>
              </div>
            </div>
          </div>

          <div className="work-section-content-1">
            <div className="work-section-content-1-card">
              <div className="work-section-content-1-card-title">
                Inaugural Non-Profit Website
              </div>
              <div className="work-section-content-1-card-description">
                Collaborated with A Peer Place to establish a meaningful online
                presence and effectively communicate their mission and
                initiatives.
              </div>
              <div className="work-section-content-1-card-tags">
                <div className="design-tag">DESIGN</div>•
                <div className="dev-tag">DEVELOPMENT</div>•
                <div className="seo-tag">SEO</div>
              </div>
            </div>
            <a
              href="https://www.apeerplace.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={PeerPlaceHero}
                alt="Peer Place Website"
                className="project-image"
              />
            </a>
          </div>

          <div className="work-section-cta">
            <div className="work-section-cta-text">
              <h3>
                Like what you've seen so far? Check out my other noteworthy
                projects!
              </h3>
            </div>
            <div className="work-section-cta-button">
              <a href="/portfolio">
                <button className="cta-button">Explore Portfolio</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
