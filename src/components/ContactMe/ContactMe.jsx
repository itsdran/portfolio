import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'

import './ContactMe.css';

const ContactMe = () => {
    return (
        <div className="contact-me">
            <h1>Contact Me</h1>
            <p>If you'd like to get in touch, feel free to reach out via email or connect with me on social media!</p>
            <SocialLinks />
        </div>
    )
}

export default ContactMe