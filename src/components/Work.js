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
          <h2>Projects That Speak for Themselves</h2>
        </div>
        <p className="content-section-text">
          Here are some exciting projects where I've blended design, development, and marketing 
          to create amazing digital experiences.
        </p>
        <div className="work-section-content">
          <div className="work-section-content-1">
            <div className="work-section-content-1-card">
              <div className="work-section-content-1-card-title">
                Total Website Makeover
              </div>
              <div className="work-section-content-1-card-description">
                Turned Parker Dewey's website from bland to grand. New design, smarter tech, and a marketing plan that got people talking.
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
                Traffic Explosion
              </div>
              <div className="work-section-content-2-card-description">
                Rebuilt The Path/パス website from scratch. The result? Their web traffic jumped by 400% in less than a year.
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
                SaaS Platform Development
              </div>
              <div className="work-section-content-1-card-description">
              Partnered with Ship.com to design a powerful SaaS platform that streamlines workflows and supercharges business productivity.
              </div>
              <div className="work-section-content-1-card-tags">
                <div className="design-tag">DESIGN</div>•
                <div className="dev-tag">DEVELOPMENT</div>
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
                Tech with a Purpose
              </div>
              <div className="work-section-content-2-card-description">
                Actively contribute to a digital tool to support farmworkers. Because great technology isn't just about cool features - it's about making a real difference.
              </div>
              <div className="work-section-content-2-card-tags">
                <div className="dev-tag">DEVELOPMENT</div>
                </div>
            </div>
          </div>

          <div className="work-section-cta">
            <div className="work-section-cta-text">
              <h3>
              Liking what you see? Take a look at some of my other projects!
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
