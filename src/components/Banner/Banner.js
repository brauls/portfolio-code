import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

const Banner = ({
  name,
  favovriteSkill,
  education,
  socialSkill
}) => (
    <div className="banner-container">
      <div className="banner-description">
        <h1 className="headline">{name}</h1>
        <p>{favovriteSkill}</p>
        <p>{education}</p>
        <p>{socialSkill}</p>
      </div>
    </div>
  )

Banner.propTypes = {
  name: PropTypes.string,
  favovriteSkill: PropTypes.string,
  education: PropTypes.string,
  socialSkill: PropTypes.string
}; 

export default Banner;