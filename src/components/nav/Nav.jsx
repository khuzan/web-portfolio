import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser  } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaCode } from "react-icons/fa6";
import { VscFileSubmodule } from "react-icons/vsc";
import { Link } from 'react-scroll'

const Nav = () => {
  // const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a> */}

      <Link to='header' spy={true} smooth={true} offset={-100} duration={300} title='Me'><AiOutlineHome/></Link>
      <Link to='about' spy={true} smooth={true} offset={-150} duration={300} title='About Me'><AiOutlineUser /></Link>
      <Link to='skills' spy={true} smooth={true} offset={-120} duration={300} title='Skills'><VscVscodeInsiders/></Link>
      <Link to='experience' spy={true} smooth={true} offset={-150} duration={300} title='Experience'><FaCode/></Link>
      <Link to='portfolio' spy={true} smooth={true} offset={-150} duration={300} title='Portfolio'><VscFileSubmodule/></Link>
    
    </nav>
  )
}

export default Nav