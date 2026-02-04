import React from 'react'

import './AboutMe.css'

import HobbyCard from '../HobbyCard/HobbyCard'

const AboutMe = () => { 
    return (
        <div className="about-me-container" id="about">
            <h1>About Me</h1>
            <p>
                Hello! I'm <strong>Dranoel Rubio Flores</strong>, or <b>Dran</b> for short, a passionate <i>full stack developer</i> from the Philippines, with a degree in Information Technology from PLM, Manila.
                I'm enjoy developing back-to-back web applications using technologies like MERN Stack, PHP, Django, and Python.
                When I'm not coding, I love to draw, read, and go to gigs at local venues.
            </p>
            <div className="hobby-cards">
                <HobbyCard hobby="Web Development" image="/web-development.jpg" description="Building responsive web applications." />
                <HobbyCard hobby="Drawing" image="/drawing.jpg" description="Creating traditional art pieces" />
                <HobbyCard hobby="Gigs" image="/gigs.jpg" description="Live music at local venues and events." />
            </div>
        </div>
    )
}

export default AboutMe