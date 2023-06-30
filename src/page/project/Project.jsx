import React from 'react';
import './project.css';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Project = () => {
  return (
    <div id='projects' className='projectContainer'>
      <div className='fontEffect'>
        <p className='fontTitle-out'>Projects</p>
        <p className='fontTitle'>Projects</p>
      </div>
      <div className='projectContent'>
        {Array.from({ length: 6 }).map((item, index) => (
          <ProjectCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Project;
