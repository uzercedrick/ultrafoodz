'use client'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { 
      id: 1, 
      title: 'Fresh & Delicious', 
      subtitle: 'Farm to Table Quality',
      image: '/hero1.jpg' // Replace with your image path
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

  // Continuous auto-scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-[700px] overflow-hidden">
      
      {/* Slides container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Background animated shapes */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-300/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

            {/* Background image/placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center image-hover">
                <div className="text-9xl text-gray-400 animate-pulse"></div>
                {/* Replace with: */}
                {/* <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 h-full flex items-center bg-black/20">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-3xl">
                  
                  {/* Animated title */}
                  <h1 className="text-7xl md:text-8xl font-black mb-6 animate-fade-in-up">
                    <span className="text-white drop-shadow-2xl">
                      {slide.title}
                    </span>
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-3xl md:text-4xl text-white mb-8 animate-slide-in-left font-light drop-shadow-lg">
                    {slide.subtitle}
                  </p>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel indicators (dots only) */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === index 
                ? 'w-12 bg-white shadow-glow' 
                : 'w-2 bg-white/50 hover:bg-white/80 hover:w-8'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  )
}