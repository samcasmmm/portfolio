import React from 'react';
import './project.css';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Project = () => {
  return (
    <div className='projectContainer'>
      <div className='projectContent'>
        {Array.from({ length: 6 }).map((item, index) => (
          <div className='items' key={index}>
            <ProjectCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
