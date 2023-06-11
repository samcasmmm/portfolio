import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';

const Home = () => {
  return (
    <div className='homeContainer'>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
