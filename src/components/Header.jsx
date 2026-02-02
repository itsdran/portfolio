import React from 'react';

import '../header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="name-initials">Dranoel Flores</div>
            <div className="nav-links">
                <ul className="nav-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contact</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;