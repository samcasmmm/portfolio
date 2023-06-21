import './App.css';
import Home from './page/home/Home';
import About from './page/about/About.jsx';
import Project from './page/project/Project.jsx';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cursor from './components/Cursor';
import { gsap } from 'gsap';
import Navbar from './components/navbar/Navbar';
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

    return () => {
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, []);

  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Project />} />
        </Routes>
      </Router>
      <Cursor />
      <section id='splashScreen'>
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
      </section>
    </main>
  );
}

export default App;
