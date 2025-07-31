import React from 'react'
import { SimpleProject } from '../../../types'

interface ProjectCardProps {
  project: SimpleProject
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project
}) => {
  return (
    <div className="project-card animate-on-scroll">
      <div className="project-header">
        <div className="project-icon">
          {/* Icono simple con SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5C3.89543 5 3 5.89543 3 7Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="project-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M7 7L13 1M13 1H9M13 1V5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tech-tags">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
