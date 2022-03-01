import React from "react";
import { BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/rohan-baranwal/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/rohan-baranwal/" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://dribbble.com/rohan-baranwal" target="_blank" rel="noreferrer">
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
