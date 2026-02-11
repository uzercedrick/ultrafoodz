"use client"

import { useState, useEffect } from 'react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('about')
  const [underlineStyle, setUnderlineStyle] = useState({})

  const navItems = [
    { id: 'about', label: 'ABOUT US' },
    { id: 'purpose', label: 'PURPOSE' },
    { id: 'strength', label: 'STRENGTH' },
    { id: 'brands', label: 'BRANDS' },
    { id: 'history', label: 'HISTORY' },
    { id: 'clients', label: 'CLIENTS' },
  ]

  // Smooth scroll function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      setActiveSection(sectionId)
    }
  }

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

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="bg-[#6f8054] border-b border-[#5a6944] fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Image Only */}
          <a href="/" className="flex items-center space-x-3">
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
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`
                      text-black/80 hover:text-black transition-colors duration-300
                      ${activeSection === item.id ? 'text-black font-semibold' : ''}
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}