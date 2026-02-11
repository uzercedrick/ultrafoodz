"use client"
import { useState, useEffect } from 'react'

export default function Header({ scrollToSection, activeSection }) {
  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'info', label: 'PURPOSE' },
    { id: 'brands', label: 'BRANDS' },
    { id: 'history', label: 'HISTORY' },
    { id: 'map', label: 'CLIENTS' },
  ]

  const [underlineStyle, setUnderlineStyle] = useState({})

  // Update underline position when active section changes
  useEffect(() => {
    const activeElement = document.querySelector(`[data-section="${activeSection}"]`)
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      })
    }
  }, [activeSection])

  return (
    <header className="bg-[#6F8054] border-b border-[#5a6944] fixed w-full top-0 z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('hero')
            }} 
            className="flex items-center space-x-3"
          >
            <img
              src="/logo.png"
              alt="Ultrafood Logo"
              className="h-12 w-auto object-contain"
            />
            <h1 className="text-xl md:text-2xl font-bold tracking-wide text-black">
              ULTRAFOOD
            </h1>
          </a>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-sm font-medium relative">
              
              {/* Animated underline */}
              <li
                className="absolute bottom-0 h-0.5 bg-white transition-all duration-300 ease-out"
                style={{
                  ...underlineStyle,
                  bottom: '-4px',
                }}
              />
              
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    data-section={item.id}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                    className={`
                      transition-colors duration-300 px-1 py-2 cursor-pointer
                      ${activeSection === item.id 
                        ? 'text-white font-semibold' 
                        : 'text-black/80 hover:text-white'
                      }
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}