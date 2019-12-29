import React from 'react'
import './AboutMe.scss'
import '../../index.scss'
import aboutme from '../../assets/about-me.JPG';

function AboutMe() {
    return (
        <div className="fullscreen-container about-me">
            <div className="content-container">
                <img className="about-image" src={aboutme} alt="about-me"></img>
                <div className="center-container">
                    <div className="content">
                        <h2 className="title">About me</h2>
                        <p className="description">I strongly believe that the best way to get to know someone is over a good old, bitter, cup of dark black coffee ☕️ so here goes nothing.
                            <br/>
                            <br/>
                            I'm an aspiring project/product manager who has fallen, sort of, in love with software development and beautiful, functional user interfaces. Why sort of?
                            I love what I do but I still dream about opening a car repair shop, coaching basketball and adopting as many dogs as possible (which I believe is 2 per day).
                            Keep on scrolling to get a glimpse into my life, what my hobbies, passions, values and If you'd like to chat, you can reach me here!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;