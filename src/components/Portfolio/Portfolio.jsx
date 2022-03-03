import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
        <article className='portfolio-item'>
          <div className='portfolio-item-image'></div>
          <h3>This is a portfolio item title</h3>
          <a href='https://github.com' className='btn'>
            Github
          </a>
          <a href='https://github.com' className='btn btn-primary' target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
