import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import SplitType from 'split-type';

const Hero = () => {
  const letter1 = useRef(null);
  const letter2 = useRef(null);
  const letter3 = useRef(null);
  const heroCon = useRef(null);
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
        <p className='introtext'>
          Hello, I'm <span className='it-bold'>Frontend Developer</span> from
          India,I have recently graduated from a technical program where I
          learned the latest technologies
        </p>
      </div>
      <div className='letterBox lb-1'>
        <p className='letter-out'>S</p>
        <p className='letter'>S</p>
      </div>
      <div className='letterBox lb-2'>
        <p className='letter-out'>S</p>
        <p className='letter'>S</p>
      </div>
      <div className='letterBox lb-3'>
        <p className='letter-out'>B</p>
        <p className='letter'>B</p>
      </div>
    </div>
  );
};

export default Hero;
