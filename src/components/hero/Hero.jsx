import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import axios from 'axios';
import SplitType from 'split-type';
import SkillScroll from '../skills/SkillScroll';

const Hero = () => {
  const letter1 = useRef(null);
  const letter2 = useRef(null);
  const letter3 = useRef(null);
  const heroCon = useRef(null);
  const [weatherData, setWeatherData] = useState({});
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to('.firstName', {
      y: 0,
      stagger: 0.6,
      delay: 2.3,
      duration: 0.3,
      opacity: 1,
    });
    gsap.to('.firstName-outline', {
      y: 0,
      stagger: 0.6,
      delay: 2.3,
      duration: 0.3,
      opacity: 1,
    });
    gsap.to('.lastName', {
      y: 0,
      stagger: 0.6,
      delay: 2.3,
      duration: 0.3,
      opacity: 1,
    });
    // scroll Triggers

    // SplitType.create(fname.current.id);
  });

  const options = {
    method: 'GET',
    url: 'https://ai-weather-by-meteosource.p.rapidapi.com/current',
    params: {
      lat: '19.07283',
      lon: '72.88261',
      timezone: 'auto',
      language: 'en',
      units: 'metric',
    },
    headers: {
      'X-RapidAPI-Key': '11b4d6f032msh386aca822c0b025p110251jsnaf9a980bd21a',
      'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com',
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        setWeatherData(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const IconsList = ['github', 'instagram', 'linkedin'];

  return (
    <div className='heroContainer' ref={heroCon}>
      <div className='name'>
        <p id='fn-o' className='firstName-outline'>
          Sameer
        </p>
        <p id='fn' className='firstName'>
          Sameer
        </p>
        <p id='ln' className='lastName'>
          Bagwan
        </p>
      </div>
      <div className='intro'>
        <p className='introtext'>Frontend Developer & Ux Designer</p>
      </div>
      <div className='imgContainer'>
        {IconsList.map((icon, index) => (
          <img key={index} src={`assets/icons/${icon}.png`} alt={icon} />
        ))}
      </div>
      <div className='weather'>
        <div className='icon'>Weather : {weatherData?.current?.icon}</div>
        <div className='temperature'>
          Temperature : {weatherData?.current?.temperature}°C
        </div>
        <div className='humidity'>
          Humidity : {weatherData?.current?.humidity}%
        </div>
      </div>
      {/* <div className='SkillScroll'>
        <SkillScroll />
      </div> */}
    </div>
  );
};

export default Hero;
