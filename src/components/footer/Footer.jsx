import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { FiCodepen } from "react-icons/fi";
import { SiCodewars } from "react-icons/si";

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
        <a href="#"><FaGithub/></a>
        <a href="#"><FiCodepen/></a>
        <a href="#"><SiCodewars/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; am. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer