
'use client'

import React, { useEffect, useState } from 'react'
import './interactive-layout.css'
import { Hero, About, Experience, Projects } from '../sections'

interface InteractiveLayoutProps {
  currentPage: number
  onPageChange: (page: number) => void
}

const InteractiveLayout: React.FC<InteractiveLayoutProps> = ({ currentPage, onPageChange }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  
  // Array de todos los componentes disponibles
  const components = [Hero, About, Experience, Projects]
  const totalPages = components.length
  
  // Componente izquierdo: componente actual
  const LeftComponent = components[currentPage]
  // Componente derecho: siguiente componente (con ciclo)
  const RightComponent = components[(currentPage + 1) % totalPages]

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Navegación por teclado y scroll
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault()
      if (e.deltaY > 0) {
        onPageChange((currentPage + 1) % totalPages)
      } else if (e.deltaY < 0) {
        onPageChange(currentPage === 0 ? totalPages - 1 : currentPage - 1)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        onPageChange((currentPage + 1) % totalPages)
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        onPageChange(currentPage === 0 ? totalPages - 1 : currentPage - 1)
      }
    }

    // Solo agregar eventos de scroll en desktop
    if (!isMobile) {
      window.addEventListener('wheel', handleScroll, { passive: false })
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentPage, onPageChange, totalPages, isMobile])

  // Navegación táctil para móviles (horizontal)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      onPageChange((currentPage + 1) % totalPages)
    }
    if (isRightSwipe) {
      onPageChange(currentPage === 0 ? totalPages - 1 : currentPage - 1)
    }
  }

  return (
    <div 
      className={`interactive-layout ${isMobile ? 'mobile' : 'desktop'}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Lado izquierdo - componente actual */}
      <div className="interactive-layout__left">
        <LeftComponent />
      </div>
      
      {/* Lado derecho - siguiente componente */}
      <div className="interactive-layout__right">
        <RightComponent />
      </div>
      
      {/* Indicadores de página */}
      <div className="interactive-layout__pagination">
        {components.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => onPageChange(index)}
            aria-label={`Ir a página ${index + 1}`}
          >
            {isMobile ? '' : index + 1}
          </button>
        ))}
      </div>
      
      {/* Indicador de qué componentes se están mostrando */}
      {!isMobile && (
        <div className="interactive-layout__component-indicator">
          <span className="component-name left">{components[currentPage].name}</span>
          <span className="separator">+</span>
          <span className="component-name right">{components[(currentPage + 1) % totalPages].name}</span>
        </div>
      )}
      
      {/* Indicador de navegación móvil */}
      {isMobile && (
        <div className="mobile-nav-hint">
          <span>Desliza ← → para navegar</span>
        </div>
      )}
    </div>
  )
}

export default InteractiveLayout
