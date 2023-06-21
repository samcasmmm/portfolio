import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import SplitType from 'split-type';
import SkillScroll from '../skills/SkillScroll';

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
      {/* <div className='SkillScroll'>
        <SkillScroll />
      </div> */}
    </div>
  );
};

export default Hero;
