import React from 'react'
import './AboutMe.scss'
import '../../index.scss'
import aboutme from '../../assets/about-me.JPG';
import { animated, useSpring } from 'react-spring';
import VisibilitySensor from "react-visibility-sensor";


function AboutMe() {
    const [fade, setFade] = useSpring(() => ({opacity: 0, config: {
        duration: 1000
    }}))
    const [rtl, setRTL] = useSpring(() => ({transform: 'translate3d(300px, 0, 0)', opacity: 0}))
    const [ltr, setLTR] = useSpring(() => ({transform: 'translate3d(-300px, 0, 0)', opacity: 0}))


    const visibilityHandler = (isVisible) => {
        setRTL({
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(300px, 0, 0)',
            opacity: isVisible ? 1 : 0
        })

        setLTR({
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(-300px, 0, 0)',
            opacity: isVisible ? 1 : 0
        })

        setFade({
            opacity: isVisible ? 1 : 0
        })


    }

    return (
        <VisibilitySensor partialVisibility minTopValue={10} onChange={visibilityHandler}>
            <div className="fullscreen-container about-me">
                <div className="content-container">
                    <div className="image-container">
                        <animated.div className="accent-background" style={fade}></animated.div>
                        <animated.img className="about-image" src={aboutme} style={ltr} alt="about-me"></animated.img>
                    </div>

                    <div className="center-container">
                        <div className="content">
                            <animated.h2 className="title" style={rtl}>About me</animated.h2>
                            <animated.p className="description" style={fade}>I strongly believe that the best way to get to know someone is over a good old, bitter, cup of dark black coffee <span role="img" aria-label="coffe-emoji">☕️</span> so here goes nothing.
                                <br/>
                                <br/>
                                I'm an aspiring project/product manager who has fallen, sort of, in love with software development and beautiful, functional user interfaces. Why sort of?
                                I love what I do but I still dream about opening a car repair shop, coaching basketball and adopting as many dogs as possible (which I believe is 2 per day).
                                Keep on scrolling to get a glimpse into my life, what my hobbies, passions, values and If you'd like to chat, you can reach me here!
                            </animated.p>
                        </div>
                    </div>

                </div>
            </div>
        </VisibilitySensor>
    )
}

export default AboutMe;