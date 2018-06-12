import React from 'react';
import './Header.css';

import FaGitHub from 'react-icons/lib/fa/github';

const Header = () => (
    <header className="app-header">
        <a 
            className="header-links" 
            href='https://github.com/brauls' 
            target='_blank' 
            rel="noopener noreferrer"
        >
            <FaGitHub className="header-icons" />
        </a>
    </header>
  )

export default Header;