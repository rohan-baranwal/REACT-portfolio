import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const frontEndSkills = [
    { id: 1, tech: "HTML", skill: "Experienced" },
    { id: 2, tech: "CSS", skill: "Intermediate" },
    { id: 3, tech: "JavaScript", skill: "Experienced" },
    { id: 4, tech: "TypeScript", skill: "Experienced" },
    { id: 5, tech: "Angular", skill: "Experienced" },
    { id: 6, tech: "React", skill: "Beginner" },
    { id: 7, tech: "BootStrap 4+", skill: "Experienced" },
    { id: 8, tech: "Angular Material", skill: "Experienced" },
  ];

  const backEndSkills = [
    { id: 1, tech: "SQL", skill: "Experienced" },
    { id: 2, tech: "MongoDB", skill: "Intermediate" },
    { id: 3, tech: "ASP.NET", skill: "Experienced" },
    { id: 4, tech: "Node.js", skill: "Intermediate" },
    { id: 5, tech: "Express.js", skill: "Intermediate" },
  ];

  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience-container'>
        <div className='experience-frontend'>
          <h3>Frontend Development</h3>
          <div className='experience-content'>
            {frontEndSkills.map((fes) => {
              return (
                <article className='experience-details' key={fes.id}>
                  <BsPatchCheckFill className="expreience-details-icon" />
                  <div>
                    <h4>{fes.tech}</h4>
                    <small className='text-light'>{fes.skill}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className='experience-backend'>
          <h3>Backend Development / Database</h3>
          <div className='experience-content'>
            {backEndSkills.map((bes) => {
              return (
                <article className='experience-details' key={bes.id}>
                  <BsPatchCheckFill className="expreience-details-icon" />
                  <div>
                    <h4>{bes.tech}</h4>
                    <small className='text-light'>{bes.skill}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* <div className='experience-database'></div> */}
      </div>
    </section>
  );
};

export default Experience;
