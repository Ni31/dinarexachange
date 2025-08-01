'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Combined Header - Top Bar and Navigation */}
      <header className="sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-slate-800 text-white py-1 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="hidden sm:flex items-center space-x-4 lg:space-x-6">
              <span className="flex items-center font-poppins hover:text-orange-300 transition-colors">
                <svg className="mr-1 lg:mr-2 text-orange-600 w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="hidden lg:inline">0417 460 236</span>
                <span className="lg:hidden">0417 460 236</span>
              </span>
              <span className="hidden md:flex items-center font-poppins hover:text-orange-300 transition-colors">
                <svg className="mr-1 lg:mr-2 text-orange-600 w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                1300 856 881
              </span>
              <span className="hidden lg:flex items-center font-poppins hover:text-orange-300 transition-colors">
                <svg className="mr-2 text-orange-600 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                dinars@dinarexchange.com.au
              </span>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <span className="flex items-center font-poppins text-xs">
                <svg className="mr-1 text-orange-600 w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
                <span className="hidden sm:inline">Australia</span>
                <span className="sm:hidden">AU</span>
              </span>
              <button className="bg-orange-500 hover:bg-orange-600 px-2 py-0.5 rounded text-white font-medium font-poppins text-xs transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="hidden sm:inline">Order Now</span>
                <span className="sm:hidden">Order</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="bg-white shadow-lg border-b border-gray-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 lg:py-0">
            <div className="animate-fadeInLeft">
              <Logo size="sm" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 animate-fadeInUp animation-delay-200">
              <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium font-poppins transition-all duration-300 hover:scale-105 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/buy-dinars" className="text-gray-700 hover:text-orange-500 font-medium font-poppins transition-all duration-300 hover:scale-105 relative group">
                Buy Iraqi Dinar
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/zimbabwe-dollar" className="text-gray-700 hover:text-orange-500 font-medium font-poppins transition-all duration-300 hover:scale-105 relative group">
                Buy Zimbabwe Dollar
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500 font-medium font-poppins transition-all duration-300 hover:scale-105 relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-orange-500 font-medium font-poppins transition-all duration-300 hover:scale-105 relative group">
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 font-medium font-poppins transition-all duration-300 hover:scale-105 relative group">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
            
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4 animate-fadeInRight animation-delay-400">
              <Link href="/login" className="text-gray-600 hover:text-orange-500 flex items-center font-poppins transition-all duration-300 hover:scale-105">
                <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Login
              </Link>
              <Link href="/order" className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white font-medium font-poppins transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block">
                Order Now
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Link href="/order" className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 rounded text-white font-medium font-poppins text-sm transition-all duration-300">
                Order
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-orange-500 focus:outline-none focus:text-orange-500 transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md font-medium font-poppins transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/buy-dinars" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md font-medium font-poppins transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Buy Iraqi Dinar
              </Link>
              <Link 
                href="/zimbabwe-dollar" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md font-medium font-poppins transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Buy Zimbabwe Dollar
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md font-medium font-poppins transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/faq" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md font-medium font-poppins transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md font-medium font-poppins transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="border-t border-gray-200 pt-2">
                <Link 
                  href="/login" 
                  className="block px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-md font-medium font-poppins transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="inline mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
        </div>
      </header>
    </>
  );
}