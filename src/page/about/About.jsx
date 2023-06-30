import React, { useEffect } from 'react';
import './about.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {}, []);

  const SkillsList = [
    'html',
    'css',
    'js',
    'react',
    'tailwindcss',
    'bootstrap',
    'threedotjs',
    'nodejs',
    'express',
    'figma',
    'github',
  ];

  return (
    <>
      <div className='projectTitle'>
        <p className='title-out'>Projects</p>
        <p className='title'>Projects</p>
      </div>
      <div className='aboutContainer'>
        <img
          className='img1'
          src={
            'assets/myPic.jpeg' ||
            'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
          }
          alt=''
        />
        <div className='aboutMe'>
          <div className='introText'>
            <h3>
              I’m <span id='changingText'>Sameer Bagwan</span>
            </h3>
            <p>Frontend Developer & Ux Designer</p>
            <p>
              I am a fresh and enthusiastic Frontend developer and UX designer.
              I have recently graduated from a technical program where I learned
              the latest technologies and design principles for frontend
              development and UX design. I am eager to apply my skills and
              knowledge to real-world projects, and I am confident that I have
              what it takes to create beautiful, user-friendly and intuitive
              digital experiences for clients. I am excited to start my career
              and eager to learn and grow as a frontend developer and UX
              designer.
            </p>
          </div>
          <div className='skillTitle'>
            <p className='title-out'>Technology</p>
            <p className='title'>Technology</p>
          </div>
          <div className='skill-logos'>
            {SkillsList.map((icon, index) => (
              <div className='skills' key={index}>
                <img key={index} src={`assets/icons/${icon}.png`} alt={icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
