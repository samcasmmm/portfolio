import './App.css';
import Home from './page/home/Home';
import React, { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import { gsap } from 'gsap';
function App() {
  useEffect(() => {
    const handleWindowBlur = () => {
      console.log('Window lost focus');
    };
    window.addEventListener('blur', handleWindowBlur);
    gsap.to('#sectionText span', {
      y: 0,
      stagger: 0.2,
      delay: 0.3,
      duration: 0.7,
      opacity: 1,
    });
    gsap.to('#splashScreen', {
      y: '-100%',
      delay: 2,
      duration: 1,
      opacity: 0,
    });

    gsap.to('#innerCircle', {
      y: 0,
      delay: 0.3,
      duration: 1.5,
      scale: 1,
      opacity: 1,
    });
    gsap.to('#innerCircle', {
      y: 0,
      delay: 0.6,
      duration: 1.5,
      scale: 3,
      opacity: 1,
    });
    gsap.to('#innerCircle', {
      y: 0,
      delay: 0.9,
      duration: 1.5,
      scale: 20,
      opacity: 1,
    });
    gsap.to('#circularOpening', {
      y: 0,
      display: 'none',
      delay: 1.8,
      duration: 1.8,
      opacity: 0,
    });

    return () => {
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, []);

  return (
    <main>
      <Cursor />
      <Home />
      {/* <section id='splashScreen'>
        <div className='headingText'>
          <p id='sectionText'>
            <span>Passionate frontend developer dedicated</span>
          </p>
          <p id='sectionText'>
            <span> to creating visually stunning and </span>
          </p>
          <p id='sectionText'>
            <span> user-friendly web experiences.</span>
          </p>
        </div>
      </section> */}
      <section id='circularOpening'>
        <div id='innerCircle'>
          <p className='innerCircleText'>
            SB <span className='dot'>.</span>
          </p>
        </div>
      </section>
      <section className='sec'>1</section>
      <section className='sec'>1</section>
      <section className='sec'>1</section>
    </main>
  );
}

export default App;
