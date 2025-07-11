'use client';

import { useEffect } from 'react';

export const AnimationScript = () => {
  useEffect(() => {
    // Animación al cargar
    const loadAnimElements = document.querySelectorAll('.animate-on-load');
    loadAnimElements.forEach((element) => {
      element.classList.add('animate-loaded');
    });

    // Animación al hacer scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const scrollAnimElements = document.querySelectorAll('.animate-on-scroll');
    scrollAnimElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      scrollAnimElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return null;
};

export default AnimationScript;
