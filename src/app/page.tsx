'use client'

import React, { useState } from 'react'
import './page.css'
import NormalLayout from '../components/layout/NormalLayout'
import InteractiveLayout from '../components/layout/InteractiveLayout'

export default function HomePage() {
  const [isInteractive, setIsInteractive] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleModeChange = () => {
    setIsInteractive(!isInteractive)
    setCurrentPage(0) // Reset a la primera página al cambiar de modo
  }

  return (
    <main className="main-container">
      {/* Botón simple en la esquina superior izquierda */}
      <button 
        className="simple-toggle-button"
        onClick={handleModeChange}
        title={isInteractive ? 'Cambiar a modo Normal' : 'Cambiar a modo Interactivo'}
      >
        {isInteractive ? 'N' : 'I'}
      </button>
      
      <div className="layout-wrapper">
        {isInteractive ? (
          <InteractiveLayout 
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        ) : (
          <NormalLayout 
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </main>
  )
}
