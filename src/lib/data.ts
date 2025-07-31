// Importar tipos desde el archivo centralizado
import { Job, SimpleProject } from '../types/index'

export const experienceData: Job[] = [
  {
    title: 'Ingeniero Front-End Senior',
    period: '2024 — Presente',
    company: 'Empresa',
    description:
      'Lideré el desarrollo de una biblioteca de componentes utilizada por más de 20 equipos internos. Mejoré la accesibilidad en toda la plataforma, logrando el cumplimiento de WCAG 2.1 AA. Mentoría a desarrolladores junior a través de revisiones de código y sesiones de programación en pareja.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Storybook']
  },
  {
    title: 'Ingeniero Líder',
    period: '2018 — 2024',
    company: 'Empresa Anterior',
    description:
      'Diseñé e implementé soluciones front-end para sitios de comercio electrónico de alto tráfico. Colaboré con diseñadores para garantizar una implementación pixel-perfect de los diseños de UI. Optimicé el rendimiento, reduciendo los tiempos de carga en un 40%.',
    technologies: ['JavaScript', 'TypeScript', 'HTML & CSS', 'React', 'Next.js']
  }
]

export const projectsData: SimpleProject[] = [
  {
    title: 'Aplicación Conectada de Spotify',
    description:
      'Curso de video que enseña cómo construir una aplicación web con la API de Spotify. Los temas cubiertos incluyen los principios de las API de REST, flujos de autenticación de usuarios, Node, Express, React, Styled Components y más.',
    technologies: ['React', 'Express', 'API de Spotify', 'Heroku']
  },
  {
    title: 'Guía de Accesibilidad',
    description:
      'Una guía completa sobre las mejores prácticas de accesibilidad web. Cubre los errores comunes y cómo evitarlos, la navegación por teclado, la optimización del lector de pantalla y la implementación de ARIA.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'ARIA']
  },
  {
    title: 'Tema Oscuro para Desarrolladores',
    description:
      'Tema oscuro minimalista para VS Code, Sublime Text, Atom, iTerm y más. Diseñado para ser fácil de leer y proporcionar un excelente contraste para la legibilidad del código.',
    technologies: ['VS Code', 'Sublime Text', 'Atom', 'iTerm']
  }
]
