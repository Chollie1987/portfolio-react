import React from 'react'
import './Projects.css'
import portfolioData from '../../assets/portfolioData'



const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className='myprojects-title'>
                <h1>My Latest Projects</h1>
            </div>
            <div className='myprojects-container'>
                {portfolioData.map((project) => (
                    <div key={project.id} className='project-card'>
                        <img src={Object.values(project.image)[0]} alt={project.title} className='project-image' />
                        <h2 className='project-title'>{project.title}</h2>
                        <p>{project.description}</p>
                        <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects