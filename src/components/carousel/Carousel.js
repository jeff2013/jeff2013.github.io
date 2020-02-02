import React from 'react';
import './Carousel.scss';
import { useEffect } from 'react';
import { useState } from 'react';

function Carousel(props) {
    const images = props.images;
    const imageRefs = new Map(images.map((image, index) => [index, React.createRef()]));
    const carouselContainer = React.createRef();
    
    const [touchStart, setTouchStart] = useState(() => {
        return 0;
    });

    const [touchEnd, setTouchEnd] = useState(() => {
        return 0;
    });

    const [currentPosition, setCurrentPosition] = useState(() => {
        return 4;
    })
    useEffect(() => {
        if (touchEnd !== touchStart) {
            if (touchEnd < touchStart) {
                setCurrentPosition(Math.min(currentPosition + 1, images.length-1));
            } else {
                setCurrentPosition(Math.max(currentPosition - 1, 0));
            }
        }
    }, [touchEnd])


    useEffect(() => {
        carouselContainer.current.scrollTo({
            top: 0, 
            left: imageRefs.get(currentPosition).current.offsetLeft - ((window.screen.width * 0.2)/2), 
            behavior: 'smooth'
        });
    }, [currentPosition])

    
    useEffect(() => {
        carouselContainer.current.addEventListener('touchstart', (event) => handleTouchStart(event))
        carouselContainer.current.addEventListener('touchend', handleTouchEnd)
    }, [])

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    }


    const handleTouchEnd = (e) => {
        setTouchEnd(e.changedTouches[0].clientX);
    }

   
    return(
        <div className="carousel-container" ref={carouselContainer}>
            {
                images.map((image, _index) => {
                    return <div className="carousel-item">
                        <img className="photo" src={image.image} alt={image.id} key={image.id} ref={imageRefs.get(_index)}></img>
                    </div>
                })
            }
        </div>
    );
}

export default Carousel;