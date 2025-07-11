'use client';

import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, icon }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <div className="project-icon">
          {icon}
        </div>
        <h3 className="project-title">{title}</h3>
      </div>
      <p className="project-description">{description}</p>
      <div className="tech-tags">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const folderIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );

  const projects = [
    {
      title: "Aplicación Conectada de Spotify",
      description: "Curso de video que enseña cómo construir una aplicación web con la API de Spotify. Los temas cubiertos incluyen los principios de las API de REST, flujos de autenticación de usuarios, Node, Express, React, Styled Components y más.",
      technologies: ["React", "Express", "API de Spotify", "Heroku"],
      icon: folderIcon
    },
    {
      title: "Guía de Accesibilidad",
      description: "Una guía completa sobre las mejores prácticas de accesibilidad web. Cubre los errores comunes y cómo evitarlos, la navegación por teclado, la optimización del lector de pantalla y la implementación de ARIA.",
      technologies: ["HTML", "CSS", "JavaScript", "ARIA"],
      icon: folderIcon
    },
    {
      title: "Tema Oscuro para Desarrolladores",
      description: "Tema oscuro minimalista para VS Code, Sublime Text, Atom, iTerm y más. Diseñado para ser fácil de leer y proporcionar un excelente contraste para la legibilidad del código.",
      technologies: ["VS Code", "Sublime Text", "Atom", "iTerm"],
      icon: folderIcon
    }
  ];

  return (
    <section id="projects" className="mb-20 animate-on-scroll">
      <h2 className="text-2xl font-semibold mb-8 section-heading">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            icon={project.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
