import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isNavOpen, setisNavOpen] = useState(false);

  const navItems = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ];

  const handleClick = (item) => {
    setActiveItem(item);
    scrollToSelector(`#${item.toLowerCase()}`);
    setisNavOpen(false);
  };

  const scrollToSelector = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className={!isNavOpen ? 'navContainer' : 'navContainer expand'}>
        <div className='logo hoverable'>
          <Link to='/'>
            <p>
              SB <span>.</span>
            </p>
          </Link>
        </div>
        <div className='nav-list'>
          {navItems.map((item, index) => (
            <Link
              key={index}
              className={`hoverable nav-items ${
                activeItem === item.label ? 'active' : ''
              }`}
              onClick={() => handleClick(item.label)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div
          className='hamburgerMenu'
          onClick={() => {
            setisNavOpen(!isNavOpen);
          }}
        >
          <span className={!isNavOpen ? 'line1' : 'line1 open'}></span>
          <span className={!isNavOpen ? 'line2' : 'line2 open'}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
