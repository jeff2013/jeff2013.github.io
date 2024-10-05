import React from 'react'
import './Intro.scss'
import './Intro-desktop.scss'
import '../../index.scss'
import cartoon from '../../assets/jephph-cartoon.png';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import {Trail} from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';


function Intro() {
    const [isDesktop, setIsDesktop] = useState(() => {
        return window.innerWidth > 800;
    })

    const [cartoonAnimation, setCartoonAnimation] = useSpring(() => ({transform: 'translate3d(0,200px,0)', opacity: 0}))

    const [welcomeAnimation, setWelcomeAnimation] = useSpring(() => ({opacity: 0}))
    
    window.addEventListener('resize', (e) => {
        if (window.innerWidth <= 800) {
            setIsDesktop(false);
        } else {
            setIsDesktop(true);
        }
    });

    const visibilityHandler = (isVisible) => {
        setCartoonAnimation({
            transform: isVisible ? 'translate3d(0,0,0)' : 'translate3d(0, 200px, 0)',
            opacity: isVisible ? 1 : 0,
            delay: 0
        });

        setWelcomeAnimation({
            opacity: isVisible ? 1 : 0,
            delay: 4200
        })
    };

    const descriptors = ['Motorsport Enthusiast', 'Software Developer', 'Basketball Geek', 'Dog Dad']

    const handleLearnMore = () => {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
          });
    };
    
    if (isDesktop) {
        return (
            <VisibilitySensor partialVisibility onChange={visibilityHandler}>
                <div className="intro-container-desktop">
                    <div className="left-container">
                        <div className="text-container">
                            <ul>
                                <animated.li className="welcome" style={welcomeAnimation}>HI,  I'M</animated.li>
                                <li className="name-large">JEFF</li>
                                <li className="name-large">CHANG</li>
                                <Trail items={descriptors} 
                                    from={{
                                        transform: 'translate3d(-150px,0,0)',
                                        opacity: 0
                                    }} 
                                    to={{
                                        transform: 'translate3d(0px,0,0)',
                                        opacity: 1
                                    }}>
                                    {item => props => <li className="descriptors" style={props}>{item}</li>}
                                </Trail>
                            </ul>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="content-container">
                            <animated.img src={cartoon} alt="cartoon" style={cartoonAnimation}></animated.img>
                            <button className="learn-more" onClick={handleLearnMore}>Learn More</button>
                        </div>
                    </div>
                </div>
            </VisibilitySensor>
        )

    } else {
        return (
            <VisibilitySensor partialVisibility onChange={visibilityHandler}>
                <div className='intro-container'>
                    <div className="text-container">
                        
                        <div className="intro-header">
                            <animated.img src={cartoon} style={cartoonAnimation} alt="cartoon"></animated.img>
                            <div className="line"></div>
                        </div>
                        <div className="intro-content">
                            <h1>WELCOME</h1>
                            <h3>My name is Jeff and I’m a motorsport enthusiast, problem solver, basketball geek and dog dad.</h3>
                            <button className="learn-more" onClick={handleLearnMore}>Learn More</button>
                        </div>
                        
                    </div>
                </div>
            </VisibilitySensor>
        )
    }

    
}

export default Intro;