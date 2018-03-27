import React from 'react';
import './Header.css';

import Fa500px from 'react-icons/lib/fa/500px';
import FaGitHub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';

const Header = () => (
    <header className="app-header">
        <a 
            className="header-links" 
            href='https://github.com/martiL' 
            target='_blank' 
            rel="noopener noreferrer"
        >
            <FaGitHub className="header-icons" />
        </a>
        <a 
            className="header-links" 
            href='https://500px.com/martinlulu' 
            target='_blank' 
            rel="noopener noreferrer"
        >
            <Fa500px  className="header-icons"/>
        </a>
        <a 
            className="header-links" 
            href='https://twitter.com/MartiiMacFly' 
            target='_blank' 
            rel="noopener noreferrer"
        >
            <FaTwitter className="header-icons"/>
        </a>
    </header>
  )

export default Header;