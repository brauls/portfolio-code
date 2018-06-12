import React from 'react';
import PropTypes from 'prop-types';
import './Portfolio.css';

import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'

const Portfolio = ({
  name,
  favovriteSkill,
  education,
  socialSkill,
  skillSet
}) => (
  <div className="portfolio">
    <Header />
    <div className="portfolio-main">
      <Banner 
        name={name}
        favovriteSkill={favovriteSkill}
        education={education}
        socialSkill={socialSkill}
      />
      <Skills
        skillSet={skillSet}
      />
      <Projects />
      <Contact />
    </div>
  </div>
  )

Portfolio.propTypes = {
  name: PropTypes.string,
  favovriteSkill: PropTypes.string,
  education: PropTypes.string,
  socialSkill: PropTypes.string,
  skillSet: PropTypes.arrayOf(
    PropTypes.shape({
      disciplin: PropTypes.string,
      description: PropTypes.string
    })
  )
}; 

export default Portfolio;