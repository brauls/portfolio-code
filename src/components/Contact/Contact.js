import React from 'react';
import './Contact.css';

import FaTwitter from 'react-icons/lib/fa/twitter';
import GoMail from 'react-icons/lib/go/mail';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

const Contact = () => (
    <div className="contact-container">
        <h2 className="contact-headline">Contact</h2>
        <div className="contact-icons">
            <a 
                className="contact-links" 
                href='mailto:brauls101@gmail.com'
                rel="noopener noreferrer"
            >
                <GoMail className="contact-icon"/>
            </a>
            <a 
                className="contact-links" 
                href='https://twitter.com/brauls101' 
                target='_blank' 
                rel="noopener noreferrer"
            >
                <FaTwitter className="contact-icon"/>
            </a>
            <a 
                className="contact-links" 
                href='https://de.linkedin.com/in/benedikt-rauls-97b140162' 
                target='_blank' 
                rel="noopener noreferrer"
            >
                <FaLinkedin className="contact-icon"/>
            </a>           
        </div>
    </div>
  )

export default Contact;