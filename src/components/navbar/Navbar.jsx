import React, { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
    <nav>
      <div className='container'>
        <div className='linear-color'></div>
        <p className='logo'>
          SB <span className='dot'>.</span>
        </p>
        <div
          className='hamburger hoverable'
          onClick={() => {
            setIsOpenNav(!isOpenNav);
          }}
        >
          <span className={!isOpenNav ? 'line1 ' : 'line1  open'}></span>
          <span className={!isOpenNav ? 'line2 ' : 'line2  open'}></span>
        </div>
      </div>
      <section id='expandedNav' className='expandedNav'></section>
    </nav>
  );
};

export default Navbar;
