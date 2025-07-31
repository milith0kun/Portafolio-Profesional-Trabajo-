

'use client'

import { useEffect, useRef, useState } from 'react'

export const useScrollAnimations = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          // Trigger animaciones cuando el elemento es visible
          entry.target.classList.add('animate-visible')
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  const animateOnScroll = (callback: (progress: number) => void) => {
    useEffect(() => {
      const handleScroll = () => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect()
          const windowHeight = window.innerHeight
          const progress = Math.max(
            0,
            Math.min(1, (windowHeight - rect.top) / windowHeight)
          )
          setScrollProgress(progress)
          callback(progress)
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  }

  return {
    elementRef,
    isVisible,
    scrollProgress,
    animateOnScroll
  }
}

export default useScrollAnimations
