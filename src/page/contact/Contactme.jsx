import React from 'react';
import './contactme.css';
import { Link } from 'react-router-dom';
const Contactme = () => {
  return (
    <div id='contact' className='contactMe-container'>
      <div className='fontEffect'>
        <p className='fontTitle-out'>Contact</p>
        <p className='fontTitle'>Contact</p>
      </div>
      <div className='contactme'>
        {/* <p>Contact Me</p> */}
        <div className='inputs'>
          <input className='name' placeholder='Your Sigma Name' type='text' />
          <input
            className='email'
            placeholder='Your Amazing Email'
            type='text'
          />
          <textarea
            className='msg'
            placeholder='Beautiful Message'
            type='text'
          />
          <button>SEND</button>
        </div>
      </div>
      <p className='copyrighted'>
        {' '}
        &copy; by{' '}
        <Link
          to='https://github.com/samcasmmm'
          target='_blank'
          className='hoverable'
        >
          Sameer Bagwan
        </Link>{' '}
        | 2023
      </p>
    </div>
  );
};

export default Contactme;
