import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="header">
            <div className="name-initials">DF</div>
            <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
            <div className={`nav-links ${open ? "active" : ""}`}>
                <ul className="nav-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contact</a></li>
                    <li><a href="/Dranoel_Rubio_Flores_Resume.pdf" download="Dranoel_Rubio_Flores_Resume.pdf">Download CV</a></li>
                </ul>
            </div>
            <button className="dark-mode-toggle" onClick={() => setDarkMode(prev => !prev)}>
                {darkMode ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    );
};

export default Header;