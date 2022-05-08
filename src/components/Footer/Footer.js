import {
    faFacebookSquare,
    faInstagram,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
//   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
  import icon from "../../images/mt-1508-home-logo.png";
  import "./Footer.css";
  
  const Footer = () => {
    return (
      <div className="w-100 text-light footer">
        <div className="py-3 d-flex align-items-center text-center justify-content-center">
          <div className="d-flex align-items-center justify-content-between">
            <div className="">
              <img className="bg-light "
                src={icon}
                width="60px"
                style={{ marginRight: "15px" }}
                alt="logo"
              />
            </div>
            <div className="me-5">
              <h4 className="mb-0">DEPOT</h4>
              <h6 className="">WAREHOUSING & STORAGE</h6>
            </div>
  
            <div className="mt-4">
              <div className="footer-col">
                <h2 className="follow">Follow Us</h2>
                <div className="social-links mt-3">
                  <a href="#icon">
                    <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
                  </a>
                  <a href="#icon">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a href="#icon">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="text-center pb-5">
          <small>
            &copy;Developed By Masum arifin <br />© 2022 KRONRS STUDIO Company |
            All rights reserved
          </small>
        </div>
      </div>
    );
  };
  
  export default Footer;
  