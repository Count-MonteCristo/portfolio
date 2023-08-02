import React from "react";
import "./css/testimonials.css";
import h2StripesSVG from "../assets/h2Stripes.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Eric R.",
      company: "Texas A&M University-San Antonio",
      testimonial:
        "Luis would be an exceptional addition to any team ... Luis was always ready to meet any challenge that was presented to him and exceeded expectations. Our entire team was impressed by his ability to manage various projects and meet deadlines. I highly recommend Luis and know he will add value to your team.",
    },
    {
      id: 2,
      name: "Gus Z.",
      company: "Parker Dewey",
      testimonial:
        "Luis is a dedicated, communicative, self-motivated, and courteous professional. Working with him was a pleasure, and I have no doubt he'd be an asset to any organization.",
    },
  ];

  return (
    <>
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
          I have a passion for creating digital experiences that leave a lasting
          impact. But don't just take my word for it. See what some of my
          amazing clients have to say
        </p>

        {/* Testimonial carousel */}
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-item"
            >
              <p className="testimonial-text">{testimonial.testimonial}</p>

              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-company">{testimonial.company}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Testimonials;
