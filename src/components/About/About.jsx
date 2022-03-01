import React from "react";
import "./About.css";
import AboutImage from "../../assets/profile-image-2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about-container'>
        <div className='about-me'>
          <img src={AboutImage} className="about-me__image" alt="Rohan Baranwal About" />
        </div>
        <div className='about-content'>
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about-card">
              <FiUsers className="about-icon"/>
              <h5>Clients</h5>
              <small>300+ Clients Worldwide</small>
            </article>
            <article className="about-card">
              <VscProject className="about-icon"/>
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas qui optio harum excepturi, libero nobis odit, reiciendis autem reprehenderit natus saepe neque aspernatur quis at officia impedit temporibus fugiat eveniet.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
