import React from "react";
import "./about.css";
import { me_bora, brush1, brush2 } from "../../assets";
import { about } from "../../constants";

const About = () => {
  return (
    <section id="about">
      <div className="about__brush-1">
        <img src={brush1} alt="brush" />
      </div>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me_bora} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {about.map(({ title, description, icon }, index) => {
              return (
                <article key={index} className="about__card">
                  {icon}

                  <h5>{title}</h5>
                  <small>{description}</small>
                </article>
              );
            })}
          </div>
          <p>
            A passionate Web developer having an experience of building Web
            applications with Javascript / ReactJS / AngularJS and some other
            cool libraries and frameworks.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      <div className="about__brush-2">
        <img src={brush2} alt="brush" />
      </div>
    </section>
  );
};

export default About;
