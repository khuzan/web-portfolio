import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { FiDribbble } from "react-icons/fi";

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="#linkedin" target='_blank'><BsLinkedin /></a>
        <a href="#gh" target='_blank'><FaSquareGithub /></a>
        <a href="#dribble" target='_blank'><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocial