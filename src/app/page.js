import Header from '@/sections/Header'
import Hero from '@/sections/Carousel'
import AboutSection from '@/sections/About'
import InfoSections from '@/sections/Mission'
import BrandsSection from '@/sections/Brands'
import HistorySection from '@/sections/History'
import MapSection from '@/sections/Map'
import Footer from '@/sections/Footer'
import ScrollToTop from '@/components/BacktoTop'

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
