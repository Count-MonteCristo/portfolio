import React from "react";
import "./css/home.css";
import Typewriter from "typewriter-effect";
import stripesSVG from "../assets/heroStripes.svg";
import h2StripesSVG from "../assets/h2Stripes.svg";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { MdSearch } from "react-icons/md";
import ParkerDeweyHero from "../assets/ParkerDeweyHero.jpg";
import CleanOriginHero from "../assets/CleanOriginHero.jpg";

const Home = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <>
      {/* Sticky header */}
      <nav className="sticky-header">
        <ul>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Work">Work</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero section */}
      <div
        id="home"
        className="hero"
      >
        <div className="container">
          <div className="hero-text">
            <h2 className="hero-subtitle">Hi, my name is Luis!</h2>
            <h1 className="hero-heading">
              <Typewriter
                options={{
                  autoStart: true, // Automatically starts typing on mount
                  loop: true, // Loops the typewriter animation
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I am a Software Engineer")
                    .pauseFor(1500)
                    .deleteChars(18)
                    .typeString("n SEO Editor")
                    .pauseFor(1500)
                    .start();
                }}
              />
            </h1>
            <p className="hero-description">
              An all-in-one solution for your website needs.
            </p>
          </div>
        </div>
      </div>
      <img
        src={stripesSVG}
        alt="Stripes"
        className="heroStripes-svg"
      />

      {/* Content section */}
      <div
        className="background-color-section"
        style={{ backgroundColor: "#0E192A" }}
      >
        {/* Services by section */}
        <div
          id="Services"
          className="services-section"
        >
          <div className="services-section-heading">
            <img
              src={h2StripesSVG}
              alt="Stripes"
              className="h2Stripes-svg"
            />
            <h2>Services</h2>
          </div>
          <p className="content-section-text">
            I'm a passionate Software Engineer and SEO Editor dedicated to
            crafting exceptional online experiences. With a fusion of creativity
            and technical expertise, I offer a range of services that empower
            businesses to thrive in the digital realm. Here's what I can do for
            you:
          </p>
          <div className="services-section-cards">
            <div className="services-section-card-design">
              <div className="services-section-content">
                <MdOutlineDesignServices size={80} />
                <h3 className="services-section-content-heading">Design</h3>
                <p className="services-section-content-text">
                  I create captivating digital experiences through intuitive
                  UX/UI design that enhance user satisfaction and drive
                  engagement.
                </p>
              </div>
            </div>
            <div className="services-section-card-development">
              <div className="services-section-content">
                <HiCode size={80} />
                <h3 className="services-section-content-heading">
                  Development
                </h3>
                <p className="services-section-content-text">
                  I build responsive, scalable, and secure websites by blending
                  seamless front-end design with robust back-end functionality.
                </p>
              </div>
            </div>
            <div className="services-section-card-seo">
              <div className="services-section-content">
                <MdSearch size={80} />
                <h3 className="services-section-content-heading">SEO</h3>
                <p className="services-section-content-text">
                  I craft compelling content that will help your brand soar to
                  the top of search engine results and captivate your target
                  audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Work section */}
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
                  DEVELOPMENT • SEO
                </div>
              </div>
              <img
                src={ParkerDeweyHero}
                alt="Parker Dewey Website"
                className="project-image"
              />
            </div>

            <div className="work-section-content-2">
              <img
                src={CleanOriginHero}
                alt="Parker Dewey Website"
                className="project-image"
              />
              <div className="work-section-content-2-card">
                <div className="work-section-content-2-card-title">
                  Increased Online Visibility
                </div>
                <div className="work-section-content-2-card-description">
                  Continuously optimize Clean Origin's website for search
                  engines, elevating its visibility and driving increased
                  organic traffic.
                </div>
                <div className="work-section-content-2-card-tags">
                  SEO • DESIGN
                </div>
              </div>
            </div>

            <div className="work-section-cta">
              <div className="work-section-cta-text">
                <h3>
                  Like what you've seen so far? Check out my other noteworthy
                  projects!
                </h3>
              </div>
              <div className="work-section-cta-button">
                <button
                  onClick={handleClick}
                  className="cta-button"
                >
                  Explore Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
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
                  From designing intuitive user interfaces and developing
                  responsive websites, to crafting compelling content that ranks
                  high on search engines, I can help.
                </div>
              </div>
              <img />
            </div>
          </div>
        </div>

        {/* Testimonials section */}
        <div
          id="Testimonials"
          className="testimonials-section"
        >
          <div className="testimonials-section-heading">
            <img
              src={h2StripesSVG}
              alt="Stripes"
              className="h2Stripes-svg"
            />
            <h2>Testimonials</h2>
          </div>
          <p className="content-section-text">
            I have a passion for creating digital experiences that leave a
            lasting impact. But don't just take my word for it. See what some of
            my amazing clients have to say
          </p>
        </div>

        {/* Contact section */}
        <div
          id="Contact"
          className="contact-section"
        >
          <div className="contact-section-heading">
            <h2>Let’s Make it Happen</h2>
          </div>
          <p className="content-section-text">
            If you're ready to take your online presence to the next level, I'm
            here to make it happen. Whether you need a compelling website, a
            powerful web application, or an SEO strategy that drives growth,
            I've got you covered.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
