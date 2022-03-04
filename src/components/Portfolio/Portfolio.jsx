import React from "react";
import "./Portfolio.css";
import IMG from "../../assets/portfolio1.webp";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Portfolio1",
      imageURL: IMG,
      githubURL: "https://github.com/rohan-baranwal",
      dribbbleURL: "https://dribbble.com/rohan-baranwal",
    },
    {
      id: 2,
      title: "Portfolio2",
      imageURL: IMG,
      githubURL: "https://github.com/rohan-baranwal",
      dribbbleURL: "https://dribbble.com/rohan-baranwal",
    },
    {
      id: 3,
      title: "Portfolio3",
      imageURL: IMG,
      githubURL: "https://github.com/rohan-baranwal",
      dribbbleURL: "https://dribbble.com/rohan-baranwal",
    },
    {
      id: 4,
      title: "Portfolio4",
      imageURL: IMG,
      githubURL: "https://github.com/rohan-baranwal",
      dribbbleURL: "https://dribbble.com/rohan-baranwal",
    },
    {
      id: 5,
      title: "Portfolio5",
      imageURL: IMG,
      githubURL: "https://github.com/rohan-baranwal",
      dribbbleURL: "https://dribbble.com/rohan-baranwal",
    },
    {
      id: 6,
      title: "Portfolio6",
      imageURL: IMG,
      githubURL: "https://github.com/rohan-baranwal",
      dribbbleURL: "https://dribbble.com/rohan-baranwal",
    },
  ];

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
        {portfolioItems.map((pi) => {
          return (
            <article className='portfolio-item' key={pi.id}>
              <div className='portfolio-item-image'>
                <img src={pi.imageURL} alt={pi.title} />
              </div>
              <h3>{pi.title}</h3>
              <div className='portfolio-item-cta'>
                <a href={pi.githubURL} className='btn' target='_blank' rel='noreferrer'>
                  Github
                </a>
                <a href={pi.dribbbleURL} className='btn btn-primary' target='_blank' rel='noreferrer'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
