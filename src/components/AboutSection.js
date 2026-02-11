export default function About() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Image placeholder */}
        <div className="bg-gray-200 h-80 flex items-center justify-center text-gray-400 text-6xl">
          ✕
          {/* Replace with: <img src="/about-image.jpg" className="w-full h-full object-cover" /> */}
        </div>

        {/* Text content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">ABOUT US</h2>
          <p className="text-gray-600 leading-relaxed">
            Description Text - Replace this with your company description. 
            Tell your story, your mission, and what makes UltraFood special.
            This section is fully customizable.
          </p>
        </div>

      </div>
    </section>
  )
}