import React from 'react';
import './ProjectCard.css';

const ProjectCard = () => {
  return (
    <div className='projectcard-container'>
      <div className='pc-body'>
        <div className='projectPreview'>
          <img
            src='https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
        </div>
        <div className='head'>
          <p className='project-title'>ShoeShop</p>
          <p className='project-desc'>
            Feel free to modify the colors by replacing the hexadecimal values
            with the desired colors of your choice.
          </p>
          <div className='callTOAction'>
            <div className='livePreview'>Live Preview</div>
            <img
              className='githubLink'
              src='assets/icons/github.png'
              width={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
