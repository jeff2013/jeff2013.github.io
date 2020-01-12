import React from 'react'
import './Intro.scss'
import './Intro-desktop.scss'
import '../../index.scss'
import cartoon from '../../assets/jephph-cartoon.png';


function Intro() {
    var isDesktop = true;
    
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
                        <div class="line"></div>
                        <p>HELLO,</p>
                    </div>
                    <h1>WELCOME</h1>
                    <h3>My name is Jephph Chang and I’m a developer and a dog lover and BEAMERS</h3>
                    <button>Learn More</button>
                </div>
            </div>
        )
    }

    
}

export default Intro;