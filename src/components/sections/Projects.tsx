import React from 'react'
import { projectsData } from '../../lib/data'
import ProjectCard from './Projects/ProjectCard'
import './projects.css'

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>Proyectos</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 