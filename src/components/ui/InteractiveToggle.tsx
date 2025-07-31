import React from 'react'

interface InteractiveToggleProps {
  isActive: boolean
  onToggle: () => void
}

const InteractiveToggle: React.FC<InteractiveToggleProps> = ({
  isActive,
  onToggle
}) => {
  return (
    <button
      onClick={onToggle}
      className={`interactive-toggle ${isActive ? 'active' : ''}`}
      aria-label={
        isActive ? 'Desactivar modo interactivo' : 'Activar modo interactivo'
      }
    >
      {/* Aquí irá el icono de flecha o similar */}
      <span className="arrow-icon"></span>
    </button>
  )
}

export default InteractiveToggle
