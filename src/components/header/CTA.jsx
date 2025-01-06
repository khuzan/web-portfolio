import React from 'react'
import CV from '../../assets/cv-am.pdf'
import { motion } from "framer-motion";
import { CTAVariant} from "../../motion";

const CTA = () => {
  return (
    <motion.div variants={CTAVariant} initial="hidden" animate="visible" className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </motion.div>
  )
}

export default CTA