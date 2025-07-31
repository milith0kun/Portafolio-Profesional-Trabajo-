'use client'

import React from 'react'
import './about.css'

const About: React.FC = () => {
  return (
    <section id="about" className="about-section animate-on-scroll">
      <div className="content-wrapper">
        <div className="about-text">
          <p className="about-intro">
            Soy un desarrollador apasionado por crear interfaces de usuario
            accesibles y pixel-perfect que combinan un diseño cuidadoso con una
            ingeniería robusta. Mi trabajo favorito se encuentra en la
            intersección del diseño y el desarrollo, creando experiencias que no
            solo se ven geniales sino que están meticulosamente construidas para
            el rendimiento y la usabilidad.
          </p>

          <p className="about-current">
            Actualmente, soy Ingeniero Front-End Senior en{' '}
            <span className="highlight">Klaviyo</span>, especializado en
            accesibilidad. Contribuyo a la creación y mantenimiento de
            componentes UI que potencian el frontend de Klaviyo, asegurando que
            nuestra plataforma cumpla con los estándares de accesibilidad web y
            las mejores prácticas para ofrecer una experiencia de usuario
            inclusiva.
          </p>

          <p className="about-past">
            En el pasado, he tenido la oportunidad de desarrollar software en
            una variedad de entornos — desde{' '}
            <span className="highlight">agencias de publicidad</span> y{' '}
            <span className="highlight">grandes corporaciones</span> hasta{' '}
            <span className="highlight">startups</span> y{' '}
            <span className="highlight">
              pequeños estudios de productos digitales
            </span>
            . Adicionalmente, también lancé un{' '}
            <span className="highlight">curso de video integral</span> hace unos
            años, guiando a los estudiantes a través de la construcción de una
            aplicación web con la API de Spotify.
          </p>

          <p className="about-hobby">
            En mi tiempo libre, generalmente estoy escalando, leyendo, pasando
            tiempo con mi esposa y dos gatos, o corriendo por Hyrule buscando{' '}
            <span className="highlight">semillas Korok</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
