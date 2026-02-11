import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import InfoSections from './components/InfoSections'
import BrandsSection from './components/BrandsSections' 
import HistorySection from './components/HistorySection'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrolltoTop' 
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
