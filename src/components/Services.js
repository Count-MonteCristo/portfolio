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
        I combine business know-how with tech skills, making digital marketing feel like a breeze.
        From designing sleek websites to boosting your online presence, I simplify it all, so you can focus on what you do best.
        </p>
        <div className="services-section-cards">
          <div className="services-section-card-design">
            <div className="services-section-content">
              <MdOutlineDesignServices
                className="icons-services"
                size={80}
                color={"#00AEA9"}
              />
              <h3 className="services-section-content-heading">Design</h3>
              <p className="services-section-content-text">
                I design digital experiences that engage and drive conversions.
              </p>
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
                I build websites and apps that are responsive, scalable, and secure.
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
                I create content that boosts your brand's visibility and 
                captivates your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
