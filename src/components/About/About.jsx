import React from 'react'

import './About.css'

import Card from '../Card/Card'

const About = () => { 
    return (
        <div className="about-me-container" id="about">
            <h1>About Me</h1>
            <p>
                Hello! I'm <strong>Dranoel Rubio Flores</strong>, or <b>Dran</b> for short, a passionate <i>full stack developer</i> from the Philippines, with a degree in Information Technology from PLM, Manila.
                I'm enjoy developing back-to-back web applications using technologies like MERN Stack, PHP, Django, and Python.
                When I'm not coding, I love to draw, read, and go to gigs at local venues.
            </p>
            <div className="hobby-cards">
                <Card title="Web Development" image="/web-development.jpg" description="Building responsive web applications." />
                <Card title="Art and Stuff" image="/drawing.jpg" description="Drawing and writing art pieces" />
                <Card title="Gigs" image="/gigs.jpg" description="Enjoying music at local venues and events and meeting new people." />
            </div>
        </div>
    )
}

export default About