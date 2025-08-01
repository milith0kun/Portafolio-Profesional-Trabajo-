import React from 'react'

interface AboutContentProps {
  paragraphs: string[]
}

const AboutContent: React.FC<AboutContentProps> = ({ paragraphs }) => {
  return (
    <div className="about-content">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}

export default AboutContent