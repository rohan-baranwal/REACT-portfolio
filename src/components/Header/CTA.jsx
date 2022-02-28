import React from "react";
import CV from "../../assets/rohan-baranwal-resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={CV} download>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's have a talk
      </a>
    </div>
  );
};

export default CTA;
