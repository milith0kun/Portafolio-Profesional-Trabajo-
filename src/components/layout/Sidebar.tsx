'use client';

import React from 'react';
import Link from 'next/link';
import './sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar" aria-label="Información personal y navegación">
      <div className="sidebar-content">
        <header>
          <h1 className="nombre gradient-text animate-on-load">Tu Nombre</h1>
          <h2 className="titulo animate-on-load" style={{transitionDelay: '100ms'}}>Ingeniero Front End</h2>
          <p className="descripcion animate-on-load" style={{transitionDelay: '150ms'}}>
            Creo experiencias digitales accesibles y pixel-perfect para la web.
          </p>
        </header>
        
        <nav className="navegacion" aria-label="Navegación principal">
          <ul className="navegacion-lista">
            <li className="nav-item animate-on-load" style={{transitionDelay: '200ms'}}>
              <Link href="#about" className="nav-link" aria-label="Ir a la sección Sobre mí">SOBRE MÍ</Link>
            </li>
            <li className="nav-item animate-on-load" style={{transitionDelay: '300ms'}}>
              <Link href="#experience" className="nav-link" aria-label="Ir a la sección Experiencia">EXPERIENCIA</Link>
            </li>
            <li className="nav-item animate-on-load" style={{transitionDelay: '400ms'}}>
              <Link href="#projects" className="nav-link" aria-label="Ir a la sección Proyectos">PROYECTOS</Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="social-links animate-on-load" style={{transitionDelay: '500ms'}}>
        <h3 className="sr-only">Redes Sociales</h3>
        <ul className="social-links-list">
          <li>
            <Link 
              href="https://github.com" 
              className="social-icon" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub (se abre en una nueva pestaña)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span className="sr-only">GitHub</span>
            </Link>
          </li>
          <li>
            <Link 
              href="https://linkedin.com" 
              className="social-icon" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn (se abre en una nueva pestaña)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link 
              href="https://codepen.io" 
              className="social-icon" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Perfil de CodePen (se abre en una nueva pestaña)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" y1="2" x2="12" y2="8.5"></line>
              </svg>
              <span className="sr-only">CodePen</span>
            </Link>
          </li>
          <li>
            <Link 
              href="https://instagram.com" 
              className="social-icon" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Perfil de Instagram (se abre en una nueva pestaña)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
