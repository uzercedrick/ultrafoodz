export default function Map() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center mb-12">CUSTOMER AND CLIENTS MAP</h2>

        {/* Map placeholder */}
        <div className="bg-gray-200 h-96 flex items-center justify-center text-gray-400 mb-8">
          <div className="text-center">
            <div className="text-6xl mb-4"></div>
            <p>Replace with Google Maps embed</p>
            {/* To add real map: */}
            {/* <iframe 
              src="https://www.google.com/maps/embed?pb=..."
              className="w-full h-96"
              allowFullScreen
            ></iframe> */}
          </div>
        </div>

        {/* Connect with us */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">CONNECT WITH US</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Company Email */}
            <div>
              <h4 className="font-semibold mb-2">Company Email</h4>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-2 border rounded"
              />
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-2">Contact Info</h4>
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full px-4 py-2 border rounded"
              />
            </div>

            {/* Message */}
            <div>
              <h4 className="font-semibold mb-2">Message Us</h4>
              <input 
                type="text" 
                placeholder="Message" 
                className="w-full px-4 py-2 border rounded"
              />
            </div>

          </div>

          <button className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </div>

      </div>
    </section>
  )
}