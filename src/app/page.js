"use client"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import AboutSection from "../components/AboutSection"
import InfoSections from "../components/InfoSections"
import BrandsSection from "../components/BrandsSection"
import HistorySection from "../components/HistorySection"
import MapSection from "../components/MapSection"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  // Smooth scroll to section with OFFSET for fixed header
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Your header height (h-20 = 80px)
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      
      setActiveSection(sectionId)
    }
  }

  // Track active section based on scroll position with OFFSET
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "info",
        "brands",
        "history",
        "map",
        "footer"
      ]

      const headerOffset = 80
      const scrollPosition = window.scrollY + headerOffset + 20

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Pass scroll function and active section to Header */}
      <Header 
        scrollToSection={scrollToSection} 
        activeSection={activeSection} 
      />
      
      {/* Add IDs to each section for smooth scrolling */}
      <div id="hero">
        <Hero />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="info">
        <InfoSections />
      </div>
      
      <div id="brands">
        <BrandsSection />
      </div>
      
      <div id="history">
        <HistorySection />
      </div>
      
      <div id="map">
        <MapSection />
      </div>
      
      <div id="footer">
        <Footer />
      </div>
      
      <ScrollToTop />
    </div>
  )
}