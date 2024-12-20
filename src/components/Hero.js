import React from "react";
import "./css/hero.css";
import Typewriter from "typewriter-effect";
import stripesSVG from "../assets/heroStripes.svg";

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="hero fade-in"
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
                    .deleteChars(17)
                    .typeString("Digital Marketer")
                    .pauseFor(1500)
                    .start();
                }}
              />
            </h1>
            <p className="hero-description">
              Transforming Digital Dreams into Reality
            </p>
          </div>
        </div>
      </div>
      <img
        src={stripesSVG}
        alt="Stripes"
        className="heroStripes-svg"
      />
    </>
  );
};

export default Hero;
