import React from 'react';
import './contactme.css';
const Contactme = () => {
  return (
    <div className='contactMe-container'>
      <div className='projectTitle'>
        <p className='title-out'>Contact</p>
        <p className='title'>Contact</p>
      </div>
      <div className='contactme'>
        <p>Contact Me</p>
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
    </div>
  );
};

export default Contactme;
