import React from 'react'
import './AboutMe.scss'
import '../../index.scss'
import aboutme from '../../assets/about-me.JPG';

function AboutMe() {
    return (
        <div className="fullscreen-container">
            <div className="content-container">
                <img className="about-image" src={aboutme} alt="about-me"></img>
                <div className="center-container">
                    <div className="content">
                        <h2 className="title">About me</h2>
                        <p>Hey this is a bit about me!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;