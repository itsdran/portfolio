import React from 'react'

import './Footer.css'

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div className="footer">
            &copy; {year} Dranoel Rubio Flores. All rights reserved.
        </div>
    )
}

export default Footer