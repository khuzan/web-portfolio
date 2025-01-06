import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import { me_green, brush7, brush13 } from "../../assets";
import { motion, useScroll, useSpring } from "framer-motion";
import { hidFromTopVariant, hidFromBottomVariant } from "../../motion";

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
        <motion.h4 variants={hidFromTopVariant} initial="hidden" animate="visible">
          Hello I'm
        </motion.h4>

        <motion.h1 variants={hidFromBottomVariant} initial="hidden" animate="visible">
          Aljon Mar
        </motion.h1>

        <motion.h4
          variants={hidFromBottomVariant}
          initial="hidden"
          animate="visible"
          className="text-light"
        >
          Web Developer
        </motion.h4>

        <CTA />
        <HeaderSocial />
        
        <motion.div
          variants={hidFromBottomVariant}
          initial="hidden"
          animate="visible"
          className="me">
          <img src={me_green} alt="me" />
        </motion.div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
