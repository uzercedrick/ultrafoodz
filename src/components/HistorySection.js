'use client'
import { useState } from 'react'

export default function HistorySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const timeline = [
    { 
      year: '2010', 
      title: 'The Beginning', 
      description: 'Founded with a simple mission: deliver exceptional food experiences to every customer.',
     
    },
    { 
      year: '2015', 
      title: 'Rapid Growth', 
      description: 'Expanded to 50+ locations nationwide, serving thousands of happy customers daily.',
      
    },
    { 
      year: '2020', 
      title: 'Digital Revolution', 
      description: 'Launched our advanced online platform, making ordering faster and easier than ever.',
      
    },
    { 
      year: '2024', 
      title: 'Industry Leader', 
      description: 'Recognized as the #1 food delivery service with innovations that set new standards.',
     
    }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-[#6F8054] font-semibold">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 text-[#364025]">
            History <span className="font-bold">Timeline</span>
          </h2>
        </div>

        {/* TEXT BOX - ABOVE circles - Exactly like wireframe */}
        <div className="bg-[#F5F5F5] rounded-2xl p-12 mb-20 text-center max-w-4xl mx-auto shadow-sm">
          <div className="text-6xl mb-4 text-[#6F8054]">
            {timeline[activeIndex].icon}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#364025] mb-4">
            {timeline[activeIndex].title}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {timeline[activeIndex].description}
          </p>
          <div className="text-sm font-mono text-[#6F8054] mt-6">
            {timeline[activeIndex].year}
          </div>
        </div>

        {/* TIMELINE CIRCLES with YEARS BELOW - Exactly like wireframe */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Connecting line */}
          <div className="absolute top-7 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          {/* Progress line */}
          <div 
            className="absolute top-7 left-0 h-0.5 bg-[#6F8054] transition-all duration-500"
            style={{ width: `${(activeIndex / (timeline.length - 1)) * 100}%` }}
          ></div>

          {/* Circles container */}
          <div className="relative flex justify-between items-center">
            
            {/* Previous button - Circle arrow on LEFT */}
            <button
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#6F8054] disabled:opacity-30 disabled:hover:border-gray-200 transition-all z-20"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Timeline dots */}
            {timeline.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative flex flex-col items-center"
              >
                {/* Circle dot */}
                <div className={`
                  relative z-10 w-14 h-14 rounded-full border-2 bg-white transition-all duration-300
                  ${activeIndex === index 
                    ? 'border-[#6F8054] bg-[#6F8054] scale-110 shadow-md' 
                    : 'border-gray-300 hover:border-[#6F8054] hover:scale-105'
                  }
                `}>
                  {activeIndex === index && (
                    <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                      {item.icon}
                    </span>
                  )}
                </div>

                {/* Year - BELOW the circle - Exactly like wireframe */}
                <span className={`
                  absolute -bottom-8 text-sm font-medium whitespace-nowrap
                  ${activeIndex === index 
                    ? 'text-[#6F8054] font-bold' 
                    : 'text-gray-500 group-hover:text-[#6F8054]'
                  }
                `}>
                  {item.year}
                </span>
              </button>
            ))}

            {/* Next button - Circle arrow on RIGHT */}
            <button
              onClick={() => setActiveIndex(Math.min(timeline.length - 1, activeIndex + 1))}
              disabled={activeIndex === timeline.length - 1}
              className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#6F8054] disabled:opacity-30 disabled:hover:border-gray-200 transition-all z-20"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Optional subtle hint */}
        <div className="text-center mt-24 text-xs text-gray-400">
          • click on dots or arrows to navigate •
        </div>
      </div>
    </section>
  )
}