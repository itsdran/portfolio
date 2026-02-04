import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '/index.css'

import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'
import TechStack from './components/TechStack/TechStack'
import ContactMe from './components/ContactMe/ContactMe'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Profile />
    <AboutMe />
    <TechStack />
    <ContactMe />
    <Footer />

  </StrictMode>
)
