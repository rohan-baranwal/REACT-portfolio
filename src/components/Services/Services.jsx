import React from "react";
import "./Services.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Services = () => {
  const services = [
    {
      id: `title-${Math.random()}`,
      title: "UI/UX Design",
      list: [
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
      ],
    },
    {
      id: `title-${Math.random()}`,
      title: "Web Development",
      list: [
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
      ],
    },
    {
      id: `title-${Math.random()}`,
      title: "Content Creation",
      list: [
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
        { id: `list-${Math.random()}`, note: "Lorem ipsum dolor sit amet consectetur adipisicing." },
      ],
    },
  ];

  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container service-container'>
        {services.map((se) => {
          return (
            <article className='service' key={se.id}>
              <div className='service-head'>
                <h3>{se.title}</h3>
              </div>
              <ul className='service-list'>
                {se.list.map((lis) => {
                  return (
                    <li key={lis.id}>
                      <AiOutlineCheckCircle className='service-list-icon' />
                      <p>{lis.note}</p>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
