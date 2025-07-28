import Link from 'next/link';

export default function Services() {
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
              <Link href="/zimbabwe-dollar" className="text-blue-600 font-medium">Buy Zimbabwe Dollar</Link>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive Iraqi Dinar services tailored to your investment needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From individual purchases to bulk orders, we provide comprehensive services for all your Iraqi Dinar needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Individual Sales</h3>
              <p className="text-gray-600 mb-6">
                Perfect for personal investors looking to purchase Iraqi Dinars in smaller quantities. Minimum order of 250,000 IQD.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Authentic banknotes</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Certificate of authenticity</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Secure packaging</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Fast delivery</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bulk Orders</h3>
              <p className="text-gray-600 mb-6">
                Ideal for serious investors and dealers. Special pricing available for orders over 2 million IQD with attractive volume discounts.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Volume discounts</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority processing</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom packaging</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authentication Service</h3>
              <p className="text-gray-600 mb-6">
                Professional authentication and verification service for Iraqi Dinars you already own. Get official certificates of authenticity.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Expert verification</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Official certificates</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Detailed reports</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Fast turnaround</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Consultation</h3>
              <p className="text-gray-600 mb-6">
                Expert advice and consultation services for Iraqi Dinar investments. Get professional guidance from our experienced team.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Market analysis</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Investment strategies</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Risk assessment</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Personalized advice</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Storage</h3>
              <p className="text-gray-600 mb-6">
                Professional storage solutions for your Iraqi Dinar investments. Bank-level security with full insurance coverage.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Bank-level security</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Full insurance</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Climate controlled</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 monitoring</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Exchange Services</h3>
              <p className="text-gray-600 mb-6">
                Currency exchange services for Iraqi Dinars. Convert your holdings when needed with competitive rates and transparent fees.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Competitive rates</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Transparent fees</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Quick processing</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Secure transactions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, secure, and straightforward process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Service</h3>
              <p className="text-gray-600">Select the service that best fits your needs from our comprehensive offerings.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Quote</h3>
              <p className="text-gray-600">Receive a detailed quote with transparent pricing and no hidden fees.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Payment</h3>
              <p className="text-gray-600">Make payment through our secure bank transfer system for maximum safety.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Receive Service</h3>
              <p className="text-gray-600">Get your Iraqi Dinars or service delivered securely and promptly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Pricing</h2>
            <p className="text-xl text-gray-600">Transparent pricing for all our services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Tier */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Service</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$0.85</div>
                <p className="text-gray-600">per 1,000 IQD</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> Authentic banknotes</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> Certificate of authenticity</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> Standard shipping</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> Email support</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Premium Tier */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative border-4 border-purple-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Service</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">$0.75</div>
                <p className="text-gray-600">per 1,000 IQD</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> Everything in Basic</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> Express shipping</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> Priority support</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> Volume discounts</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> Investment consultation</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-purple-700 transition-colors">
                Choose Premium
              </button>
            </div>

            {/* VIP Tier */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">VIP Service</h3>
                <div className="text-4xl font-bold text-gold-600 mb-2">$0.65</div>
                <p className="text-gray-600">per 1,000 IQD</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> Everything in Premium</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> Dedicated account manager</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> Secure storage options</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> Custom packaging</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span> 24/7 phone support</li>
              </ul>
              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-xl font-bold hover:from-yellow-600 hover:to-orange-600 transition-colors">
                Go VIP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Services</h2>
            <p className="text-xl text-gray-600">Extra services to enhance your experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Express Delivery</h3>
              <p className="text-gray-600 mb-4">Get your order delivered within 24 hours anywhere in New Zealand.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">+$25</span>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Add to Order</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance Coverage</h3>
              <p className="text-gray-600 mb-4">Full insurance coverage for your shipment up to $50,000 value.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">+$15</span>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">Add Insurance</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authentication Report</h3>
              <p className="text-gray-600 mb-4">Detailed authentication report with high-resolution images and analysis.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-600">+$50</span>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">Add Report</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Consultation</h3>
              <p className="text-gray-600 mb-4">One-on-one consultation with our investment experts (1 hour session).</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-600">$150</span>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">Book Session</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the service that best fits your needs and start your Iraqi Dinar investment journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
              Get Custom Quote
            </Link>
            <Link href="/buy-dinars" className="bg-white/20 backdrop-blur-sm border border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-colors">
              Browse Products
            </Link>
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