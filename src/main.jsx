import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '/index.css'

import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Career from './components/Career/Career'
import TechStack from './components/TechStack/TechStack'
import Contact from './components/Contact/Contact'

createRoot(document.getElementById('root')).render(
        <StrictMode>
        <Header />
        <Profile />
        <About />
        <div className="career-header">
                <h1>My journey report</h1>
                <p>     I've had the opportunity to work on a variety of settings - from small personal projects to internships. 
                        I've gained experience in different areas of software development. Here's the timeline of my journey!</p>
        </div>
        <Career />
        <TechStack />
        <Contact />
        <Footer />
        </StrictMode>
)
