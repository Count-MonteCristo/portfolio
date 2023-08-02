import React from "react";
import "./css/services.css";
import h2StripesSVG from "../assets/h2Stripes.svg";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { MdSearch } from "react-icons/md";

const Services = () => {
  return (
    <>
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
              <MdOutlineDesignServices
                size={80}
                color={"#b7353c"}
              />
              <h3 className="services-section-content-heading">Design</h3>
              <p className="services-section-content-text">
                I create captivating digital experiences through intuitive UX/UI
                design that enhance user satisfaction and drive engagement.
              </p>
            </div>
          </div>
          <div className="services-section-card-development">
            <div className="services-section-content">
              <HiCode
                size={80}
                color={"#D06A42"}
              />
              <h3 className="services-section-content-heading">Development</h3>
              <p className="services-section-content-text">
                I build responsive, scalable, and secure websites by blending
                seamless front-end design with robust back-end functionality.
              </p>
            </div>
          </div>
          <div className="services-section-card-seo">
            <div className="services-section-content">
              <MdSearch
                size={80}
                color={"#D0AD6C"}
              />
              <h3 className="services-section-content-heading">SEO</h3>
              <p className="services-section-content-text">
                I craft compelling content that will help your brand soar to the
                top of search engine results and captivate your target audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
