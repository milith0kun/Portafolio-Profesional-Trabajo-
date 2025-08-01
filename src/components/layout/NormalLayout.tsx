'use client'

import React, { useEffect, useState } from 'react'
import './normal-layout.css'
import { Hero, About, Experience, Projects } from '../../components/sections'

interface NormalLayoutProps {
  currentPage: number
  onPageChange: (page: number) => void
}

const NormalLayout: React.FC<NormalLayoutProps> = ({ currentPage, onPageChange }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  
  // Componentes que rotarán en el lado derecho
  const rightComponents = [About, Experience, Projects]
  const RightComponent = rightComponents[currentPage] || About

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
      if (e.deltaY > 0 && currentPage < rightComponents.length - 1) {
        onPageChange(currentPage + 1)
      } else if (e.deltaY < 0 && currentPage > 0) {
        onPageChange(currentPage - 1)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentPage < rightComponents.length - 1) {
        onPageChange(currentPage + 1)
      } else if (e.key === 'ArrowUp' && currentPage > 0) {
        onPageChange(currentPage - 1)
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
  }, [currentPage, onPageChange, rightComponents.length, isMobile])

  // Navegación táctil para móviles
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isUpSwipe = distance > 50
    const isDownSwipe = distance < -50

    if (isUpSwipe && currentPage < rightComponents.length - 1) {
      onPageChange(currentPage + 1)
    }
    if (isDownSwipe && currentPage > 0) {
      onPageChange(currentPage - 1)
    }
  }

  return (
    <div 
      className={`normal-layout ${isMobile ? 'mobile' : 'desktop'}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Lado izquierdo fijo - siempre Hero */}
      <div className="normal-layout__left-section">
        <Hero />
      </div>
      
      {/* Lado derecho dinámico - cambia según currentPage */}
      <div className="normal-layout__right-section">
        <RightComponent />
      </div>
      
      {/* Indicadores de página */}
      <div className="normal-layout__pagination">
        {rightComponents.map((_, index) => (
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
      
      {/* Indicador de navegación móvil */}
      {isMobile && (
        <div className="mobile-nav-hint">
          <span>Desliza ↕ para navegar</span>
        </div>
      )}
    </div>
  )
}

export default NormalLayout
