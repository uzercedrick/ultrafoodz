'use client'
import { useState, useEffect } from 'react'
import styles from "./Hero.module.css"

const defaultSlides = [
  { 
    id: 1, 
    title: 'Fresh & Delicious', 
    subtitle: 'Farm to Table Quality',
    image: '/hero1.jpg'
  },
  { 
    id: 2, 
    title: 'Fast Delivery', 
    subtitle: 'Get Your Food in Minutes',
    image: '/hero2.jpg'
  },
  { 
    id: 3, 
    title: 'Premium Taste', 
    subtitle: 'Experience Excellence',
    image: '/hero3.jpg'
  }
]

export default function Hero({ slides = defaultSlides }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className={styles.hero}>
      
      {/* Slides container */}
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              ${styles.slide}
              ${index === currentSlide 
                ? styles.slideActive
                : index < currentSlide 
                  ? styles.slideLeft
                  : styles.slideRight
              }
            `}
          >
            <div className={styles.blobTopRight}></div>
            <div className={`${styles.blobBottomLeft} ${styles.blobDelay}`}></div>

            <div className={styles.imageBg}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.imageIcon}></div>
                {/* Replace with: */}
                {/* <img 
                  src={slide.image} 
                  alt={slide.title}
                  className={styles.image}
                /> */}
              </div>
            </div>

            <div className={styles.overlay}>
              <div className={styles.overlayContainer}>
                <div className={styles.content}>
                  <h1 className={styles.title}>
                    <span className={styles.titleText}>{slide.title}</span>
                  </h1>
                  <p className={styles.subtitle}>{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`
              ${styles.dot}
              ${currentSlide === index ? styles.dotActive : styles.dotInactive}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  )
}