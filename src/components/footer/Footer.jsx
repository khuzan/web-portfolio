import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DNGDONG</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
      </ul>

      <div className="footer__socials">
        <a href="#"><FaFacebookF/></a>
        <a href="#"><FaInstagramSquare/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; am. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer