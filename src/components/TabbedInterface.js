import React, { useState } from "react";
import "./css/TabbedInterface.css";
import stripes from "../assets/tabStripes.svg";

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState(0); // Set the default active tab to the first one

  const tabData = [
    {
      label: " Web Design",
      description:
        "In the world of pixels and aesthetics, design is the heartbeat of every successful project. I bring together an artful blend of color, typography, and intuitive layouts that breathe life into your brand.",
      image: "URL_TO_IMAGE_1",
    },
    {
      label: "Full-Stack Development",
      description:
        "Coding is where the magic happens, and I have the skills to turn ideas into digital realities. From front-end development to robust back-end systems, I ensure your online presence is both cutting-edge and reliable.",
      image: "URL_TO_IMAGE_2",
    },
    {
      label: "SEO (Search Engine Optimization)",
      description:
        "In the ever-evolving internet landscape, visibility is paramount. That's where I come in. From keyword research to content optimization, I strive to boost your organic search rankings and drive traffic to your website.",
      image: "URL_TO_IMAGE_3",
    },
  ];

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tabbed-interface">
      <div className="left-side">
        <img
          src={tabData[activeTab].image}
          alt={`Business Service ${activeTab + 1}`}
          className="tab-image"
        />
      </div>
      <div className="right-side">
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${
              index === activeTab ? "active-tab" : "inactive-tab"
            }`}
            onMouseEnter={() => handleTabChange(index)}
          >
            <div className="tabText">
              <h3 className="tabLabel">{tab.label}</h3>
              <p className="tabDescription">{tab.description}</p>
            </div>
            <div className="tabSVG">
              {index === activeTab && (
                <img
                  src={stripes}
                  alt="stripes"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedInterface;
