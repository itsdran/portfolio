import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '/index.css'

import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Profile />
    <AboutMe />
    <Footer />

  </StrictMode>
)
