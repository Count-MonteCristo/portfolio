import React from "react";
import "./css/contact.css";
import { BiMailSend } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div
        id="Contact"
        className="contact-section"
      >
        <div className="contact-section-heading">
          <h2>Let's Make it Happen</h2>
        </div>
        <p className="contact-section-text">
          If you're ready to take your online presence to the next level, I'm
          here to make it happen. Whether you need a compelling website, a
          powerful web application, or SEO content that drives growth, I've got
          you covered.
        </p>

        <div className="social-buttons">
          <a href="mailto:luis0425navarro@gmail.com">
            <button className="social-button">
              <BiMailSend size={30} />
              <div className="social-label">Mail</div>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/luisnavarrobarrera/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="social-button">
              <BiLogoLinkedin size={30} />
              <div className="social-label">LinkedIn</div>
            </button>
          </a>
          <a
            href="https://github.com/Count-MonteCristo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="social-button">
              <BsGithub size={30} />
              <div className="social-label">GitHub</div>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
