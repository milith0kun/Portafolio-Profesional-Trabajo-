import React from 'react'
import { heroData } from '../../lib/data'
import HeroContent from './Hero/HeroContent'
import TechnologyList from './Hero/TechnologyList'
import Button from '../common/Button/Button'
import './hero.css'

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <HeroContent 
          title={heroData.title}
          subtitle={heroData.subtitle}
          description={heroData.description}
        />
        <TechnologyList technologies={heroData.technologies} />
        <Button onClick={() => console.log('Ver Proyectos')}>Ver Proyectos</Button>
      </div>
    </section>
  )
}

export default Hero
