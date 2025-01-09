import React from "react";
import { Button } from "../Button/Button";
import { Link } from "react-scroll";
import "./About.css";

export const About = () => {
  return (
    <div className="about-main-div">
      <div className="about-stats">
        <div>
          <h3>100+</h3>
          <p>Clients Helped</p>
        </div>
        <div>
          <h3>$25M+</h3>
          <p>Revenue Generated</p>
        </div>
        <div>
          <h3>7+</h3>
          <p>Years Of Experience</p>
        </div>
        {/* <div>
                    <h3>$1.2M</h3>
                    <p>ADs Spent</p>
                </div> */}
      </div>
      <div className="about-content">
        <h2>Our Mission</h2>
        <p className="about-para-1">
          To empower businesses through innovative marketing solutions, driving
          sustainable growth and measurable success. We are dedicated to helping
          you excel in the competitive digital landscape by leveraging the
          latest tools and strategic insights.
        </p>
        <h2>Our Vision</h2>
        <p className="about-para-2">
          To be recognized as a leader in digital marketing services, known for
          driving growth and creating impactful brand recognition. We aim to set
          standards in the marketing industry through our commitment to
          innovation, quality, and results.
        </p>

        <div className="about-button-div">
          <Link
            href="#"
            onClick={() =>
              window.Calendly.initPopupWidget({
                url: "https://calendly.com/support-4ac/30min",
              })
            }
          >
            <Button
              mainText={"Speak To Our Team Today"}
              subText={"Schedule Your FREE Audit Call Now"}
              color={"black"}
              text={"Speak to our team now"}
            ></Button>
          </Link>
        </div>
      </div>
      <div className="about-stats-after">
        <div>
          <h3>100+</h3>
          <p>Clients Helped</p>
        </div>
        <div>
          <h3>$25M+</h3>
          <p>Revenue Generated</p>
        </div>
        <div>
          <h3>7+</h3>
          <p>Years Of Experience</p>
        </div>
        {/* <div>
                    <h3>$1.2M</h3>
                    <p>ADs Spent</p>
                </div> */}
      </div>
    </div>
  );
};
