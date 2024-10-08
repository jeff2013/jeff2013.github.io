
import React, { useEffect } from 'react'
import './Photography.scss'
import '../../index.scss'
import Carousel from '../carousel/Carousel';
import { useState } from 'react';

function Photography(props) {
    const [isDesktop, setIsDesktop] = useState(() => {
        return window.innerWidth > 800;
    })

    const [imageElements, setImageElements] = useState(() => {
        return [];
    })
    
    window.addEventListener('resize', (e) => {
        if (window.innerWidth <= 800) {
            setIsDesktop(false);
        } else {
            setIsDesktop(true);
        }
    });

    useEffect(() => {
        const imgCopy = props.images;
        const imageElements = imgCopy.slice(0, 10).map((image) => {
            return <img className={image.id + ' photo'} src={image.image} alt={image.id} key={image.id}></img>
        })
        setImageElements(imageElements)
    }, [props])

    const images = props.images;

    if (isDesktop) {
        return (
            <div className="fullscreen-container photo-background">
                    <div className="photo-header">
                        <h1>Sometimes I take photos</h1>
                    </div>
                    <div className="photo-grid">
                       {imageElements}
                    </div>
                </div>
        )
    } else {
        return (
            <div className="fullscreen-container photo-background mobile">
                <div className="photo-header">
                        <h1>Sometimes I take photos</h1>
                    </div>
                <Carousel images={images}></Carousel>
            </div>
        )
    }

}

export default Photography;