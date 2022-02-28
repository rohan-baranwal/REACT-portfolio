import React, { useState } from "react";
import "./Nav.css";
import { BiBook, BiHomeCircle, BiMessageSquareDetail, BiUser } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a onClick={() => setActiveNav("#home")} href='#home' title='Home' className={activeNav === "#home" ? "active" : ""}>
        <BiHomeCircle />
      </a>
      <a onClick={() => setActiveNav("#about")} href='#about' title='About' className={activeNav === "#about" ? "active" : ""}>
        <BiUser />
      </a>
      <a onClick={() => setActiveNav("#experience")} href='#experience' title='Experience' className={activeNav === "#experience" ? "active" : ""}>
        <BiBook />
      </a>
      <a onClick={() => setActiveNav("#services")} href='#services' title='Services' className={activeNav === "#services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a onClick={() => setActiveNav("#contact")} href='#contact' title='Contact Me' className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
