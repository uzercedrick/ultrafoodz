'use client'
import { useState } from 'react'

export default function HistorySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const timeline = [
    { 
      year: '2010', 
      title: 'The Beginning', 
      description: 'Founded with a simple mission: deliver exceptional food experiences to every customer.',
      icon: ''
    },
    { 
      year: '2015', 
      title: 'Rapid Growth', 
      description: 'Expanded to 50+ locations nationwide, serving thousands of happy customers daily.',
      icon: ''
    },
    { 
      year: '2020', 
      title: 'Digital Revolution', 
      description: 'Launched our advanced online platform, making ordering faster and easier than ever.',
      icon: ''
    },
    { 
      year: '2024', 
      title: 'Industry Leader', 
      description: 'Recognized as the #1 food delivery service with innovations that set new standards.',
      icon: ''
    }
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-6">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
              Our Journey
            </span>
          </div>
          <h2 className="text-6xl font-black mb-6">
            History <span className="text-gradient">Timeline</span>
          </h2>
        </div>

        {/* Timeline dots with connecting line */}
        <div className="relative mb-16">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 -translate-y-1/2 transition-all duration-700"
            style={{ width: `${(activeIndex / (timeline.length - 1)) * 100}%` }}
          ></div>

          {/* Dots */}
          <div className="relative flex justify-between items-center">
            {timeline.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative"
              >
                {/* Dot */}
                <div className={`w-16 h-16 rounded-full border-4 transition-all duration-500 flex items-center justify-center text-2xl ${
                  activeIndex === index 
                    ? 'bg-gradient-to-br from-orange-500 to-red-500 border-orange-500 scale-125 shadow-glow' 
                    : 'bg-white border-gray-300 hover:border-orange-300 hover:scale-110'
                }`}>
                  {activeIndex === index ? (
                    <span className="text-white">{item.icon}</span>
                  ) : (
                    <span className="text-gray-400 group-hover:text-orange-400">{item.icon}</span>
                  )}
                </div>

                {/* Year label */}
                <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-bold transition-all duration-300 ${
                  activeIndex === index ? 'text-orange-600 scale-110' : 'text-gray-500'
                }`}>
                  {item.year}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active content card */}
        <div className="mt-24">
          <div className="card max-w-4xl mx-auto text-center scale-in">
            <div className="text-7xl mb-6">{timeline[activeIndex].icon}</div>
            <div className="text-orange-500 font-bold text-xl mb-2">
              {timeline[activeIndex].year}
            </div>
            <h3 className="text-5xl font-black mb-6 text-gradient">
              {timeline[activeIndex].title}
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {timeline[activeIndex].description}
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center space-x-4 mt-12">
          <button
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="px-8 py-4 bg-gray-200 text-gray-800 font-bold rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-300 transform hover:scale-105 transition-all"
          >
            ← Previous
          </button>
          <button
            onClick={() => setActiveIndex(Math.min(timeline.length - 1, activeIndex + 1))}
            disabled={activeIndex === timeline.length - 1}
            className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>

      </div>
    </section>
  )
}