'use client';

// Removed React icons - using SVG icons instead
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <Logo size="sm" />
            <p className="text-gray-300 text-sm leading-relaxed">
              New Zealand&apos;s most trusted Iraqi Dinar exchange platform. We provide authentic banknotes with guaranteed security and fast delivery.
            </p>
            <div className="flex items-center space-x-2">
              <svg className="text-orange-600 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">100% Secure & Authentic</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="text-orange-600 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                </svg>
              <span className="text-sm">We only accept payment via Bank Transfer.</span>
            </div>
            <div className="text-sm text-gray-300">
              We accept payment via Bank Transfer only.
            </div>
            <div className="flex items-center space-x-2">
              <svg className="text-orange-600 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              <span className="text-sm">Auckland New Zealand</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/buy-dinars" className="text-gray-300 hover:text-orange-500 transition-colors">Buy Iraqi Dinar</Link></li>
              <li><Link href="/zimbabwe-dollar" className="text-gray-300 hover:text-orange-500 transition-colors">Buy Zimbabwe Dollar</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-orange-500 transition-colors">Testimonials</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-orange-500 transition-colors">FAQ&apos;s</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-orange-500 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="text-orange-600 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-300">+64 9 872 4693</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="text-orange-600 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-300">+61 417 460 236</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="text-orange-600 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-300">dinars@dinarexchange.co.nz</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="text-orange-600 w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Auckland New Zealand</span>
              </div>
            </div>
          </div>

          {/* Payment & Security */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Payment & Security</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <svg className="text-orange-600 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">Secure Payment Processing</span>
              </div>
              <div className="text-sm text-gray-300">
                We only accept payment via Bank Transfer.
              </div>
              <div className="text-sm text-gray-300">
                Access expert insights and guidance from seasoned professionals in the field.
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white font-medium transition-colors mt-4">
                Start Your Order
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-sm text-gray-400">
                © 2024 Dinar Exchange New Zealand. All rights reserved.
              </div>
            </div>
            <div className="text-center">
              <div className="flex space-x-4 text-sm text-gray-400">
                <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-service" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}