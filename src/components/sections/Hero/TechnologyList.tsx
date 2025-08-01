import React from 'react'
import TechnologyTag from '../../common/TechnologyTag/TechnologyTag'

interface TechnologyListProps {
  technologies: string[]
}

const TechnologyList: React.FC<TechnologyListProps> = ({ technologies }) => {
  return (
    <div className="technology-list">
      {technologies.map((tech, index) => (
        <TechnologyTag key={index} technology={tech} />
      ))}
    </div>
  )
}

export default TechnologyList