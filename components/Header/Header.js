"use client"
import { useState, useEffect } from 'react'
import styles from "./Header.module.css"

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
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('hero')
            }} 
            className={styles.logoLink}
          >
            <img
              src="/logo.png"
              alt="Ultrafood Logo"
              className={styles.logoImage}
            />
            <h1 className={styles.logoText}>
              ULTRAFOOD
            </h1>
          </a>

          {/* Navigation */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              
              {/* Animated underline */}
              <li
                className={styles.navUnderline}
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
                      ${styles.navLink}
                      ${activeSection === item.id 
                        ? styles.navLinkActive
                        : styles.navLinkInactive
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
          <button className={styles.mobileMenuBtn}>
            <svg className={styles.mobileMenuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </div>
    </header>
  )
}