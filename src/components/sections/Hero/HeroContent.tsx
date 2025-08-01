import React from 'react'

interface HeroContentProps {
  title: string
  subtitle: string
  description: string
}

const HeroContent: React.FC<HeroContentProps> = ({ title, subtitle, description }) => {
  return (
    <div className="hero-content">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
    </div>
  )
}

export default HeroContent