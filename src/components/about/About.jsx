import React from "react";
import "./about.css";
import { me_bora, brush1, brush2 } from "../../assets";
import { about } from "../../constants";
import { motion } from "framer-motion";
import {
  FromTopVariant,
  FromBottomVariant,
  AboutContentVariant,
  AboutCardVariant,
  AboutCardTextVariant,
  AboutButtonVariant,
  AboutImgVariant,
} from "../../motion/index";

const About = () => {
  return (
    <section id="about">
      <div className="about__brush-1">
        <img src={brush1} alt="brush" />
      </div>

      <motion.h4
        variants={FromTopVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Get To Know
      </motion.h4>

      <motion.h2
        variants={FromBottomVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <motion.img
              src={me_bora}
              alt="About Image"
              variants={AboutImgVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            />
          </div>
        </div>
        <motion.div
          className="about__content"
          variants={AboutContentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="about__cards">
            {about.map(({ title, description, icon }, index) => {
              return (
                <motion.article
                  key={index}
                  className="about__card"
                  variants={AboutCardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                >
                  {icon}

                  <h5>{title}</h5>
                  <small>{description}</small>
                </motion.article>
              );
            })}
          </div>
          <motion.p
            variants={AboutCardTextVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Web developer by day, bug squasher by night! Turning coffee into code with JavaScript and ReactJS magic. 🚀☕
          </motion.p>

          <motion.a
            href="#contact"
            className="btn btn-primary"
            variants={AboutButtonVariant}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
      <div className="about__brush-2">
        <img src={brush2} alt="brush" />
      </div>
    </section>
  );
};

export default About;
