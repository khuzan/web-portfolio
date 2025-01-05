import React from "react";
import "./skills.css";
import { frontend, backend, seo } from "../../constants";
import { brush10, brush12 } from "../../assets";
import { PiSealCheckFill } from "react-icons/pi";
import { delay, motion } from "framer-motion";
import {
  FromTopVariant,
  FromBottomVariant,
  SkillsContainerVariant,
  SkillsContentVariant,
  AboutContentVariant,
} from "../../motion/index";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills__brush-1">
        <img src={brush12} alt="brush" />
      </div>

      <motion.h5
        variants={FromTopVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        What Skills I Have
      </motion.h5>

      <motion.h2
        variants={FromBottomVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Technical Skills
      </motion.h2>

      <div className="container skills__container">
        <motion.div
          className="skills__frontend"
          variants={SkillsContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3>Frontend Development</h3>
          <div className="skills__content">
            {frontend.map(({ skill, rate, icon }, index) => {
              return (
                <motion.article
                  key={index}
                  className="skills__details"
                  variants={SkillsContentVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={index}
                >
                  <PiSealCheckFill className="skills__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{rate}</small>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="skills__backend"
          variants={SkillsContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3>Backend Development</h3>
          <div className="skills__content">
            {backend.map(({ skill, rate }, index) => {
              return (
                <motion.article
                  key={index}
                  className="skills__details"
                  variants={SkillsContentVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={index}
                >
                  <PiSealCheckFill className="skills__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{rate}</small>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="skills__seo"
          variants={SkillsContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3>SEO Link Building</h3>
          <div className="skills__content">
            {seo.map(({ skill, rate, icon }, index) => {
              return (
                <motion.article
                  key={index}
                  className="skills__details"
                  variants={SkillsContentVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={index}
                >
                  <PiSealCheckFill className="skills__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{rate}</small>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
      <div className="skills__brush-2">
        <img src={brush10} alt="brush" />
      </div>
    </section>
  );
};

export default Skills;
