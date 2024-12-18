import React from "react";
import "./skills.css";
import { frontend, backend, seo } from "../../constants";
import { brush10, brush12 } from "../../assets";
import { PiSealCheckFill } from "react-icons/pi";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills__brush-1">
        <img src={brush12} alt="brush" />
      </div>

      <h5>What Skills I Have</h5>
      <h2>Technical Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            {frontend.map(({ skill, rate, icon }, index) => {
              return (
                <article key={index} className="skills__details">
                  <PiSealCheckFill className="skills__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{rate}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            {backend.map(({ skill, rate }, index) => {
              return (
                <article key={index} className="skills__details">
                  <PiSealCheckFill className="skills__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{rate}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="skills__backend">
          <h3>SEO Link Building</h3>
          <div className="skills__content">
            {seo.map(({ skill, rate, icon }, index) => {
              return (
                <article key={index} className="skills__details">
                  <PiSealCheckFill className="skills__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{rate}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <div className="skills__brush-2">
        <img src={brush10} alt="brush" />
      </div>
    </section>
  );
};

export default Skills;
