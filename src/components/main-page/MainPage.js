import React, { useState, useEffect } from 'react'
import './MainPage.scss'
import '../../index.scss'

import Intro from '../intro/Intro';
import AboutMe from '../about-me/AboutMe';
import Photography from '../photography/Photography';
import Contact from '../contact/Contact';
import Values from '../values/Values';
import LoadingPage from '../loading-page/loading-page';


function generatePhotosTo(num) {
    var images = [];
    for (var i = 1; i <= num; i++) {
      images.push({
        id: `photo-${i}`,
        image: require(`../../assets/photo-${i}.jpg`)
      })
    }
    return images;
  }

const [isLoading, setIsLoading] = useState(() => {
    return true;
});

useEffect(() => {
    const timer = setTimeout(() => {
    setIsLoading(false);
    }, 3000)
    return () => clearTimeout(timer);
}, [])


function MainPage() {
    const images = generatePhotosTo(15);
    if (isLoading) {
        return (
            <div className="intro-container-desktop">
                <LoadingPage/>
                {images}
            </div>
        )
    } else {
        return (
            <div className="App">
                <Intro/>
                <AboutMe></AboutMe>
                <Values></Values>
                <Photography images={images}></Photography>
                <Contact></Contact>
            </div>
        );
        
    }
}

export default MainPage;