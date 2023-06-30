import React from 'react';
import './ProjectCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
  return (
    <div className='projectcard-container'>
      <figure className='projectCardImg'>
        <img
          src='https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='ProjectImage'
        />
      </figure>
      <div className='projectCardTitle'>
        <h3>Chat Room</h3>
        <hr />
      </div>
      <p className='projectCardDesc'>
        An interview test project that aims to verify skills in understanding
        the task and building UI with React.
      </p>
      <div className='projectCardFooter'>
        <div className='techTitle'>
          <b>Stack</b>
        </div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
        </ul>
      </div>
      <div className='projectCardCTA'>
        <button class='cta hoverable'>
          <span>visit site</span>
          <svg viewBox='0 0 13 10' height='10px' width='15px'>
            <path d='M1,5 L11,5'></path>
            <polyline points='8 1 12 5 8 9'></polyline>
          </svg>
        </button>
        <Link
          to={'https://www.github.com'}
          className='hoverable'
          target='_blank'
        >
          <img src='/assets/icons/github.png' alt='' />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
