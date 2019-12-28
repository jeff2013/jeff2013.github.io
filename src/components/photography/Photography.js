
import React from 'react'
import './Photography.scss'
import '../../index.scss'

function Photography(props) {

    const images = props.images;
    const imageElements = images.map((image) => {
        return <img className="photo" src={image.image} alt={image.id} key={image.id}></img>
    })

    return (
        <div className="fullscreen-container photo-background">
            <div className="photo-header">
                <h1>Photography is my form of expression</h1>
                <p>Every photo is a reflection of my happiness, pain and everything in between. Photography sparks my imagination and provides an escape.</p>
            </div>
            <div className="photo-container">
                {imageElements}
            </div>
        </div>
    )
}

export default Photography;