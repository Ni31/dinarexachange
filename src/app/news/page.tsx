import Link from 'next/link';

export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DE</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Dinar Exchange</h1>
                <p className="text-xs text-gray-500">New Zealand</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Home</Link>
              <Link href="/buy-dinars" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Buy Iraqi Dinar</Link>
              <Link href="/zimbabwe-dollar" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Buy Zimbabwe Dollar</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">About Us</Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">FAQ</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Contact Us</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stay informed with the latest Iraqi Dinar market trends and company updates
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Featured Story</h3>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Market Update</span>
                  <span>•</span>
                  <span>December 15, 2024</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Iraqi Dinar Shows Stability in Q4 2024
                </h2>
                <p className="text-gray-600 mb-6">
                  Recent economic reforms in Iraq have contributed to increased stability in the Iraqi Dinar exchange rates. Our analysis shows positive trends for investors looking at long-term opportunities in the Iraqi currency market.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest News</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest developments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Article 1 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Market Analysis</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Analysis</span>
                  <span>•</span>
                  <span>Dec 12, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Central Bank of Iraq Announces New Monetary Policies
                </h3>
                <p className="text-gray-600 mb-4">
                  The Central Bank of Iraq has introduced new monetary policies aimed at strengthening the Dinar and improving economic stability...
                </p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More →
                </a>
              </div>
            </article>

            {/* News Article 2 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Company News</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Company</span>
                  <span>•</span>
                  <span>Dec 10, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Dinar Exchange NZ Expands Service Offerings
                </h3>
                <p className="text-gray-600 mb-4">
                  We&apos;re excited to announce the expansion of our services to include secure storage solutions and enhanced authentication services...
                </p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More →
                </a>
              </div>
            </article>

            {/* News Article 3 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Investment Tips</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Education</span>
                  <span>•</span>
                  <span>Dec 8, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  5 Key Factors to Consider When Investing in Iraqi Dinars
                </h3>
                <p className="text-gray-600 mb-4">
                  Our investment experts share essential tips for making informed decisions when investing in Iraqi Dinars...
                </p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More →
                </a>
              </div>
            </article>

            {/* News Article 4 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Security Update</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Security</span>
                  <span>•</span>
                  <span>Dec 5, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Enhanced Security Measures for All Transactions
                </h3>
                <p className="text-gray-600 mb-4">
                  We&apos;ve implemented additional security protocols to ensure the highest level of protection for all customer transactions...
                </p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More →
                </a>
              </div>
            </article>

            {/* News Article 5 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Special Offer</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Promotion</span>
                  <span>•</span>
                  <span>Dec 3, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Holiday Special: 15% Discount on Bulk Orders
                </h3>
                <p className="text-gray-600 mb-4">
                  Celebrate the holiday season with our special promotion offering 15% discount on all bulk orders over 2 million IQD...
                </p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More →
                </a>
              </div>
            </article>

            {/* News Article 6 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Community</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">Community</span>
                  <span>•</span>
                  <span>Dec 1, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Customer Success Stories: Meet Our Investors
                </h3>
                <p className="text-gray-600 mb-4">
                  Read inspiring stories from our customers who have successfully navigated their Iraqi Dinar investment journey with us...
                </p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More →
                </a>
              </div>
            </article>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest Iraqi Dinar market updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-100 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find articles that interest you most</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Market Analysis</h3>
              <p className="text-sm text-gray-600">12 Articles</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Company News</h3>
              <p className="text-sm text-gray-600">8 Articles</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Investment Tips</h3>
              <p className="text-sm text-gray-600">15 Articles</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Security Updates</h3>
              <p className="text-sm text-gray-600">6 Articles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DE</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Dinar Exchange</h3>
                  <p className="text-gray-400 text-sm">New Zealand</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted partner for Iraqi Dinar transactions in New Zealand. Licensed, regulated, and committed to excellence.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/buy-dinars" className="text-gray-300 hover:text-white transition-colors">Buy Dinars</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 info@dinarexchange.co.nz</p>
                <p>📞 +64 9 123 4567</p>
                <p>📍 Auckland, New Zealand</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Dinar Exchange New Zealand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}