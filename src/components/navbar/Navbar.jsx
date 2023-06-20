import React, { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isNavOpen, setisNavOpen] = useState(false);

  const navItems = ['Home', 'About', , 'Projects', 'Contact'];
  const handleClick = (item) => {
    setActiveItem(item);
    console.log(item);
  };
  return (
    <nav>
      <div className={!isNavOpen ? 'navContainer' : 'navContainer expand'}>
        <div className='logo'>
          <p>
            SB <span>.</span>
          </p>
        </div>
        <div className='nav-list'>
          {navItems.map((item) => (
            <p
              key={item}
              className={`hoverable nav-items ${
                activeItem === item ? 'active' : ''
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </p>
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
