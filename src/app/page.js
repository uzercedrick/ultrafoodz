import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import AboutSection from '@/sections/AboutSection'
import InfoSections from '@/sections/InfoSections'
import BrandsSection from '@/sections/BrandsSections'
import HistorySection from '@/sections/HistorySection'
import MapSection from '@/sections/MapSection'
import Footer from '@/sections/Footer'
import ScrollToTop from '@/components/ScrolltoTop'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <InfoSections />
      <BrandsSection />
      <HistorySection />
      <MapSection />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
