export default function Brands() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center mb-12">OUR BRANDS</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Brand 1 */}
          <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-400 text-4xl">
            
          </div>
          
          {/* Brand 2 */}
          <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-400 text-4xl">
            
          </div>
          
          {/* Brand 3 */}
          <div className="bg-gray-200 h-48 flex flex-col items-center justify-center">
            <div className="text-gray-400 text-4xl mb-2">✕</div>
            <p className="text-sm font-bold">MENU FOOD</p>
          </div>
          
          {/* Brand 4 */}
          <div className="bg-gray-200 h-48 flex flex-col items-center justify-center">
            <div className="text-gray-400 text-4xl mb-2">✕</div>
            <p className="text-sm font-bold">KORPALA NORDIC</p>
          </div>

        </div>

      </div>
    </section>
  )
}