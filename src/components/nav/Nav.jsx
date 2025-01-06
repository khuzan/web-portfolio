import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser  } from "react-icons/ai";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaCode } from "react-icons/fa6";
import { VscFileSubmodule } from "react-icons/vsc";
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav>
      <Link to='header' spy={true} smooth={true} offset={-100} duration={300} title='Me'><AiOutlineHome/></Link>
      <Link to='about' spy={true} smooth={true} offset={-150} duration={300} title='About Me'><AiOutlineUser /></Link>
      <Link to='skills' spy={true} smooth={true} offset={-150} duration={300} title='Skills'><VscVscodeInsiders/></Link>
      <Link to='experience' spy={true} smooth={true} offset={-150} duration={300} title='Experience'><FaCode/></Link>
      <Link to='portfolio' spy={true} smooth={true} offset={-150} duration={300} title='Projects'><VscFileSubmodule/></Link>
    
    </nav>
  )
}

export default Nav