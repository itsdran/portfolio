import React from 'react'

import './Card.css'

const Card = (props) => {
    return (
        <div className="card-container">
            <img
                src={props.image}
                alt={props.title}
                className="card-image"
            />

            <div className="card-content">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card