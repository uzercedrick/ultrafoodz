export default function BrandsSection() {
  const brands = [
    { 
      name: 'Korpala Nordic',
      url: 'https://korpalanordic.com',
      logo: '/brands/korpala-logo.png'
    },
    { 
      name: 'Menu Food',
      url: 'https://menufood.com',
      logo: '/brands/menufood-logo.png'
    },
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            Our <span className="text-gradient">Brands</span>
          </h2>
        </div>

        {/* Logo grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {brands.map((brand, index) => (
            <a
              key={index}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gray-50 rounded-3xl p-12 h-96 flex items-center justify-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white">
                
                {/* Logo placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-9xl text-gray-300 group-hover:text-orange-500 transition-colors duration-500">
                    ✕
                  </div>
                  {/* Replace with: */}
                  {/* <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  /> */}
                </div>

              </div>
              
              {/* Brand name below logo */}
              <p className="text-center mt-6 text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                {brand.name}
              </p>
            </a>
          ))}

        </div>

      </div>
    </section>
  )
}