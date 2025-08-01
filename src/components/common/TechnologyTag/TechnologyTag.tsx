import React from 'react'

interface TechnologyTagProps {
  technology: string
}

const TechnologyTag: React.FC<TechnologyTagProps> = ({ technology }) => {
  return (
    <span className="tech-tag">
      {technology}
    </span>
  )
}

export default TechnologyTag