import React from 'react'
import { Job } from '../../types'

interface JobItemProps {
  job: Job
}

const JobItem: React.FC<JobItemProps> = ({
  job
}) => {
  return (
    <div className="job-item animate-on-scroll">
      <div className="job-header">
        <h3 className="job-title">{job.title}</h3>
        <span className="job-period">{job.period}</span>
      </div>
      <h4 className="company-name">{job.company}</h4>
      <p className="job-description">{job.description}</p>
      <div className="tech-tags">
        {job.technologies.map(tech => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default JobItem
