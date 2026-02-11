export default function Header() {
  return (
    <header className="bg-[#6f8054] border-b border-[#5a6944]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Image Only */}
          <a href="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Ultrafood Logo"
              className="h-12 w-auto object-contain"
            />
            <h1 className="text-xl md:text-2xl font-bold tracking-wide text-black">
              ULTRAFOOD
            </h1>
          </a>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-sm font-medium">
              <li>
                <a href="#about" className="text-black border-b-2 border-white pb-1">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#purpose" className="text-black/80 hover:text-black">
                  PURPOSE
                </a>
              </li>
              <li>
                <a href="#strength" className="text-black/80 hover:text-black">
                  STRENGTH
                </a>
              </li>
              <li>
                <a href="#brands" className="text-black/80 hover:text-black">
                  BRANDS
                </a>
              </li>
              <li>
                <a href="#history" className="text-black/80 hover:text-black">
                  HISTORY
                </a>
              </li>
              <li>
                <a href="#clients" className="text-black/80 hover:text-black">
                  CLIENTS
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}