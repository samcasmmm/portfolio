import './App.css';
import Home from './page/home/Home';
import About from './page/about/About.jsx';
import Project from './page/project/Project.jsx';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cursor from './components/Cursor';
import SplashScreen from './components/SplashScreen';
import { gsap } from 'gsap';
import Navbar from './components/navbar/Navbar';
import Contactme from './page/contact/Contactme';
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
        <Cursor />
        <SplashScreen />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contactme />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
