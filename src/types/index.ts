// Tipos básicos para el esqueleto del portafolio

// Interface para trabajos/experiencia
export interface Job {
  title: string
  period: string
  company: string
  description: string
  technologies: string[]
}

// Interface simple para proyectos
export interface SimpleProject {
  title: string
  description: string
  technologies: string[]
  url?: string
}

// Interface para datos del hero
export interface HeroData {
  title: string
  subtitle: string
  description: string
  technologies: string[]
}

// Interface para datos de About
export interface AboutData {
  title: string
  paragraphs: string[]
}