import React from "react";
import "./FreeCall.css";
import checkIcon from "./check.png";
import { Button } from "../Button/Button";
import { Link } from "react-scroll";

export const FreeCall = () => {
  return (
    <div className="schedule-call-main-div">
      <div className="schedule-call-content-div">
        <img alt=""></img>
        <h3 className="schedule-call-with-sales">SCHEDULE YOUR CALL</h3>
        <h3 className="free-call-minutes">Free 15-Minute Demo Call</h3>
        <p className="schedule-call-para-1">
          You will have a clear knowledge of the next steps you need to take for
          your company to start producing reliable results online using funnels
          and paid advertising at the end of this audit call.
        </p>
        <p className="schedule-call-para-2">
          To book your call, check for a slot on our Chief Marketing Officer's
          calendar right now. We hope to chat with you soon.
        </p>

        <h3 className="audit-perfect-for">THIS AUDIT CALL IS PERFECT FOR:</h3>
        <div className="audit-perfect-for-point">
          <div className="check-icon-div">
            <img src={checkIcon} alt=""></img>
          </div>
          <p>
            Companies looking to transform their present website into a
            top-notch, efficient funnel model.
          </p>
        </div>
        <div className="audit-perfect-for-point">
          <div className="check-icon-div">
            <img src={checkIcon} alt=""></img>
          </div>
          <p>
            Businesses attempting to expand online from their offline operations
          </p>
        </div>
        <div className="audit-perfect-for-point">
          <div className="check-icon-div">
            <img src={checkIcon} alt=""></img>
          </div>
          <p>
            Companies seeking for a dependable organization that will put their
            business first.
          </p>
        </div>
        <div className="audit-perfect-for-point">
          <div className="check-icon-div">
            <img src={checkIcon} alt=""></img>
          </div>
          <p>
            Businesses wishing to grasp how funnels and conversion rate
            optimization can boost their income potential.
          </p>
        </div>

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
            text={"Speak to our team today"}
          />
        </Link>
      </div>
    </div>
  );
};
