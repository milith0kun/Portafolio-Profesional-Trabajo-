import { Job, SimpleProject, HeroData, AboutData } from '../types'

// Datos del hero
export const heroData: HeroData = {
  title: "Bienvenido a mi Portafolio",
  subtitle: "Desarrollador Full Stack",
  description: "Soy un desarrollador apasionado por crear experiencias web increíbles",
  technologies: ["React", "TypeScript", "Node.js", "Next.js"]
}

// Datos de About
export const aboutData: AboutData = {
  title: "Sobre Mí",
  paragraphs: [
    "Soy un desarrollador apasionado por crear interfaces de usuario accesibles y pixel-perfect que combinan un diseño cuidadoso con una ingeniería robusta.",
    "Actualmente, soy Ingeniero Front-End Senior en Klaviyo, especializado en accesibilidad.",
    "En el pasado, he tenido la oportunidad de desarrollar software en una variedad de entornos — desde agencias de publicidad y grandes corporaciones hasta startups y pequeños estudios de productos digitales."
  ]
}

// Datos de experiencia laboral
export const experienceData: Job[] = [
  {
    title: "Desarrollador Frontend Senior",
    period: "2023 - Presente",
    company: "Tech Solutions Inc.",
    description: "Desarrollo de aplicaciones web modernas utilizando React, TypeScript y Next.js. Liderazgo de equipo y mentoring a desarrolladores junior.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"]
  },
  {
    title: "Desarrollador Full Stack",
    period: "2022 - 2023",
    company: "Digital Agency Pro",
    description: "Desarrollo de sitios web y aplicaciones web completas. Trabajo con bases de datos y APIs RESTful.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Desarrollador Junior",
    period: "2021 - 2022",
    company: "StartUp Innovadora",
    description: "Desarrollo de interfaces de usuario responsivas y colaboración en proyectos de desarrollo ágil.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "Git"]
  }
]

// Datos de proyectos
export const projectsData: SimpleProject[] = [
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    url: "https://github.com/usuario/ecommerce-platform"
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    url: "https://github.com/usuario/task-manager"
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard meteorológico con visualización de datos en tiempo real y pronósticos extendidos.",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS Modules"]
  },
  {
    title: "Portfolio Website",
    description: "Sitio web de portafolio personal con diseño responsivo y animaciones suaves.",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    url: "https://mi-portfolio.com"
  }
]