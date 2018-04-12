import React from 'react';
import './Contact.css';

import Fa500px from 'react-icons/lib/fa/500px';
import FaTwitter from 'react-icons/lib/fa/twitter';
import GoMail from 'react-icons/lib/go/mail';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

const Contact = () => (
    <div className="contact-container">
        <h2 className="contact-headline">Contact</h2>
        <div className="contact-icons">
            <a 
                className="contact-links" 
                href='mailto:martiluax@gmail.com'
                rel="noopener noreferrer"
            >
                <GoMail className="contact-icon"/>
            </a>
            <a 
                className="contact-links" 
                href='https://500px.com/martinlulu' 
                target='_blank' 
                rel="noopener noreferrer"
            >
                <Fa500px  className="contact-icon"/>
            </a>
            <a 
                className="contact-links" 
                href='https://twitter.com/MartiiMacFly' 
                target='_blank' 
                rel="noopener noreferrer"
            >
                <FaTwitter className="contact-icon"/>
            </a>
            <a 
                className="contact-links" 
                href='https://linkedin.com/in/martin-lux-278083161' 
                target='_blank' 
                rel="noopener noreferrer"
            >
                <FaLinkedin className="contact-icon"/>
            </a>           
        </div>
    </div>
  )

export default Contact;