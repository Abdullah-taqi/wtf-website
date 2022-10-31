import React from "react";
import "./Styles/Footer.css";
import Logo from "../assets/logo.png";
import { FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-div">
        <div className="container">
          <div id="left">
            <div id="footer-logo">
              <img src={Logo} alt="logo"/>
            </div>
            <div className="social-icons">
              <div className="social-icon" id="facebook">
                <FaFacebookF size="20px"/>
              </div>
              <div className="social-icon" id="linkedin">
                <FaLinkedinIn size="20px"/>
              </div>
              <div className="social-icon" id="instagram">
                <FaInstagram size="20px"/>
              </div>
            </div>
          </div>
          <div id="mid">
            <ul className="footer-ul">
              <h5>Quick Links</h5>
              <div className="quicklinks">
                <div className="left-links">
                  <li className="footer-li">About</li>
                  <li className="footer-li">FAQs</li>
                  <li className="footer-li">Privacy Policy</li>
                  <li className="footer-li">WTF in News</li>
                  <li className="footer-li">Terms & Conditions</li>
                  <li className="footer-li">Refund & Cancellations</li>
                </div>
              </div>
            </ul>
          </div>
          <div id="mid">
            <ul className="footer-ul">
              <h5>Explore</h5>
              <div className="quicklinks">
                <div className="left-links">
                  <li className="footer-li">Arenas</li>
                  <li className="footer-li">Studios</li>
                  <li className="footer-li">Nutrition</li>
                </div>
              </div>
            </ul>
          </div>
          <div id="right">
            <div className="company-details ">
              <h5>Contact</h5>
              <div id="footer-contacts">
              <div className="address flex">
                <FaMapMarkerAlt color="white" size="20px" />
                <p>
                  Ro: S 1502, Amarpali Silicon FaCity, Sector 76, Noida, Uttar
                  Pradesh, India
                </p>
              </div>
              <div className="address flex">
                <FaMapMarkerAlt color="white" size="20px" />
                <p>
                  Ho: C-86 B, Ground Floor, Sector 8, Noida, Uttar Pradesh,
                  India
                </p>
              </div>
              <div className="contact-no flex">
                <FaPhoneAlt color="white" size="20px" />
                <p>
                  <a href="+919090639005">+919090639005</a>
                </p>
              </div>
              <div className="mail-ids flex">
                <FaEnvelope color="white" size="20px" />
                <p>
                  <a href="mailto:support@wtfup.me">support@wtfup.me</a>
                </p>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
