import React from "react";
import "./experience.css";
import { brush3, brush4 } from "../../assets";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { experience__web, experience__seo } from "../../constants";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience__brush-1">
        <img src={brush3} alt="brush" />
      </div>
      
      <h5>My Recent Work</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <article className="experience">
          <div className="experience__head">
            <h3>Web Development</h3>
          </div>

          <ul className="experience__list">
            {experience__web.map(({ title, company, description }, index) => {
              return (
                <li key={index}>
                  <h3>
                    <HiMiniCodeBracketSquare className="experience__list-icon" />
                    &nbsp;{title}
                  </h3>
                  <h4>{company}</h4>
                  <small className="text-light">{description}</small>
                </li>
              );
            })}
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT*/}
        <article className="experience">
          <div className="experience__head">
            <h3>SEO Link Building</h3>
          </div>

          <ul className="experience__list">
            {experience__seo.map(({ title, company, description }, index) => {
              return (
                <li key={index}>
                  <h3>
                    <HiMiniCodeBracketSquare className="experience__list-icon" />
                    &nbsp;{title}
                  </h3>
                  <h4>{company}</h4>
                  <small className="text-light">{description}</small>
                </li>
              );
            })}
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
      <div className="experience__brush-2">
        <img src={brush4} alt="brush" />
      </div>
    </section>
  );
};

export default Experience;
