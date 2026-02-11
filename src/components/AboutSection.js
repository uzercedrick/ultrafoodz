export default function AboutSection() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image - BIGGER with animation */}
          <div className="slide-in-left">
            <div className="image-hover">
              <div className="relative h-[600px] bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-9xl text-gray-300 float">✕</div>
                {/* Replace: <img src="/about.jpg" className="w-full h-full object-cover rounded-3xl" /> */}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="slide-in-right">
            <div className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-6">
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                About Us
              </span>
            </div>
            
            <h2 className="text-6xl font-black mb-8 leading-tight">
              Fresh Food,
              <span className="text-gradient"> Delivered Fast</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              We bring farm-fresh ingredients directly to your table. Our commitment 
              to quality and taste has made us the trusted choice for food lovers everywhere.
            </p>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              With over a decade of experience, we've mastered the art of delivering 
              exceptional culinary experiences that delight every palate.
            </p>

            <button className="btn-primary group">
              Learn More 
              <span className="inline-block ml-2 transform group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}