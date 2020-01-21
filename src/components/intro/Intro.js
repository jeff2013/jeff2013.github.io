import React from 'react'
import './Intro.scss'
import './Intro-desktop.scss'
import '../../index.scss'
import cartoon from '../../assets/jephph-cartoon.png';
import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import {Trail} from 'react-spring/renderprops'


function Intro() {
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

    const descriptors = ['Software Developer', 'Basketball Geek', 'Photographer', 'Dog Lover']

    const cartoonAnimation = useSpring({
        to: [{transform: 'translate3d(0, 0, 0)', opacity: 1}, {transform: 'translate3d(0, 0, 0)', opacity: 1}],
        from: {transform: 'translate3d(0, 200px, 0)', opacity: 0}
        , delay: 500})

    const welcomeAnimation = useSpring({opacity: 0.3, from: {opacity: 0}, delay: 500})

    const handleLearnMore = () => {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
          });
    };
    
    if (isDesktop) {
        return (
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
        )

    } else {
        return (
            <div className='intro-container'>
                <div className="text-container">
                    
                    <div className="intro-header">
                    <img src={cartoon} alt="cartoon"></img>
                        <div className="line"></div>
                    </div>
                    <h1>WELCOME</h1>
                    <h3>My name is Jeff and I’m a web developer, basketball geek, photographer and dog lover.</h3>
                    <button className="learn-more">Learn More</button>
                </div>
            </div>
        )
    }

    
}

export default Intro;