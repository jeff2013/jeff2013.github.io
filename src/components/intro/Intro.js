import React from 'react'
import './Intro.scss'
import './Intro-desktop.scss'
import '../../index.scss'
import cartoon from '../../assets/jephph-cartoon.png';
import { useState } from 'react';


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
    
    if (isDesktop) {
        return (
            <div className="intro-container-desktop">
                <div className="left-container">
                    <div className="text-container">
                        <ul>
                            <li className="welcome">HI,  I'M</li>
                            <li className="name-large">JEFF</li>
                            <li className="name-large">CHANG</li>
                            <li className="descriptors first">Software Developer</li>
                            <li className="descriptors">Basketball Geek</li>
                            <li className="descriptors">Photographer</li>
                            <li className="descriptors">Dog Lover</li>
                        </ul>
                    </div>
                </div>
                <div className="right-container">
                    <div className="content-container">
                        <img src={cartoon} alt="cartoon"></img>
                        <button className="learn-more">Learn More</button>
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