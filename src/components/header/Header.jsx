import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import { me_green, brush7, brush8 } from "../../assets";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aljon Mar</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocial />

        <img src={brush7} alt="brush" className="header__brush-1"/>
        <div className="me">
          <img src={me_green} alt="me" />
        </div>
        {/* <img src={brush8} alt="brush" className="header__brush-2"/> */}

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
