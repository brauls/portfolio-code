import React from 'react';
import './Projects.css';

import Project from '../Project/Project'
import OpenIndy from './images/openindy.png'

const Projects = () => (
    <div className="projects-container">
        <h1 className="projects-headline">Projects</h1>
        <div className="projects-overview-container">
            <Project
                name={'OpenIndy'}
                link={'https://openindy.github.io/'}
                image={OpenIndy}
            />
            {/* add some more projects here */}
        </div>
    </div>
)

export default Projects;