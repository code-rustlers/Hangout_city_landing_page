import Image from 'next/image'
import React, { useState } from 'react'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    // Wait for animation to complete before scrolling
    setTimeout(() => {
      const element = document.querySelector(href)
      console.log('Looking for:', href, 'Found:', element) // Debug log
      if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - 80 
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      } else {
        console.error('Element not found:', href)
      }
    }, 300)
  }

  // Separate handler for desktop links (no menu close delay needed)
  const handleDesktopLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    const element = document.querySelector(href)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - 60
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <nav className="border-b border-gray-200 sticky top-0 z-50" style={{ backgroundColor: "#F8F6F3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold text-gray-800">
             <Image 
              src="/logo2.png" 
              alt="Hangouts City Logo" 
              width={100}
              height={32}
              className="h-8 w-auto"
            />
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a 
                href="#how-it-works" 
                onClick={(e) => handleDesktopLinkClick(e, '#how-it-works')}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                How it works
              </a>
              <a 
                href="#gallery" 
                onClick={(e) => handleDesktopLinkClick(e, '#gallery')}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Gallery
              </a>
              <a 
                href="#reviews" 
                onClick={(e) => handleDesktopLinkClick(e, '#reviews')}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Reviews
              </a>
              <a 
                href="#faq" 
                onClick={(e) => handleDesktopLinkClick(e, '#faq')}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                FAQ
              </a>
              <a 
                href="#get-started" 
                onClick={(e) => handleDesktopLinkClick(e, '#get-started')}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Get started
              </a>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
      style={{backgroundColor:"#464646"}}
        className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-600">
            <div className="flex items-center">
              <Image 
              src="/logo.png" 
              alt="Hangouts City Logo" 
              width={100}
              height={32}
              className="h-8 w-auto"
            />
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-6 py-8 flex justify-center">
            <ul className="space-y-6 text-center">
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => handleLinkClick(e, '#how-it-works')}
                  className="text-white text-lg hover:text-gray-300 transition block"
                >
                  How it works?
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  onClick={(e) => handleLinkClick(e, '#gallery')}
                  className="text-white text-lg hover:text-gray-300 transition block"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#reviews" 
                  onClick={(e) => handleLinkClick(e, '#reviews')}
                  className="text-white text-lg hover:text-gray-300 transition block"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a 
                  href="#join-event" 
                  onClick={(e) => handleLinkClick(e, '#join-event')}
                  className="text-white text-lg hover:text-gray-300 transition block"
                >
                  Join an event
                </a>
              </li>
              <li>
                <a 
                  href="#join-series" 
                  onClick={(e) => handleLinkClick(e, '#join-series')}
                  className="text-white text-lg hover:text-gray-300 transition block"
                >
                  Join a series
                </a>
              </li>
              <li>
                <a 
                  href="#join-community" 
                  onClick={(e) => handleLinkClick(e, '#join-community')}
                  className="text-white text-lg hover:text-gray-300 transition block"
                >
                  Join the community
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="text-white text-lg hover:text-gray-300 transition block"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar