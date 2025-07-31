# Portafolio Personal - README

## Descripción del Proyecto

**Nombre del Proyecto:** Portafolio Personal para Ingeniero de Sistemas e Informática  
**Usuario Objetivo:** Desarrollador freelance buscando oportunidades laborales  
**Enfoque Técnico:** Aplicaciones web, aplicaciones móviles, proyectos de análisis de datos  
**Objetivo:** Portafolio profesional con capacidad de blog para generar tráfico SEO

## Stack Tecnológico

```
Frontend: React 18+ con Next.js 14+ (App Router)
Estilos: CSS Modules + CSS Grid/Flexbox
Base de Datos: MySQL 8.0+
ORM: Prisma 5+ con connection pooling
Backend: Next.js API Routes
Hosting: Vercel (frontend/API) + PlanetScale/Railway (MySQL)
Lenguaje: TypeScript (recomendado)
Testing: Jest + React Testing Library
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   ├── ui/
│   └── features/
├── pages/
│   ├── api/
│   ├── proyectos/
│   └── blog/
├── styles/
├── lib/
├── types/
└── utils/
```

## Esquema de Base de Datos

### Tablas Principales

```sql
-- Gestión de proyectos
projects (id, title, description, long_description, category_id, status, priority, featured, created_at, updated_at)
categories (id, name, slug, description, display_order)
technologies (id, name, category, icon_url, color, display_order)
project_technologies (project_id, technology_id, proficiency_level)
project_images (id, project_id, image_url, alt_text, display_order, is_featured)
project_links (id, project_id, link_type, url, label)

-- Sistema de blog
blog_posts (id, title, content, excerpt, slug, category_id, status, seo_title, seo_description, featured_image, published_at, created_at, updated_at)
blog_categories (id, name, slug, description)
blog_tags (id, name, slug)
blog_post_tags (post_id, tag_id)

-- Contacto y analíticas
contacts (id, name, email, subject, message, status, ip_address, user_agent, created_at)
site_analytics (id, page_path, visitor_id, session_id, timestamp, user_agent, referrer)
```

## Estructura de Páginas

### Páginas Requeridas

1. **Inicio (/)** - Sección hero, proyectos destacados, CTA de contacto
2. **Sobre Mí (/sobre-mi)** - Experiencia profesional, habilidades, educación
3. **Proyectos (/proyectos)** - Showcase de proyectos categorizados con filtros
4. **Detalle de Proyecto (/proyectos/[slug])** - Páginas individuales de proyectos
5. **Blog (/blog)** - Listado de artículos con categorías y etiquetas
6. **Artículo de Blog (/blog/[slug])** - Posts individuales del blog
7. **Contacto (/contacto)** - Formulario de contacto e información profesional

### Categorías de Proyectos

- **Desarrollo Web** (3 proyectos)
- **Desarrollo Móvil** (3 proyectos)
- **Análisis de Datos** (3 proyectos)

## Funcionalidades Clave por Fase de Desarrollo

### Fase 1 - MVP (2-3 semanas)

- [x] Diseño responsivo para todos los dispositivos
- [x] Página de inicio estática con sección hero
- [x] Grid de proyectos con filtrado básico
- [x] Página de información de contacto
- [x] Enfoque mobile-first en el diseño

### Fase 2 - Funcionalidad Core (2-3 semanas)

- [ ] Integración de base de datos MySQL
- [ ] Páginas dinámicas de proyectos
- [ ] Sistema de filtrado avanzado
- [ ] Formulario de contacto funcional
- [ ] Implementación SEO básica

### Fase 3 - Blog y Optimización (3-4 semanas)

- [ ] Sistema de blog completo
- [ ] Optimización SEO avanzada
- [ ] Integración de analíticas
- [ ] Toggle modo oscuro/claro
- [ ] Optimización de rendimiento

### Fase 4 - Funcionalidades Avanzadas (2-3 semanas)

- [ ] Panel de administración
- [ ] Sistema de comentarios
- [ ] Integración de newsletter
- [ ] Analíticas avanzadas

## Requerimientos de Diseño

### Principios de Diseño

- **Estética minimalista** - Diseño limpio, enfocado en contenido
- **Apariencia profesional** - Identidad visual amigable para empresas
- **Enfoque mobile-first** - Responsivo en todos los dispositivos
- **Carga rápida** - Optimizado para rendimiento

### Dispositivos Objetivo

- Desktop: 1920px+ (enfoque principal)
- Tablet: 768px - 1024px
- Móvil: 320px - 767px
- Soporte para orientaciones portrait y landscape

### Esquema de Colores

- Primario: Tonos oscuros/neutros profesionales
- Acento: Destacados de color estratégicos
- Fondo: Blancos/grises claros limpios
- Texto: Alto contraste para legibilidad

## Requerimientos de Rendimiento

### Objetivos Core Web Vitals

- **LCP (Largest Contentful Paint):** < 2.5 segundos
- **FID (First Input Delay):** < 100 milisegundos
- **CLS (Cumulative Layout Shift):** < 0.1

### Estrategias de Optimización

- Optimización de imágenes con formatos WebP/AVIF
- Lazy loading para imágenes y componentes
- Code splitting y tree shaking
- ISR (Incremental Static Regeneration)
- Implementación de CDN para assets estáticos

## Implementación de Seguridad

### Medidas de Seguridad Requeridas

- Rate limiting para endpoints de API
- Validación de inputs con esquemas Zod
- Protección XSS con Content Security Policy
- Implementación de tokens CSRF
- Prevención de inyección SQL vía Prisma ORM
- Headers de seguridad (HSTS, X-Frame-Options, etc.)
- Enforcement de HTTPS

## Estrategia de Contenido

### Información Requerida por Proyecto

Para cada proyecto, incluir:

- Título del proyecto y descripción breve
- Descripción técnica detallada
- Tecnologías utilizadas (etiquetadas para filtrado)
- Múltiples capturas de pantalla/imágenes
- URL del demo en vivo (requerimiento principal)
- Enlace al repositorio de GitHub (si es público)
- Características clave y desafíos resueltos

### Plan de Contenido del Blog

- Tutoriales técnicos y guías
- Casos de estudio de proyectos
- Tendencias e insights de la industria
- Mejores prácticas de desarrollo
- Contenido optimizado para SEO para generar tráfico

## Lineamientos de Desarrollo

### Estándares de Calidad de Código

- TypeScript para seguridad de tipos
- ESLint + Prettier para consistencia de código
- Arquitectura basada en componentes
- Principios de código limpio
- Manejo integral de errores

### Estrategia de Testing

- Tests unitarios para funciones utilitarias
- Testing de componentes con React Testing Library
- Tests de integración para endpoints de API
- Testing end-to-end para flujos críticos de usuario

### Pipeline de Despliegue

- GitHub Actions para CI/CD
- Testing automatizado antes del despliegue
- Configuraciones específicas por ambiente
- Manejo de migraciones de base de datos
- Monitoreo de rendimiento post-despliegue

## Estrategia SEO

### SEO Técnico

- Optimizaciones SEO integradas de Next.js
- Implementación de meta tags y Open Graph
- Generación de XML sitemap
- Markup de datos estructurados
- Optimización de velocidad de página

### SEO de Contenido

- Contenido de blog optimizado por palabras clave
- Estrategia de enlaces internos
- Actualizaciones regulares de contenido
- Integración con redes sociales

## Analíticas y Monitoreo

### Tracking Requerido

- Integración con Google Analytics 4
- Tracking de eventos personalizados para:
  - Interacciones de visualización de proyectos
  - Envíos de formulario de contacto
  - Engagement de posts del blog
  - Clics en descargas/enlaces externos

### Monitoreo de Rendimiento

- Real User Monitoring (RUM)
- Tracking y reporte de errores
- Rendimiento de consultas de base de datos
- Monitoreo de tiempo de respuesta de API

## Requerimientos de Lanzamiento

### Checklist Pre-Lanzamiento

- [ ] Todos los proyectos desplegados y accesibles
- [ ] Formulario de contacto probado y funcional
- [ ] Meta tags SEO implementados
- [ ] Google Analytics configurado
- [ ] Responsividad móvil verificada
- [ ] Benchmarks de rendimiento cumplidos
- [ ] Medidas de seguridad implementadas
- [ ] Compatibilidad cross-browser probada

### Tareas Post-Lanzamiento

- [ ] Enviar sitemap a Google Search Console
- [ ] Configurar objetivos en Google Analytics
- [ ] Monitorear Core Web Vitals
- [ ] Iniciar estrategia de marketing de contenido
- [ ] Actualizaciones regulares de seguridad

## Métricas de Éxito

### KPIs Principales

- Visitantes únicos mensuales
- Tiempo de engagement en páginas de proyectos
- Tasa de conversión del formulario de contacto
- Tráfico y engagement del blog
- Mejoras en ranking de motores de búsqueda

### Métricas Técnicas

- Puntuaciones de velocidad de página
- Porcentaje de uptime del servidor
- Monitoreo de tasa de errores
- Métricas de rendimiento de base de datos

## Mejoras Futuras

### Funcionalidades Potenciales

- Soporte multi-idioma (i18n)
- Capacidades de Progressive Web App
- Filtrado avanzado de portafolio
- Sección de testimonios de clientes
- Exportación de portafolio a PDF
- Integración con herramientas de gestión de proyectos

## Notas para Implementación con IA

Este README proporciona especificaciones completas para construir un sitio web de portafolio profesional. Todos los requerimientos están claramente definidos con tecnologías específicas, esquemas de base de datos y fases de implementación. El proyecto enfatiza:

1. **Diseño limpio y minimalista** adecuado para uso profesional
2. **Responsividad completa** en todos los tipos de dispositivos
3. **Base técnica sólida** con stack moderno React/Next.js
4. **Optimización SEO** para generación de tráfico
5. **Arquitectura escalable** para crecimiento futuro
6. **Enfoque security-first** con múltiples capas de protección
7. **Optimización de rendimiento** cumpliendo estándares web modernos

Cada fase de desarrollo tiene entregables claros y puede implementarse de manera incremental manteniendo un producto funcional en cada etapa.
