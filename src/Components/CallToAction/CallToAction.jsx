import React from "react";
import { Button } from "../Button/Button";
import "./CallToAction.css";
import { Link } from "react-scroll";

export const CallToAction = () => {
  return (
    <div className="call-to-action-and-footer">
      <div className="call-to-action-main-div">
        <div>
          <h3>Have A General Inquiry?</h3>
          <p className="call-to-action-para">
            Email us at
            <span className="support-email">
              {" "}
              support@cubemediamarketing.com
            </span>{" "}
            <br></br> if you have a general question and would like to chat with
            a member of our knowledgeable staff.
          </p>

          <div className="call-to-action-button-div">
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
                text={"Speak To Our Team Now"}
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
