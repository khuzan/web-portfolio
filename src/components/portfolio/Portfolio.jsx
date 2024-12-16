import React from "react";
import "./portfolio.css";
import { portfolio } from "../../constants";
import { brush5, brush6 } from "../../assets";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio__brush-1">
        <img src={brush5} alt="brush" />
      </div>

      <h5>My Amazing Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolio.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
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
            </article>
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
