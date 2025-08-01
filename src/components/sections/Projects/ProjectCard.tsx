import React from 'react'
import { SimpleProject } from '../../../types'
import TechnologyTag from '../../common/TechnologyTag/TechnologyTag'

interface ProjectCardProps {
  project: SimpleProject
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <TechnologyTag key={index} technology={tech} />
        ))}
      </div>
      {project.url && (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
          Ver Proyecto
        </a>
      )}
    </div>
  )
}

export default ProjectCard