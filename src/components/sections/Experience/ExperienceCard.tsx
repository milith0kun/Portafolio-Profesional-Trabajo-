import React from 'react'
import TechnologyTag from '../../common/TechnologyTag/TechnologyTag'
import { Job } from '../../../types'

interface ExperienceCardProps {
  job: Job
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ job }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h3>{job.title}</h3>
        <span className="period">{job.period}</span>
      </div>
      <h4 className="company">{job.company}</h4>
      <p className="description">{job.description}</p>
      <div className="technologies">
        {job.technologies.map((tech, index) => (
          <TechnologyTag key={index} technology={tech} />
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard