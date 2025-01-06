import React from "react";
import "./experience.css";
import { brush3, brush4 } from "../../assets";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { experience__web, experience__seo } from "../../constants";
import { motion } from "framer-motion";
import {
  FromTopVariant,
  FromBottomVariant,
  FromLeftVariant,
  FromRightVariant,
} from "../../motion/index";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience__brush-1">
        <img src={brush3} alt="brush" />
      </div>

      <motion.h4
        variants={FromTopVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        My Recent Work
      </motion.h4>
      <motion.h2
        variants={FromBottomVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className="container experience__container">
        <motion.article
          className="experience"
          variants={FromLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
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
        </motion.article>
        {/* END OF WEB DEVELOPMENT*/}
        <motion.article
          className="experience"
          variants={FromRightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
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
        </motion.article>
        {/* END OF CONTENT CREATION */}
      </div>
      <div className="experience__brush-2">
        <img src={brush4} alt="brush" />
      </div>
    </section>
  );
};

export default Experience;
