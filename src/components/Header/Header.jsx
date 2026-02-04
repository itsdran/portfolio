import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="header" id="header">
            <div className="name-initials" href="#home">DF</div>
            <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
            <div className={`nav-links ${open ? "active" : ""}`}>
                <ul className="nav-list">
                    <li><a href="#home" onClick={() => setOpen(!open)}>Home</a></li>
                    <li><a href="#about" onClick={() => setOpen(!open)}>About Me</a></li>
                    <li><a href="#projects" onClick={() => setOpen(!open)}>Projects</a></li>
                    <li><a href="#contacts" onClick={() => setOpen(!open)}>Contact</a></li>
                    <li><a href="/Dranoel_Rubio_Flores_Resume.pdf" download="Dranoel_Rubio_Flores_Resume.pdf" 
                        onClick={() => setOpen(!open)}>Download CV</a></li>
                </ul>
            </div>
            <button className="dark-mode-toggle" onClick={() => setDarkMode(prev => !prev)}>
                {darkMode ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    );
};

export default Header;