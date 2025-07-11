'use client';

import React from 'react';
import './experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section animate-on-scroll">
      <h2 className="section-heading">Experiencia</h2>
      
      <div className="job-item animate-on-scroll">
        <div className="job-header">
          <h3 className="job-title">Ingeniero Front-End Senior</h3>
          <span className="job-period">2024 — Presente</span>
        </div>
        <h4 className="company-name">Empresa</h4>
        <p className="job-description">
          Lideré el desarrollo de una biblioteca de componentes utilizada por más de 20 equipos internos. Mejoré la accesibilidad en toda la plataforma, logrando el cumplimiento de WCAG 2.1 AA. Mentoría a desarrolladores junior a través de revisiones de código y sesiones de programación en pareja.
        </p>
        <div className="tech-tags">
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">TypeScript</span>
          <span className="tech-tag">React</span>
          <span className="tech-tag">Storybook</span>
        </div>
      </div>
      
      <div className="job-item animate-on-scroll">
        <div className="job-header">
          <h3 className="job-title">Ingeniero Líder</h3>
          <span className="job-period">2018 — 2024</span>
        </div>
        <h4 className="company-name">Empresa Anterior</h4>
        <p className="job-description">
          Diseñé e implementé soluciones front-end para sitios de comercio electrónico de alto tráfico. Colaboré con diseñadores para garantizar una implementación pixel-perfect de los diseños de UI. Optimicé el rendimiento, reduciendo los tiempos de carga en un 40%.
        </p>
        <div className="tech-tags">
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">TypeScript</span>
          <span className="tech-tag">HTML & CSS</span>
          <span className="tech-tag">React</span>
          <span className="tech-tag">Next.js</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
