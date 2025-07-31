import React from 'react'
import './experience.css'
import { experienceData } from '../../lib/data'
import JobItem from './JobItem'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section animate-on-scroll">
      <div className="content-wrapper">
        <div className="experience-list">
          {experienceData.map((job, index) => (
            <JobItem key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
