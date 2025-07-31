'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import './normal-layout.css'

interface NormalLayoutProps {
  onNavigateToSection: (sectionId: string) => void
}

const NormalLayout: React.FC<NormalLayoutProps> = ({ onNavigateToSection }) => {
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
        scrollContainerRef.current.querySelectorAll('.normal-content-section')
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

        if (index === newSection) {
          section.classList.add('section-active')
          if (currentSectionRef.current !== 0 || newSection !== 0) {
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

        const scrollSpeed = isScrolling ? 3 : 1.5
        const scrollAmount = e.deltaY * scrollSpeed

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
    <div className="two-column-layout">
      {/* Columna izquierda fija - Hero/Perfil */}
      <div className="normal-left-column">
        <Hero onNavigateToSection={onNavigateToSection} />
      </div>

      {/* Columna derecha con scroll horizontal - Secciones */}
      <div className="normal-right-column" ref={scrollContainerRef}>
        <section className="normal-content-section section-about">
          <About />
        </section>
        <section className="normal-content-section section-experience">
          <Experience />
        </section>
        <section className="normal-content-section section-projects">
          <Projects />
        </section>
      </div>
    </div>
  )
}

export default NormalLayout