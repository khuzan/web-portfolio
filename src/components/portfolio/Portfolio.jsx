import React from "react";
import "./portfolio.css";
import { portfolio } from "../../constants";
import { brush5, brush6 } from "../../assets";
import { motion } from "framer-motion";
import {
  FromTopVariant,
  FromBottomVariant,
  PortfolioItemVariant,
} from "../../motion/index";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio__brush-1">
        <img src={brush5} alt="brush" />
      </div>

      <motion.h4
        variants={FromTopVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        My Amazing Projects
      </motion.h4>
      <motion.h2
        variants={FromBottomVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Portfolio
      </motion.h2>

      <div className="container portfolio__container">
        {portfolio.map(({ id, image, title, github, demo }, index) => {
          return (
            <motion.article
              key={id}
              className="portfolio__item"
              variants={PortfolioItemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
            >
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
      <div className="portfolio__brush-2">
        <img src={brush6} alt="brush" />
      </div>
    </section>
  );
};

export default Portfolio;
