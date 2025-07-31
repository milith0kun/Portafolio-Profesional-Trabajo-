'use client'

import React from 'react'

interface HeroProps {
  onNavigateToSection: (sectionId: string) => void
}

const Hero: React.FC<HeroProps> = ({
  onNavigateToSection
}) => {
  return (
    <section className="hero-section">
      <div className="content-wrapper"> {/* Usar content-wrapper */}
        <div className="hero-content">
          <div className="hero-main">
            <h1 className="hero-title">Ingeniero de Sistemas</h1>
            <p className="hero-subtitle">DESARROLLADOR FULL STACK</p>
            <p className="hero-description">
              Especializado en desarrollo web, aplicaciones móviles y análisis de
              datos. Creando experiencias digitales innovadoras con tecnologías
              modernas.
            </p>
            <div className="hero-actions">
              <button
                className="explore-button"
                onClick={() => onNavigateToSection('projects')}
              >
                Explorar Proyectos
              </button>
            </div>
          </div>

          <nav className="hero-navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => onNavigateToSection('about')}
                >
                  ABOUT
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => onNavigateToSection('experience')}
                >
                  EXPERIENCE
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => onNavigateToSection('projects')}
                >
                  PROJECTS
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Hero
