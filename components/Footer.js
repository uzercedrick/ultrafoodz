export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Footer top - Logo and info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img 
              src="/logo.png" 
              alt="UltraFood Logo" 
              className="h-12 w-auto"
            />
            <h2 className="text-2xl font-bold">ULTRAFOOD</h2>
          </div>

          {/* Social links or info */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
          </div>

        </div>

        {/* Footer bottom - Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 UltraFood. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}