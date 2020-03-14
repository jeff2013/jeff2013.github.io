import React from 'react'
import './loading-page.scss'
import '../../index.scss'
import loadingBasketball from '../../assets/loading-basketball.gif';
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function LoadingPage() {

    var body = document.getElementsByTagName("BODY")[0];
    if (!body.classList.contains('disable-scrolling')) {
        body.classList += ' disable-scrolling';
    }

    const [fadeAnimation, setFadeAnimation] = useSpring(() => ({display: 'flex', opacity: 1}))
    
    useEffect(() => {
      const timer = setTimeout(() => {
        var body = document.getElementsByTagName("BODY")[0];
        body.classList = '';
        setFadeAnimation({
            opacity: 0
        })

        setFadeAnimation({
            display: 'none',
            delay: 3800
        })
      }, 4000)
      return () => clearTimeout(timer);
    }, [setFadeAnimation])

      return (
          <animated.div className="loading-container" style={fadeAnimation}>
              <img className="loading-basketball" src={loadingBasketball} alt="loading basketball"></img>
              <h1>Loading...</h1>
          </animated.div>
      )
}

export default LoadingPage;