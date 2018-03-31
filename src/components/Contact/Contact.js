import React from 'react';
import './Contact.css';

import Fa500px from 'react-icons/lib/fa/500px';
import FaTwitter from 'react-icons/lib/fa/twitter';
import GoMail from 'react-icons/lib/go/mail';

const Contact = () => (
    <div className="contact-container">
        <h2 className="contact-headline">Contact</h2>
        <div className="contact-icons">
            <a 
                className="header-links" 
                href='mailto:martiluax@gmail.com'
                rel="noopener noreferrer"
            >
                <GoMail className="contact-icon"/>
            </a>
            <a 
                className="header-links" 
                href='https://500px.com/martinlulu' 
                target='_blank' 
                rel="noopener noreferrer"
            >
                <Fa500px  className="contact-icon"/>
            </a>
            <a 
                className="header-links" 
                href='https://twitter.com/MartiiMacFly' 
                target='_blank' 
                rel="noopener noreferrer"
            >
                <FaTwitter className="contact-icon"/>
            </a>
        </div>
    </div>
  )

export default Contact;