import React from 'react'

import './Footer.css'

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div className="footer">
            <p>&copy; {year} Dranoel Rubio Flores. All rights reserved.</p>
        </div>
    )
}

export default Footer