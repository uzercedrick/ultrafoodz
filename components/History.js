'use client'
import { useState } from 'react'

export default function History() {
  const [activeIndex, setActiveIndex] = useState(0)

  const timeline = [
    { year: '2010', title: 'Foundation', description: 'UltraFood was founded...' },
    { year: '2015', title: 'Expansion', description: 'Expanded to 10 locations...' },
    { year: '2020', title: 'Innovation', description: 'Launched online platform...' },
    { year: '2024', title: 'Today', description: 'Leading food delivery service...' }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center mb-12">HISTORY TIMELINE</h2>

        {/* Timeline dots */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          {timeline.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-12 h-12 rounded-full border-4 transition ${
                activeIndex === index 
                  ? 'bg-blue-600 border-blue-600' 
                  : 'bg-white border-gray-300'
              }`}
            >
              {activeIndex === index && (
                <div className="w-3 h-3 bg-white rounded-full mx-auto"></div>
              )}
            </button>
          ))}
        </div>

        {/* Active content */}
        <div className="text-center max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
          <h3 className="text-5xl font-bold mb-2">{timeline[activeIndex].year}</h3>
          <h4 className="text-2xl font-semibold mb-4">{timeline[activeIndex].title}</h4>
          <p className="text-gray-600">{timeline[activeIndex].description}</p>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="px-6 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setActiveIndex(Math.min(timeline.length - 1, activeIndex + 1))}
            disabled={activeIndex === timeline.length - 1}
            className="px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </div>
    </section>
  )
}