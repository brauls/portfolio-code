import React from 'react';
import PropTypes from 'prop-types';
import './Portfolio.css';

import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Skills from '../Skills/Skills'

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
        name="Martin Lux"
        favovriteSkill="Full stack developer"
        education="Engineer (M.Sc.)"
        socialSkill="Agile team player"
      />
      <Skills
        skillSet={skillSet}
      />
    </div>
  </div>
  )

Portfolio.propTypes = {
  name: PropTypes.string,
  favovriteSkill: PropTypes.string,
  education: PropTypes.string,
  socialSkill: PropTypes.string
}; 

export default Portfolio;