'use client';

import React from 'react';
import './about.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section animate-on-scroll">
      <div className="about-content animate-on-scroll">
        <p className="about-intro">Soy un desarrollador apasionado por crear interfaces de usuario accesibles y pixel-perfect que combinan un diseño cuidadoso con una ingeniería robusta. Mi trabajo favorito se encuentra en la intersección del diseño y el desarrollo, creando experiencias que no solo se ven geniales sino que están meticulosamente construidas para el rendimiento y la usabilidad.</p>
        
        <p className="about-current">Actualmente, soy Ingeniero Front-End Senior en <span className="highlight">Empresa</span>, especializado en accesibilidad. Contribuyo a la creación y mantenimiento de componentes UI que potencian nuestro framework, asegurando que nuestra plataforma cumpla con los estándares de accesibilidad web y las mejores prácticas para ofrecer una experiencia de usuario inclusiva.</p>
        
        <p className="about-past">En el pasado, he tenido la oportunidad de desarrollar software en una variedad de entornos — desde <span className="highlight">agencias de publicidad</span> y <span className="highlight">grandes corporaciones</span> hasta <span className="highlight">startups</span> y <span className="highlight">pequeños estudios de productos digitales</span>.</p>
      </div>
    </section>
  );
};

export default About;
