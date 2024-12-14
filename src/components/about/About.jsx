import React from 'react'
import './about.css'
import ME from '../../assets/me-bora1.png'
import { about } from '../../constants'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              {
                about.map(({title, description, icon}, index) => {
                  return(
                    <article key={index} className='about__card'>
                      {icon}
      
                      <h5>{title}</h5>
                      <small>{description}</small>
                    </article>
                  )
                })
              }
            </div>
            <p>
            A passionate Web developer having an experience of building Web applications with Javascript / ReactJS / AngularJS and some other cool libraries and frameworks. 
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About