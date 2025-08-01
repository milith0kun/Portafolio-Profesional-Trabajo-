'use client'

import React from 'react'
import AboutContent from '../sections/About/AboutContent'
import { aboutData } from '../../lib/data'
import './about.css'

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>{aboutData.title}</h2>
        <AboutContent paragraphs={aboutData.paragraphs} />
      </div>
    </section>
  )
}

export default About
