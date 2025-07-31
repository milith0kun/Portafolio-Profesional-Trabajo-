'use client'

import './page.css'
import './layout.css'
import { useState, useEffect, useRef, useCallback } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import InteractiveToggle from '../components/ui/InteractiveToggle'

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isInteractiveMode, setIsInteractiveMode] = useState(false)
  const sectionsRef = useRef<HTMLElement[]>([])
  const currentSectionRef = useRef(0)

  const handleToggleInteractiveMode = useCallback(() => {
    setIsInteractiveMode(prevMode => {
      const newMode = !prevMode
      if (scrollContainerRef.current) {
        // Al cambiar de modo, resetear el scroll a la primera sección
        scrollContainerRef.current.scrollLeft = 0
        setCurrentSection(0)
      }
      return newMode
    })
  }, [])

  const handleNavigateToSection = useCallback((sectionId: string) => {
    const sectionIndexMap: { [key: string]: number } = {
      about: 0,
      experience: 1,
      projects: 2
    }
    const targetIndex = sectionIndexMap[sectionId]
    if (targetIndex !== undefined) {
      setCurrentSection(targetIndex)
      if (scrollContainerRef.current && sectionsRef.current[targetIndex]) {
        const targetScrollLeft = sectionsRef.current[targetIndex].offsetLeft
        scrollContainerRef.current.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        })
      }
    }
  }, [])

  // Mantener currentSectionRef sincronizado
  useEffect(() => {
    currentSectionRef.current = currentSection
  }, [currentSection])

  // Inicializar referencias de secciones
  useEffect(() => {
    if (scrollContainerRef.current) {
      sectionsRef.current = Array.from(
        scrollContainerRef.current.querySelectorAll('.content-section')
      )
      if (sectionsRef.current[0]) {
        sectionsRef.current[0].classList.add('section-active')
        setTimeout(() => {
          if (sectionsRef.current[0]) {
            const children = sectionsRef.current[0].children
            Array.from(children).forEach(child => {
              ;(child as HTMLElement).style.opacity = '1'
              ;(child as HTMLElement).style.transform =
                'translateY(0px) scale(1)'
            })
          }
        }, 100)
      }
    }
  }, [])

  // Función para manejar animaciones de sección
  const handleSectionAnimations = useCallback((newSection: number) => {
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        section.classList.remove('section-active')
        section.style.animation = ''

        if (isInteractiveMode) {
          // En modo interactivo, dos secciones están activas
          if (index === newSection || index === newSection + 1) {
            section.classList.add('section-active')
            // Solo aplicar animación de entrada si es la primera vez que se activa o si se está moviendo
            if (currentSectionRef.current !== newSection) {
              section.style.animation =
                'surpriseEntry 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }
          }
        } else {
          // Modo normal, una sección activa
          if (index === newSection) {
            section.classList.add('section-active')
            if (currentSectionRef.current !== 0 || newSection !== 0) {
              section.style.animation =
                'surpriseEntry 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }
          }
        }
      }
    })
  }, [isInteractiveMode]) // Añadir isInteractiveMode a las dependencias

  // Detectar cambios de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const sectionWidth = scrollContainerRef.current.clientWidth
        const newSection = Math.round(scrollLeft / sectionWidth)

        if (newSection !== currentSectionRef.current) {
          handleSectionAnimations(newSection)
          setCurrentSection(newSection)
        }

        setIsScrolling(true)
        clearTimeout(window.scrollTimeout)
        window.scrollTimeout = setTimeout(() => {
          setIsScrolling(false)
        }, 150)
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [handleSectionAnimations])

  // Convertir scroll vertical en horizontal
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollContainerRef.current) {
        e.preventDefault()
        e.stopPropagation()

        let scrollAmount: number

        if (isInteractiveMode) {
          // En modo interactivo, cada sección ocupa 50vw. Desplazamos por el ancho de una sección.
          scrollAmount = e.deltaY > 0 ? 0.5 * window.innerWidth : -0.5 * window.innerWidth
        } else {
          // En modo normal, usamos la lógica existente.
          const scrollSpeed = isScrolling ? 3 : 1.5
          scrollAmount = e.deltaY * scrollSpeed
        }

        scrollContainerRef.current.scrollLeft += scrollAmount

        if (scrollContainerRef.current.style.filter !== 'brightness(1.1)') {
          scrollContainerRef.current.style.filter = 'brightness(1.1)'
          scrollContainerRef.current.style.transition = 'filter 0.1s ease'

          setTimeout(() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.style.filter = 'brightness(1)'
            }
          }, 100)
        }
      }
    }

    document.addEventListener('wheel', handleWheel, { passive: false })
    return () => document.removeEventListener('wheel', handleWheel)
  }, [isScrolling, isInteractiveMode])

  return (
    <div className={`two-column-layout ${isInteractiveMode ? 'interactive-mode' : ''}`}>
      {/* Botón de toggle para el modo interactivo */}
      <InteractiveToggle
        isActive={isInteractiveMode}
        onToggle={handleToggleInteractiveMode}
      />

      {/* Columna izquierda fija - Hero/Perfil */}
      <div className="left-column">
        <Hero onNavigateToSection={handleNavigateToSection} />
      </div>

      {/* Columna derecha con scroll horizontal - Secciones */}
      <div className="right-column" ref={scrollContainerRef}>
        <section className="content-section section-about">
          <About />
        </section>
        <section className="content-section section-experience">
          <Experience />
        </section>
        <section className="content-section section-projects">
          <Projects />
        </section>
      </div>
    </div>
  )
}
