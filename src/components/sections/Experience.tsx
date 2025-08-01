import React from 'react'
import { experienceData } from '../../lib/data'
import ExperienceCard from '../sections/Experience/ExperienceCard'
import './experience.css'

const Experience: React.FC = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2>Experiencia</h2>
        <div className="experience-list">
          {experienceData.map((job, index) => (
            <ExperienceCard key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience