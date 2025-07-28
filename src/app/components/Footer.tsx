'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaCreditCard, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="sm" />
            <p className="text-gray-300 text-sm leading-relaxed">
              New Zealand&apos;s most trusted Iraqi Dinar exchange platform. We provide authentic banknotes with guaranteed security and fast delivery.
            </p>
            <div className="flex items-center space-x-2">
              <FaShieldAlt className="text-orange-500" />
              <span className="text-sm">100% Secure & Authentic</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCreditCard className="text-orange-500" />
              <span className="text-sm">We only accept payment via Bank Transfer.</span>
            </div>
            <div className="text-sm text-gray-300">
              We accept payment via Bank Transfer only.
            </div>
            <div className="flex items-center space-x-2">
              <FaGlobe className="text-orange-500" />
              <span className="text-sm">Auckland New Zealand</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-orange-500" />
                <span className="text-gray-300">+64 9 872 4693</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-orange-500" />
                <span className="text-gray-300">+61 417 460 236</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-500" />
                <span className="text-gray-300">dinars@dinarexchange.co.nz</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <span className="text-gray-300">Auckland New Zealand</span>
              </div>
            </div>
          </div>

          {/* Payment & Security */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment & Security</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FaShieldAlt className="text-green-500" />
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