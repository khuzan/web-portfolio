import React from "react";
import "./experience.css";
import { BiCheck } from "react-icons/bi";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { experience__web, experience__seo } from "../../constants";

const Experience = () => {
  return (
    <section id="experience">
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
    </section>
  );
};

export default Experience;
