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
import Project from './components/Project/Project'

createRoot(document.getElementById('root')).render(
        <StrictMode>
        <Header />
        <Profile />
        <About />
        <Career />
        <Project />
        <Contact />
        <TechStack />
        <Footer />
        </StrictMode>
)
