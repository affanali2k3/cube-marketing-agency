import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import "./NavButton.css";
import { Button } from "../Button/Button";

export const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll smooth
    });
  };
  return (
    <div className="navbar-main-div" onClick={scrollToTop}>
      {/* <p className='navbar-logo-name'>Cube Media </p> */}
      <img src="/default.png" alt="logo" width={520} />
      <ul className="navbar-list">
        <li>
          <Link
            to="home-main-div"
            spy={true}
            smooth={true}
            duration={500}
            className="some-class"
            activeClass="some-active-class"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about-main-div"
            spy={true}
            smooth={true}
            duration={500}
            className="some-class"
            activeClass="some-active-class"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="services-main-div"
            spy={true}
            smooth={true}
            duration={500}
            className="some-class"
            activeClass="some-active-class"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="#"
            onClick={() =>
              window.Calendly.initPopupWidget({
                url: "https://calendly.com/support-4ac/30min",
              })
            }
          >
            <button class="button-83-pushable nav-button" role="button">
              <span class="button-83-shadow"></span>
              <span class="button-83-edge"></span>
              <span class="button-83-front text">
                <p className="main-button-texet">Get Started</p>
              </span>
            </button>
          </Link>
        </li>
      </ul>

      <div class="toggle-menu">&#9776;</div>
    </div>
  );
};
