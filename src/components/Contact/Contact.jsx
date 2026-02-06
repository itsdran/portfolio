import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'

import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-me" id="contact">
            <h1>Contact Me</h1>
            <p>If you'd like to get in touch, feel free to reach out via email or connect with me on social media!</p>
            <SocialLinks />
        </div>
    )
}

export default Contact