import React from "react";
import "./Footer.css";
import { BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const permalinkItems = [
    { name: "Home", address: "#home" },
    { name: "About", address: "#about" },
    { name: "Experiences", address: "#experiences" },
    { name: "Services", address: "#services" },
    { name: "Portfolio", address: "#portfolio" },
    { name: "Testimonials", address: "#testimonials" },
    { name: "Contact", address: "#contact" },
  ];

  return (
    <footer id='footer'>
      <a href='#home' className='footer-logo'>
        Rohan
      </a>

      <ul className='permalinks'>
        {permalinkItems.map((pi) => {
          return (
            <li key={pi.name}>
              <a href={pi.address}>{pi.name}</a>
            </li>
          );
        })}
      </ul>

      <div className='footer-socials'>
        <a href='https://www.linkedin.com/in/rohan-baranwal/' target='_blank' rel='noreferrer'>
          <BsLinkedin />
        </a>
        <a href='https://github.com/rohan-baranwal/' target='_blank' rel='noreferrer'>
          <BsGithub />
        </a>
        <a href='https://dribbble.com/rohan-baranwal' target='_blank' rel='noreferrer'>
          <BsDribbble />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Rohan Baranwal. All rights reserved.</small>
        </div>
    </footer>
  );
};

export default Footer;
