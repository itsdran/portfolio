import React from 'react'

import './HobbyCard.css'

const HobbyCard = (props) => {
    return (
        <div className="hobby-container">
            <img
                src={props.image}
                alt={props.hobby}
                className="hobby-image"
            />

            <div className="hobby-content">
                <h3 className="hobby-title">{props.hobby}</h3>
                <p className="hobby-description">{props.description}</p>
            </div>
        </div>
    )
}

export default HobbyCard