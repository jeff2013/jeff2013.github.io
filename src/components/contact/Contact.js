import React from 'react'
import './Contact.scss'
import '../../index.scss'
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg'
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';

function Contact() {
    return (
        <div className="fullscreen-container about-background">
            <div className="content-container">
                <h1>Let's talk about dogs, basketball, code and dogs</h1>
                <div>
                    <a href='https://www.linkedin.com/in/jeffchangvancouver/'>
                        <Linkedin className="contact-icon"/>
                    </a>
                    <a href='https://github.com/jeff2013'>
                        <Github className="circle-icon"/>
                    </a>
                    <a href='https://www.instagram.com/readysetshutter/'>
                        <Instagram className="contact-icon"/>
                    </a>
                        
                </div>  
            </div>
        </div>
    )
}

export default Contact;