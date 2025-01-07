import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DNGDONG</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>

      <div className="footer__socials">
        <a href="#"><IoLogoLinkedin/></a>
        <a href="#"><FaGithub/></a>
        <a href="#"><FaSquareUpwork/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; am. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer