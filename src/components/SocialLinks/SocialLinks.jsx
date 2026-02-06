import React from 'react'
import { FaLinkedinIn, FaGithub, FaFacebookMessenger } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

import './SocialLinks.css'

const SocialLinks = () => {
    return (
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/dranoelflores" target="_blank" rel="noopener noreferrer"
                title="LinkedIn"> <FaLinkedinIn /> </a>
            <a href="https://github.com/itsdran" target="_blank" rel="noopener noreferrer"
                title="GitHub"> <FaGithub /> </a>
            <a href="mailto:dranoelflores@gmail.com" 
                title="Email" > <MdOutlineEmail /> </a>
            <a href="" target="_blank" rel="noopener noreferrer"
                title="Messenger"> <FaFacebookMessenger /> </a>
        </div>
    )
}

export default SocialLinks