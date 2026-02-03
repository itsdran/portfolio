import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '/index.css'

import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Profile />
    <Footer />
  </StrictMode>
)
