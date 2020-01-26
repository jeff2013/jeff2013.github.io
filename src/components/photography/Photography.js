
import React from 'react'
import './Photography.scss'
import '../../index.scss'
import Carousel from '../carousel/Carousel';
import { useState } from 'react';
import { useTransition, animated, useChain, useSpring, config } from 'react-spring';
import { useRef } from 'react';
import VisibilitySensor from "react-visibility-sensor";

function Photography(props) {
    const [isVisible, setVisibility] = useState(false)

    const [selectedImage, setSelectedImage] = useState({
        image: '',
        id: ''
    })

    const [isDesktop, setIsDesktop] = useState(() => {
        return window.innerWidth > 800;
    })
    
    window.addEventListener('resize', (e) => {
        if (window.innerWidth <= 800) {
            setIsDesktop(false);
        } else {
            setIsDesktop(true);
        }
    });

    const images = props.images;
    const imageElements = images.map((image) => {
        return <img className="photo" src={image.image} alt={image.id} key={image.id}></img>
    })


    const imageRefs = new Map(images.map((image, index) => [index, React.createRef()]));

    const carouselImages = images.map((image) => {
        return (<div className="carousel-item">
                    <img className="photo" src={image.image} alt={image.id} key={image.id}></img>
                </div>
                )
    })

    const transRef = useRef();
    const imageTransitions = useTransition(isVisible ? images : [], item => item.id, {
        ref: transRef,
        unique: true,
        trail: 400 / images.length,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' }
    })

    const [expanded, setExpanded] = useSpring(() => ({transform: 'scale(0)', opacity: 0}))


    const visibilityHandler = (isVisible) => {
        setVisibility(isVisible);
    }

    const springRef = useRef()

    useChain([springRef, transRef])

    const imageClicked = (item, index) => {
        
        setVisibility(false);
        setExpanded({
            transform: 'scale(1)',
            opacity: 1
        })
        setSelectedImage(item);
    }

    const closeImage = (image, index) => {

        setExpanded({
            transform: 'scale(0)',
            opacity: 0
        })
        setVisibility(true);
        //setSelectedImage({image: '', id: ''})
    }
    if (isDesktop) {
        return (
            <VisibilitySensor partialVisibility minTopValue={10} onChange={visibilityHandler}>
                <div className="fullscreen-container photo-background">
                    <div className="photo-header">
                        <h1>Photography is my form of expression</h1>
                        <p>Every photo is a reflection of my happiness, pain and everything in between. Photography sparks my imagination and provides an escape.</p>
                    </div>
                    <div className="photo-root">
                        <animated.div className="enlarged-photo" style={expanded}>
                            <img src={selectedImage.image} alt={selectedImage.id}  onClick={() => closeImage()}></img>
                        </animated.div>
                        <animated.div className="photo-container" >
                            {/* {imageElements} */}
                            {imageTransitions.map(({item, key, props}, _index) => (
                                <animated.img className="photo" src={item.image} alt={item.id} key={key} style={props} ref={imageRefs.get(_index)} onClick={() => imageClicked(item, _index)}></animated.img>
                            ))}
                        </animated.div>
                    </div>
                </div>
            </VisibilitySensor>
        )
    } else {
        return (
            <div className="fullscreen-container photo-background">
                <div className="photo-header">
                        <h1>Photography is my form of expression</h1>
                        <p>Every photo is a reflection of my happiness, pain and everything in between. Photography sparks my imagination and provides an escape.</p>
                    </div>
                <Carousel images={images}></Carousel>
            </div>
        )
    }

}

export default Photography;