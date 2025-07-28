'use client';


import {
  FaAward,
  FaCertificate,
  FaCheckCircle,
  FaGlobe,
  FaGoogle,
  FaHandshake,
  FaMoneyBillWave,
  FaRocket,
  FaStar,
  FaThumbsUp,
  FaUsers
} from 'react-icons/fa';
import { HiShieldCheck } from 'react-icons/hi';
import { MdLocalShipping, MdVerified } from 'react-icons/md';
import Footer from './Footer';
import Header from './Header';

export default function HomeClient() {
  // const featureOptions = {
  //   secure: [
  //     "SSL 256-bit encryption",
  //     "PCI DSS compliant payment processing",
  //     "Secure vault storage",
  //     "Identity verification protocols",
  //     "Fraud protection systems"
  //   ],
  //   authentic: [
  //     "Certificate of authenticity included",
  //     "UV light verification",
  //     "Serial number tracking",
  //     "Professional grading available",
  //     "Lifetime authenticity guarantee"
  //   ],
  //   delivery: [
  //     "Express delivery (1-2 business days)",
  //     "Standard delivery (3-5 business days)",
  //     "Registered post with tracking",
  //     "Full insurance coverage",
  //     "Signature on delivery"
  //   ]
  // };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dinar Exchange Australia",
            "url": "https://dinarexchange.com.au",
            "logo": "https://dinarexchange.com.au/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+61-417-460-236",
              "contactType": "customer service",
              "areaServed": "AU",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AU",
              "addressRegion": "NSW",
              "addressLocality": "Sydney"
            },
            "sameAs": [
              "https://facebook.com/dinarexchangeau",
              "https://twitter.com/dinarexchangeau"
            ]
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />


        {/* --- 1. Hero Section --- */}
        <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white py-24 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-10">
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight font-poppins animate-fade-in-up opacity-0 animation-delay-200">
                  Welcome to <span className="text-orange-500 animate-pulse">Dinar Exchange</span> New Zealand
                </h1>
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-200 font-poppins animate-fade-in-up opacity-0 animation-delay-400">
                  Your Premier Hub for Iraqi Dinar Transactions
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto font-poppins animate-fade-in-up opacity-0 animation-delay-600">
                  Your reliable and trusted partner for Iraqi Dinar transactions. Whether you&apos;re an experienced investor or currency collector, our platform is tailored to your needs.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up opacity-0 animation-delay-800">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-poppins transform hover:scale-105 hover:shadow-lg">
                  Buy <span className="text-white">Iraqi Dinars</span> Now
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-poppins transform hover:scale-105 hover:shadow-lg">
                  View Pricing
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
                <div className="text-center animate-fade-in-up opacity-0 animation-delay-1000 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                    <MdVerified className="text-white text-2xl" />
                  </div>
                  <div className="text-lg font-bold text-orange-500 mb-2 font-poppins">100% Authentic</div>
                  <div className="text-sm text-gray-300 font-poppins">Certificate with every order</div>
                </div>
                <div className="text-center animate-fade-in-up opacity-0 animation-delay-1200 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow animation-delay-200">
                    <FaThumbsUp className="text-white text-2xl" />
                  </div>
                  <div className="text-lg font-bold text-blue-500 mb-2 font-poppins">4.8 Rated</div>
                  <div className="text-sm text-gray-300 font-poppins">Verified customer reviews</div>
                </div>
                <div className="text-center animate-fade-in-up opacity-0 animation-delay-1400 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow animation-delay-400">
                    <FaGlobe className="text-white text-2xl" />
                  </div>
                  <div className="text-lg font-bold text-green-500 mb-2 font-poppins">NZ Registered</div>
                  <div className="text-sm text-gray-300 font-poppins">Secure delivery across New Zealand</div>
                </div>
                <div className="text-center animate-fade-in-up opacity-0 animation-delay-1600 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow animation-delay-600">
                    <FaAward className="text-white text-2xl" />
                  </div>
                  <div className="text-lg font-bold text-yellow-500 mb-2 font-poppins">10+ Years</div>
                  <div className="text-sm text-gray-300 font-poppins">Trusted business in operation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. Buy Iraqi Dinars Section (Pricing) --- (MOVED HERE AS REQUESTED) */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">Buy Iraqi Dinars</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins leading-relaxed">
                Choose from our range of authentic Iraqi Dinar packages with guaranteed authenticity and secure delivery. All banknotes come with a certificate of authenticity.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                <div className="text-lg font-semibold text-gray-900 mb-2">25,000 IQD</div>
                <div className="text-xl font-bold text-gray-900 mb-3">$186</div>
                <button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                  Order Now
                </button>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                 <div className="text-lg font-semibold text-gray-900 mb-2">50,000 IQD</div>
                 <div className="text-xl font-bold text-gray-900 mb-3">$281</div>
                 <button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                    Order Now
                  </button>
               </div>
              
              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4 text-center relative hover:shadow-lg hover:border-orange-400 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded text-xs font-medium animate-pulse">
                  Most Popular
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2 mt-2">75,000 IQD</div>
                <div className="text-xl font-bold text-orange-600 mb-3">$325</div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                  Order Now
                </button>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                 <div className="text-lg font-semibold text-gray-900 mb-2">100,000 IQD</div>
                  <div className="text-xl font-bold text-gray-900 mb-3">$381</div>
                  <button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                    Order Now
                  </button>
               </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                 <div className="text-lg font-semibold text-gray-900 mb-2">200,000 IQD</div>
                  <div className="text-xl font-bold text-gray-900 mb-3">$656</div>
                  <button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                    Order Now
                  </button>
               </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                 <div className="text-lg font-semibold text-gray-900 mb-2">500,000 IQD</div>
                  <div className="text-xl font-bold text-gray-900 mb-3">$1,875</div>
                  <button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                    Order Now
                  </button>
               </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                 <div className="text-lg font-semibold text-gray-900 mb-2">1,000,000 IQD</div>
                  <div className="text-xl font-bold text-gray-900 mb-3">$2,800</div>
                  <button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                    Order Now
                  </button>
               </div>
            </div>
            
            <div className="mt-12 bg-orange-100 rounded-lg p-6">
              <div className="flex items-center justify-center space-x-4">
                <FaCheckCircle className="text-orange-500 text-xl" />
                <span className="text-orange-800 font-semibold">LIMITED TIME: Free 20 Billion ZIM with 1 Million IQD orders!</span>
              </div>
              <p className="text-center text-orange-700 text-sm mt-2">Automatically applied at checkout • While stocks last</p>
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg animate-pulse hover:animate-none transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-red-800 mb-2 animate-fadeIn">Limited Stock for 2 Million Plus Orders</h3>
                  <div className="text-red-700 space-y-2">
                    <p className="font-medium animate-slideInLeft">Please call us before placing any order of 2 Million and above.</p>
                    <p className="text-sm animate-slideInLeft" style={{animationDelay: '0.2s'}}>There might be slight delays in shipping.</p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <a href="tel:0417460236" className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 animate-slideInUp hover:shadow-md">
                        <svg className="w-4 h-4 mr-2 animate-spin hover:animate-none" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call 0417 460 236
                      </a>
                      <a href="tel:1300856881" className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 animate-slideInUp hover:shadow-md" style={{animationDelay: '0.3s'}}>
                        <svg className="w-4 h-4 mr-2 animate-spin hover:animate-none" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call 1300 856 881
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
           </div>
          </section>

        {/* --- 3. Why Choose Dinar Exchange Section --- */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - BUYING DINAR NOW and OUR GUARANTEE */}
              <div className="space-y-8">
                <div className="bg-orange-500 text-white p-8 rounded-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <FaMoneyBillWave className="text-orange-500 text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold">BUYING DINAR NOW</h3>
                  </div>
                  <p className="text-lg mb-6">
                    We guarantee the best rate for buying Iraqi Dinar.
                  </p>
                  <button className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-600 px-6 py-3 rounded-lg font-bold hover:from-orange-50 hover:to-orange-100 hover:scale-105 transform transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md">
                      Start Your Order
                  </button>
                </div>

                <div className="bg-green-500 text-white p-8 rounded-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <FaCertificate className="text-green-500 text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold">OUR GUARANTEE</h3>
                  </div>
                  <p className="text-lg mb-6">
                    Certificate of authenticity that guarantees the dinars are not counterfeit.
                  </p>
                  <button className="bg-gradient-to-r from-green-100 to-green-200 text-green-600 px-6 py-3 rounded-lg font-bold hover:from-green-50 hover:to-green-100 hover:scale-105 transform transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md">
                      Learn More
                  </button>
                </div>
              </div>

              {/* Right side - Why Choose Us */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins animate-slideUp">
                    Why Choose <span className="text-orange-500">Dinar Exchange</span> New Zealand?
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed font-poppins animate-slideUp" style={{animationDelay: '0.2s'}}>
                    We are committed to providing the highest quality service and authentic currency with complete transparency and security.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group animate-fadeIn" style={{animationDelay: '0.3s'}}>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-300">
                      <HiShieldCheck className="text-white text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">100% Authentic</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-poppins">
                      Every banknote comes with a certificate of authenticity
                    </p>
                  </div>
                  
                  <div className="text-center group animate-fadeIn" style={{animationDelay: '0.4s'}}>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-300">
                      <MdLocalShipping className="text-white text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">Secure Shipping via NZ Post</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-poppins">
                      All orders shipped securely via NZ Post Registered Mail
                    </p>
                  </div>
                  
                  <div className="text-center group animate-fadeIn" style={{animationDelay: '0.5s'}}>
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-300">
                      <FaUsers className="text-white text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">4.8★ Customer Rating</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-poppins">
                      Based on our verified customer reviews
                    </p>
                  </div>
                  
                  <div className="text-center group animate-fadeIn" style={{animationDelay: '0.6s'}}>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-300">
                      <FaAward className="text-white text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">Certificate of Authenticity</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-poppins">
                      Each purchase comes with a certificate of authenticity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. Additional Why Choose Us Details --- */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-32 right-20 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-float"></div>
            <div className="absolute bottom-32 left-20 w-28 h-28 bg-gradient-to-br from-green-500 to-blue-500 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 font-poppins animate-slideUp">
                <span className="bg-gradient-to-r from-slate-700 to-gray-900 bg-clip-text text-transparent">Excellence</span> in Every Detail
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-poppins animate-slideUp" style={{animationDelay: '0.2s'}}>
                Dinar Exchange is a local company assisting customers all over New Zealand to secure Iraqi Dinars safely and securely.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group animate-slideUp" style={{animationDelay: '0.3s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <MdVerified className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Transparency at its Core</h3>
                <p className="text-gray-600 leading-relaxed font-poppins">
                  Our commitment to transparency ensures that every transaction is precise, reliable, and aligned with your expectations.
                </p>
              </div>
              
              <div className="text-center group animate-slideUp" style={{animationDelay: '0.4s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <FaRocket className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Reliable Updates</h3>
                <p className="text-gray-600 leading-relaxed font-poppins">
                  Stay ahead of the curve with reliable updates on the Iraqi Dinar revaluation and broader market trends.
                </p>
              </div>
              
              <div className="text-center group animate-slideUp" style={{animationDelay: '0.5s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <FaHandshake className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Expert Guidance</h3>
                <p className="text-gray-600 leading-relaxed font-poppins">
                  Access expert insights and guidance from seasoned professionals in the field.
                </p>
              </div>
              
              <div className="text-center group animate-slideUp" style={{animationDelay: '0.6s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <FaThumbsUp className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Outstanding Reputation</h3>
                <p className="text-gray-600 leading-relaxed font-poppins">
                  Local New Zealand Based Company with 24/7 Customer Service and 100% Guaranteed Timely Delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. Journey Section (CTA) --- */}
        <section className="py-20 bg-gradient-to-br from-white to-orange-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-br from-orange-500 to-red-500 rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-5xl font-bold text-gray-900 mb-8 font-poppins animate-slideUp">
              Embark on Your Journey with <span className="text-orange-500">Iraqi Dinar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed font-poppins animate-slideUp" style={{animationDelay: '0.2s'}}>
              Whether you want to exchange currency or stay updated on the latest revaluation news, 
              our platform provides the necessary tools and resources for your investment journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slideUp" style={{animationDelay: '0.4s'}}>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-poppins">
                Buy Iraqi Dinars
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-poppins">
                Learn More
              </button>
            </div>
          </div>
        </section>


        
        {/* --- 7. Why Invest in Iraqi Dinar --- (SIMPLE VERSION) */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Invest in Iraqi Dinar?
            </h2>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-3">
                Iraq has oil reserves worth over <strong>$11.6 trillion</strong>. Enhanced production capacity shows potential for currency growth.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition-colors duration-200">
                Buy Iraqi Dinar Now
              </button>
            </div>
          </div>
        </section>
        
        {/* --- 8. Customer Testimonials --- (UPDATED WITH GOOGLE ICON) */}
        {/* Customer Reviews Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-orange-500">4.8</span>
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-orange-400 text-xl animate-pulse" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 font-medium">Based On Real &quot;Verified Client Reviews&quot;</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slideInLeft" style={{animationDelay: '0.1s'}}>
                <p className="text-gray-700 mb-4">&quot;I just had my first interactions with Dinar Exchange. Professional, quick, and excellent service. Will definitely use again.&quot;</p>
                <div className="flex items-center">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">John M.</h4>
                    <div className="flex items-center">
                      <FaGoogle className="text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">Verified Google Review</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slideInLeft" style={{animationDelay: '0.2s'}}>
                <p className="text-gray-700 mb-4">&quot;Recent reply and good product and service. Neil was great to deal with and got back to me quickly.&quot;</p>
                <div className="flex items-center">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Sarah K.</h4>
                    <div className="flex items-center">
                      <FaGoogle className="text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">Verified Google Review</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slideInLeft" style={{animationDelay: '0.3s'}}>
                <p className="text-gray-700 mb-4">&quot;I have been using Dinar Exchange for over four years now, and they continue to provide excellent service and authentic currency.&quot;</p>
                <div className="flex items-center">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">David L.</h4>
                    <div className="flex items-center">
                      <FaGoogle className="text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">Verified Google Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Large Order Notice */}
            <div className="text-center mt-16 animate-slideUp animate-fadeIn" style={{animationDelay: '0.8s'}}>
              <div className="inline-flex items-center space-x-6 bg-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <span className="font-bold text-gray-900 font-poppins group-hover:text-blue-600 transition-colors duration-300">TRUSTED BY 1000+ CUSTOMERS</span>
                <span className="text-gray-400 animate-pulse">•</span>
                <span className="text-gray-600 font-poppins group-hover:text-gray-800 transition-colors duration-300">NZBN: 123 456 789</span>
                <span className="text-gray-400 animate-pulse" style={{animationDelay: '0.5s'}}>•</span>
                <span className="text-gray-600 font-poppins group-hover:text-gray-800 transition-colors duration-300">NEW ZEALAND REGISTERED BUSINESS</span>
              </div>
            </div>
          </div>
        </section>
        

      </div>
      
      <Footer />
    </>
  );
}