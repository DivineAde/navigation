import React, { useState } from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">TOPG.DEV</div>
          <div className="menu-toogle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "line-top spin" : "line-top"}></span>
              <span
                className={navOpen ? "line-bottom spin" : "line-bottom"}
              ></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0%" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className="nav-links">
            <li className="nav-items">
              <NavLink
                to="/"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0%" : "120px",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                }}
              >
                Home
              </NavLink>
              <div className="nav-item-wrapper"></div>
            </li>

            <li className="nav-items">
              <NavLink
                to="/about"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0%" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                }}
              >
                About
              </NavLink>
              <div className="nav-item-wrapper"></div>
            </li>

            <li className="nav-items">
              <NavLink
                to="/contact"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0%" : "120px",
                  transitionDelay: navOpen ? "1s" : "0s",
                }}
              >
                Contact
              </NavLink>
              <div className="nav-item-wrapper"></div>
            </li>

            <li className="nav-items">
              <NavLink
                to="/projects"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0%" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                }}
              >
                Project
              </NavLink>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>

          <div className="nav-footer">
            <div
              className="location"
              style={{
                bottom: navOpen ? "0" : "20px",
                opacity: navOpen ? "1" : "0",
                transitionDelay: navOpen ? "1.2s" : "0s",
              }}
            >
              <span>Lagos, Nigeria</span>
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a
                    href="#"
                    style={{
                      bottom: navOpen ? "0" : "20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.3s" : "0s",
                    }}
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      bottom: navOpen ? "0" : "20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.4s" : "0s",
                    }}
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;