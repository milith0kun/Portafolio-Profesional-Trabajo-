'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import './interactive-layout.css' // Nuevo archivo CSS para este layout

interface InteractiveLayoutProps {
  onNavigateToSection: (sectionId: string) => void
}

const InteractiveLayout: React.FC<InteractiveLayoutProps> = ({ onNavigateToSection }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const sectionsRef = useRef<HTMLElement[]>([])
  const currentSectionRef = useRef(0)

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
      // Asegurarse de que la primera sección (o las dos primeras en modo interactivo) esté activa al cargar o cambiar de modo
      if (sectionsRef.current.length > 0) {
        sectionsRef.current[0].classList.add('section-active')
        if (sectionsRef.current.length > 1) {
          sectionsRef.current[1].classList.add('section-active')
        }

        setTimeout(() => {
          if (sectionsRef.current[0]) {
            const children0 = sectionsRef.current[0].children
            Array.from(children0).forEach(child => {
              ;(child as HTMLElement).style.opacity = '1'
              ;(child as HTMLElement).style.transform =
                'translateY(0px) scale(1)'
            })
          }
          if (sectionsRef.current.length > 1 && sectionsRef.current[1]) {
            const children1 = sectionsRef.current[1].children
            Array.from(children1).forEach(child => {
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

        // En modo interactivo, dos secciones están activas
        if (index === newSection || index === newSection + 1) {
          section.classList.add('section-active')
          // Solo aplicar animación de entrada si es la primera vez que se activa o si se está moviendo
          if (currentSectionRef.current !== newSection) {
            section.style.animation =
              'surpriseEntry 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }
        }
      }
    })
  }, [])

  // Detectar cambios de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const sectionWidth = 0.5 * window.innerWidth // Cada sección ocupa 50vw
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

        const scrollSpeed = isScrolling ? 3 : 1.5
        const scrollAmount = e.deltaY > 0 ? 0.5 * window.innerWidth : -0.5 * window.innerWidth

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
  }, [isScrolling])

  return (
    <div className="two-column-layout interactive-mode" ref={scrollContainerRef}>
      {/* Hero como primera sección en modo interactivo */}
      <section className="content-section section-hero">
        <Hero onNavigateToSection={onNavigateToSection} />
      </section>

      {/* Columna derecha con scroll horizontal - Secciones */}
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
  )
}

export default InteractiveLayout