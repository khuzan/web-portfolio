import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import { me_green, brush7, brush13 } from "../../assets";
import { motion, useScroll, useSpring } from "framer-motion";

const Header = () => {
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header id="header">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aljon Mar</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={me_green} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
