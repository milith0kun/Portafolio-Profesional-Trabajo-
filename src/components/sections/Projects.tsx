import React from 'react'
import './projects.css'
import { projectsData } from '../../lib/data'
import ProjectCard from './Projects/ProjectCard'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section animate-on-scroll">
      <div className="content-wrapper">
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

