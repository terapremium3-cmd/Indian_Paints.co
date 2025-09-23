import { useState } from "react"
import { Menu, X, Palette } from "lucide-react"
import IndianPaintsLogo from "../assets/IndianPaintsLogo1.png"
import ImageIPlogo from "../assets/ImageLogoIP.png"

export default function Navbar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = (section) => {
    scrollToSection(section)
    setIsMenuOpen(false)
  }

  return (
   <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center space-x-2">
        {/* Replace Palette icon with your PNG logo */}
        <img
          src={ImageIPlogo} alt="Indian Paints Logo"
          className="h-10 w-10 object-contain"
        />
        <img
          src={IndianPaintsLogo} alt="Indian Paints Logo"
          className="h-40 w-40 object-contain"
        />
        {/* <span className="text-xl font-bold text-foreground">Indian Paints</span> */}
      </div>

          <div className="hidden md:flex space-x-8">
            {["home", "about", "products", "network", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleClick(section)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              {["home", "about", "products", "network", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleClick(section)}
                  className="block px-3 py-2 text-foreground hover:text-primary"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
