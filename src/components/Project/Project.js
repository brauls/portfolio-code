import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

const Project = ({
  name,
  description,
  link
}) => {
    return(
        <a 
            className="project-links" 
            href={link} 
            target='_blank' 
            rel="noopener noreferrer"
        >
            <div className="project-container">

                <div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    )
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}; 

export default Project;