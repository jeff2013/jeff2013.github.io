import React from 'react';
import './App.css';
import Intro from '../intro/Intro';
import AboutMe from '../about-me/AboutMe';
import Photography from '../photography/Photography';
import Contact from '../contact/Contact';

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

function App() {
  const images = generatePhotosTo(15);
  return (
    <div className="App">
      <Intro/>
      <AboutMe></AboutMe>
      <Photography images={images}></Photography>
      <Contact></Contact>
    </div>
  );
}

export default App;
