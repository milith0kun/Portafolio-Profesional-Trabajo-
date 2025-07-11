'use client';

import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer animate-on-scroll">
      <p className="footer-tech">
        Construido con Next.js, TypeScript y CSS
      </p>
      <p className="footer-copyright">
        {new Date().getFullYear()} Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
