'use client';

import { FaPhone, FaEnvelope, FaUser, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center font-poppins hover:text-orange-300 transition-colors"><FaPhone className="mr-2 text-orange-400" /> 0417 460 236</span>
            <span className="flex items-center font-poppins hover:text-orange-300 transition-colors"><FaPhone className="mr-2 text-orange-400" /> 1300 856 881</span>
            <span className="flex items-center font-poppins hover:text-orange-300 transition-colors"><FaEnvelope className="mr-2 text-orange-400" /> dinars@dinarexchange.com.au</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center font-poppins"><FaGlobe className="mr-1 text-orange-400" /> Australia</span>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded text-white font-medium font-poppins transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="animate-fadeInLeft">
              <Logo size="md" />
            </div>
            <nav className="hidden md:flex space-x-8 animate-fadeInUp animation-delay-200">
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
            <div className="flex items-center space-x-4 animate-fadeInRight animation-delay-400">
              <Link href="/login" className="text-gray-600 hover:text-orange-500 flex items-center font-poppins transition-all duration-300 hover:scale-105">
                <FaUser className="mr-2" /> Login
              </Link>
              <Link href="/order" className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white font-medium font-poppins transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}