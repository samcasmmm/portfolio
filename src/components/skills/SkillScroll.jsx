import React from 'react';
import './skillscroll.css';

const skillScroll = () => {
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
    <div className='skill-scroll-container'>
      <div className='skill-slide'>
        {SkillsList.map((icon, index) => (
          <img key={index} src={`assets/icons/${icon}.png`} alt={icon} />
        ))}
      </div>
      <div className='skill-slide'>
        {SkillsList.map((icon, index) => (
          <img key={index} src={`assets/icons/${icon}.png`} alt={icon} />
        ))}
      </div>
    </div>
  );
};

export default skillScroll;
