import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ProfileImage from "../../assets/profile-image-4.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Rohan Baranwal</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="profile-image">
          <img src={ProfileImage} alt="rohan-baranwal-pic" />
        </div>
        <a href="#contact" className="scroll-bottom">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
