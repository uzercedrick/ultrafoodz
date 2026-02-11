export default function Mission() {
  return (
    <div className="bg-gray-50">
      
      {/* Vision Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">VISION</h2>
            <p className="text-gray-600">Description Text - Your vision statement goes here.</p>
          </div>
          <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-400 text-6xl">
            
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-400 text-6xl">
            
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">MISSION</h2>
            <p className="text-gray-600">What we do - Your mission statement.</p>
          </div>
        </div>
      </section>

    </div>
  )
}