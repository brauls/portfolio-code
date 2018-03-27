import React from 'react';
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

export default Banner;