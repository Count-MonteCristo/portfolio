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
          <h2>What I do </h2>
        </div>
        <p className="content-section-text">
        I help businesses shine online - without the headache. Whether you need a website that looks great, an app that works smoothly, or marketing that actually gets noticed, I've got you covered.
        </p>
        <div className="services-section-cards">
          <div className="services-section-card-design">
            <div className="services-section-content">
              <MdOutlineDesignServices
                className="icons-services"
                size={80}
                color={"#00AEA9"}
              />
              <h3 className="services-section-content-heading"> Web Design</h3>
              <p className="services-section-content-text">
                Turning brands into visual stories that grab attention and don't let go.              </p>
            </div>
          </div>
          <div className="services-section-card-development">
            <div className="services-section-content">
              <HiCode
                className="icons-services"
                size={80}
                color={"#F3426E"}
              />
              <h3 className="services-section-content-heading">Development</h3>
              <p className="services-section-content-text">
                Building digital tools that work seamlessly across every device and platform.
              </p>
            </div>
          </div>
          <div className="services-section-card-seo">
            <div className="services-section-content">
              <MdSearch
                className="icons-services"
                size={80}
                color={"#FD8103"}
              />
              <h3 className="services-section-content-heading">Marketing</h3>
              <p className="services-section-content-text">
                Creating online strategies that get you seen, heard, and remembered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
