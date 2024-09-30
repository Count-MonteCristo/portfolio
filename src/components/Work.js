import React from "react";
import "./css/work.css";
import h2StripesSVG from "../assets/h2Stripes.svg";
import ParkerDeweyHero from "../assets/ParkerDeweyHero.jpg";
import ThePathHero from "../assets/project-images/tp-website.jpg";
import ShipHero from "../assets/project-images/ship.jpg";
import VamosHero from "../assets/project-images/vamos.png";

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
          <h2>Featured Work</h2>
        </div>
        <p className="content-section-text">
          Here are some exciting projects where I've blended design, development, and marketing 
          to create amazing digital experiences.
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
                <div className="design-tag">DESIGN</div>•
                <div className="dev-tag">DEVELOPMENT</div>•
                <div className="marketing-tag">MARKETING</div>
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
              href="https://thepathwitcher.blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ThePathHero}
                alt="Parker Dewey Website"
                className="project-image"
              />
            </a>
            <div className="work-section-content-2-card">
              <div className="work-section-content-2-card-title">
                Increased Online Visibility
              </div>
              <div className="work-section-content-2-card-description">
                Redesigned and optimized The Path/パス website for search engines, elevating
                its visibility and driving increased organic traffic by over 400% since 2022.
              </div>
              <div className="work-section-content-2-card-tags">
              <div className="design-tag">DESIGN</div>•
                <div className="dev-tag">DEVELOPMENT</div>•
                <div className="marketing-tag">MARKETING</div>
              </div>
            </div>
          </div>

          <div className="work-section-content-1">
            <div className="work-section-content-1-card">
              <div className="work-section-content-1-card-title">
                E-Commerce Digital Hub
              </div>
              <div className="work-section-content-1-card-description">
                Collaborated with Ship.com to create a visually appealing and
                functional platform to enhance user engagement and drive
                business growth.
              </div>
              <div className="work-section-content-1-card-tags">
                <div className="design-tag">DESIGN</div>•
                <div className="dev-tag">DEVELOPMENT</div>•
                <div className="marketing-tag">MARKETING</div>
              </div>
            </div>
            <a
              href="https://www.ship.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ShipHero}
                alt="Shi[] Website"
                className="project-image"
              />
            </a>
          </div>

          <div className="work-section-content-2">
            <a
              href="https://codethedream.org/vamos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={VamosHero}
                alt="Vamos Website"
                className="project-image"
              />
            </a>
            <div className="work-section-content-2-card">
              <div className="work-section-content-2-card-title">
                Web and Mobile App Development
              </div>
              <div className="work-section-content-2-card-description">
                Continously enhance user features and overall design for a tool designed specifically for farmworker outreach.
              </div>
              <div className="work-section-content-2-card-tags">
              <div className="design-tag">DESIGN</div>•
                <div className="dev-tag">DEVELOPMENT</div>•
                <div className="marketing-tag">MARKETING</div>
              </div>
            </div>
          </div>

          <div className="work-section-cta">
            <div className="work-section-cta-text">
              <h3>
                Like what you've seen so far? Check out my other projects!
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
