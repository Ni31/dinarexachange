'use client';

import { useState, useEffect } from 'react';
// Removed React icons - using SVG icons instead
import Footer from './Footer';
import Header from './Header';

export default function HomeClient() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAnimationStopped, setIsAnimationStopped] = useState(false);
  
  const reviews = [
    {
      name: "Emma",
      location: "from Brisbane",
      rating: "★★★★★",
      comment: "Excellent service, highly recommended!",
      time: "2 days ago",
      verified: true
    },
    {
      name: "David",
      location: "from Adelaide",
      rating: "★★★★★",
      comment: "just ordered 2 Million IQD!",
      time: "5 minutes ago",
      verified: true,
      purchase: "Verified Purchase"
    },
    {
      name: "Sarah M.",
      location: "from Sydney",
      rating: "★★★★★",
      comment: "Fast delivery and authentic currency. Highly recommended!",
      time: "1 week ago",
      verified: true
    },
    {
      name: "Mike R.",
      location: "from Melbourne",
      rating: "★★★★★",
      comment: "Excellent service and competitive rates. Will order again!",
      time: "3 days ago",
      verified: true
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000); // Change review every 4 seconds
    
    return () => clearInterval(interval);
  }, [reviews.length]);
  
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
            "logo": "https://dinarexchange.com.au/logo.svg",
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
        <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12 sm:py-16 lg:py-24 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-poppins animate-fade-in-up opacity-0 animation-delay-200">
                  Welcome to <span className="text-orange-500 animate-pulse">Dinar Exchange</span> New Zealand
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 font-poppins animate-fade-in-up opacity-0 animation-delay-400">
                  Your Premier Hub for Iraqi Dinar Transactions
                </h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto font-poppins animate-fade-in-up opacity-0 animation-delay-600 px-4">
                  Your reliable and trusted partner for Iraqi Dinar transactions. Whether you&apos;re an experienced investor or currency collector, our platform is tailored to your needs.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up opacity-0 animation-delay-800 px-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 font-poppins transform hover:scale-105 hover:shadow-lg">
                  Buy <span className="text-white">Iraqi Dinars</span> Now
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 font-poppins transform hover:scale-105 hover:shadow-lg">
                  View Pricing
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 px-4">
                <div className="text-center animate-fade-in-up opacity-0 animation-delay-1000 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounce-slow">
                    <svg className="text-white w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-sm sm:text-lg font-bold text-orange-500 mb-1 sm:mb-2 font-poppins">100% Authentic</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-poppins">Certificate with every order</div>
                </div>
                <div className="text-center animate-fade-in-up opacity-0 animation-delay-1200 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounce-slow animation-delay-200">
                    <svg className="text-white w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                  </div>
                  <div className="text-sm sm:text-lg font-bold text-orange-500 mb-1 sm:mb-2 font-poppins">4.8 Rated</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-poppins">Verified customer reviews</div>
                </div>
                <div className="text-center animate-fade-in-up opacity-0 animation-delay-1400 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounce-slow animation-delay-400">
                    <svg className="text-white w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-sm sm:text-lg font-bold text-orange-500 mb-1 sm:mb-2 font-poppins">NZ Registered</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-poppins">Secure delivery across New Zealand</div>
                </div>
                <div className="text-center animate-fade-in-up opacity-0 animation-delay-1600 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounce-slow animation-delay-600">
                    <svg className="text-white w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-sm sm:text-lg font-bold text-orange-500 mb-1 sm:mb-2 font-poppins">10+ Years</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-poppins">Trusted business in operation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. Buy Iraqi Dinars Section (Pricing) --- (MOVED HERE AS REQUESTED) */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-poppins">Buy Iraqi Dinars</h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-poppins leading-relaxed px-4">
                Choose from our range of authentic Iraqi Dinar packages with guaranteed authenticity and secure delivery. All banknotes come with a certificate of authenticity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 text-center hover:shadow-md hover:border-orange-300 transition-all duration-300 hover:-translate-y-1">
                <div className="text-base sm:text-lg font-semibold text-gray-900 mb-2">25,000 IQD</div>
                <div className="text-lg sm:text-xl font-bold text-gray-900 mb-3">$186</div>
                <button className="w-full bg-black hover:bg-gray-800 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                  Order Now
                </button>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 text-center hover:shadow-md hover:border-orange-300 transition-all duration-300 hover:-translate-y-1">
                 <div className="text-base sm:text-lg font-semibold text-gray-900 mb-2">50,000 IQD</div>
                 <div className="text-lg sm:text-xl font-bold text-orange-600 mb-3">$281</div>
                 <button className="w-full bg-black hover:bg-gray-800 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                    Order Now
                  </button>
               </div>
              
              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-3 sm:p-4 text-center relative hover:shadow-lg hover:border-orange-400 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 sm:px-3 py-1 rounded text-xs font-medium animate-pulse">
                  Most Popular
                </div>
                <div className="text-base sm:text-lg font-semibold text-gray-900 mb-2 mt-2">75,000 IQD</div>
                <div className="text-lg sm:text-xl font-bold text-orange-600 mb-3">$325</div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                  Order Now
                </button>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 text-center hover:shadow-md hover:border-orange-300 transition-all duration-300 hover:-translate-y-1">
                 <div className="text-base sm:text-lg font-semibold text-gray-900 mb-2">100,000 IQD</div>
                  <div className="text-lg sm:text-xl font-bold text-orange-600 mb-3">$381</div>
                  <button className="w-full bg-black hover:bg-gray-800 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                    Order Now
                  </button>
               </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 text-center hover:shadow-md hover:border-orange-300 transition-all duration-300 hover:-translate-y-1">
                 <div className="text-base sm:text-lg font-semibold text-gray-900 mb-2">200,000 IQD</div>
                  <div className="text-lg sm:text-xl font-bold text-orange-600 mb-3">$656</div>
                  <button className="w-full bg-black hover:bg-gray-800 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                    Order Now
                  </button>
               </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 text-center hover:shadow-md hover:border-orange-300 transition-all duration-300 hover:-translate-y-1">
                 <div className="text-base sm:text-lg font-semibold text-gray-900 mb-2">500,000 IQD</div>
                  <div className="text-lg sm:text-xl font-bold text-orange-600 mb-3">$1,875</div>
                  <button className="w-full bg-black hover:bg-gray-800 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                    Order Now
                  </button>
               </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 text-center hover:shadow-md hover:border-orange-300 transition-all duration-300 hover:-translate-y-1">
                 <div className="text-base sm:text-lg font-semibold text-gray-900 mb-2">1,000,000 IQD</div>
                  <div className="text-lg sm:text-xl font-bold text-orange-600 mb-3">$2,800</div>
                  <button className="w-full bg-black hover:bg-gray-800 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-sm">
                    Order Now
                  </button>
               </div>
            </div>
            
            <div className={`mt-12 mx-auto max-w-md bg-white rounded-lg p-6 text-center shadow-lg border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl ${!isAnimationStopped ? 'animate-pulse' : ''}`}>
              <div className="flex items-center justify-center mb-3">
                <svg className={`w-6 h-6 text-orange-500 mr-2 ${!isAnimationStopped ? 'animate-spin' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                <span className={`text-orange-600 font-bold text-lg ${!isAnimationStopped ? 'animate-pulse' : ''}`}>LIMITED TIME OFFER</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">FREE 20 Billion ZIM</h3>
              <p className="text-gray-600 mb-4">with every 1 Million IQD order</p>
              <div className="bg-orange-50 border border-orange-200 rounded px-4 py-2 inline-block mb-4">
                <span className="text-orange-700 text-sm font-medium">✨ Automatically applied at checkout ✨</span>
              </div>
              <div>
                <button 
                  onClick={() => setIsAnimationStopped(true)}
                  className={`bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all duration-200 transform hover:scale-110 ${!isAnimationStopped ? 'animate-pulse' : ''}`}
                >
                  Order Now & Get Bonus
                </button>
              </div>
            </div>
            
            <div className="mt-12 border-l-4 border-orange-500 p-6 rounded-lg animate-pulse hover:animate-none transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-orange-600 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2 animate-fadeIn">Limited Stock for 2 Million Plus Orders</h3>
                  <div className="text-orange-700 space-y-2">
                    <p className="font-medium animate-slideInLeft">Please call us before placing any order of 2 Million and above.</p>
                    <p className="text-sm animate-slideInLeft" style={{animationDelay: '0.2s'}}>There might be slight delays in shipping.</p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <a href="tel:0417460236" className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 animate-slideInUp hover:shadow-md">
                        <svg className="w-4 h-4 mr-2 animate-spin hover:animate-none" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call 0417 460 236
                      </a>
                      <a href="tel:1300856881" className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 animate-slideInUp hover:shadow-md" style={{animationDelay: '0.3s'}}>
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
            <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - BUYING DINAR NOW and OUR GUARANTEE */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-orange-100 to-orange-200 text-gray-800 p-8 rounded-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-white p-3 rounded-full mr-4">
                    <svg className="text-orange-600 text-xl w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                    <h3 className="text-2xl font-bold">BUYING DINAR NOW</h3>
                  </div>
                  <p className="text-lg mb-6">
                    We guarantee the best rate for buying Iraqi Dinar.
                  </p>
                  <button className="text-orange-600 px-6 py-3 rounded-lg font-bold border border-orange-300 hover:border-orange-400 hover:scale-105 transform transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md">
                      Start Your Order
                  </button>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-orange-200 text-gray-800 p-8 rounded-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-white p-3 rounded-full mr-4">
                    <svg className="text-orange-600 text-xl w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                    <h3 className="text-2xl font-bold">OUR GUARANTEE</h3>
                  </div>
                  <p className="text-lg mb-6">
                    Certificate of authenticity that guarantees the dinars are not counterfeit.
                  </p>
                  <button className="bg-gradient-to-r from-orange-300 to-orange-400 text-white px-6 py-3 rounded-lg font-bold hover:from-orange-400 hover:to-orange-500 hover:scale-105 transform transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md">
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
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-300">
                      <svg className="text-white text-2xl w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">100% Authentic</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-poppins">
                      Every banknote comes with a certificate of authenticity
                    </p>
                  </div>
                  
                  <div className="rounded-lg p-6 border">
                  <div className="text-orange-600 mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Delivery</h3>
                  <p className="text-gray-600">Fast and secure delivery to Australia and New Zealand.</p>
                </div>
                  
                  <div className="rounded-lg p-6 border">
                  <div className="text-orange-600 mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Rates</h3>
                  <p className="text-gray-600">We offer the most competitive Iraqi Dinar exchange rates in the market.</p>
                </div>
                  
                  <div className="rounded-lg p-6 border">
                  <div className="text-orange-600 mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic Currency</h3>
                  <p className="text-gray-600">All our Iraqi Dinars come with certificates of authenticity.</p>
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
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <div className="text-orange-600 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency at its Core</h3>
                <p className="text-gray-600">
                  Our commitment to transparency ensures that every transaction is precise, reliable, and aligned with your expectations.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <div className="text-orange-600 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Updates</h3>
                <p className="text-gray-600">
                  Stay ahead of the curve with reliable updates on the Iraqi Dinar revaluation and broader market trends.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <div className="text-orange-600 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">
                  Access expert insights and guidance from seasoned professionals in the field.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <div className="text-orange-600 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Outstanding Reputation</h3>
                <p className="text-gray-600">
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
                    <svg key={i} className="text-orange-600 text-xl w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
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
                      <svg className="text-orange-600 mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
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
                      <svg className="text-orange-600 mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                       </svg>
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
                      <svg className="text-orange-600 mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                       </svg>
                      <span className="text-sm text-gray-600">Verified Google Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Large Order Notice */}
            <div className="text-center mt-16 animate-slideUp animate-fadeIn" style={{animationDelay: '0.8s'}}>
              <div className="inline-flex items-center space-x-6 bg-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <span className="font-bold text-gray-900 font-poppins group-hover:text-orange-600 transition-colors duration-300">TRUSTED BY 1000+ CUSTOMERS</span>
                <span className="text-gray-400 animate-pulse">•</span>
                <span className="text-gray-600 font-poppins group-hover:text-gray-800 transition-colors duration-300">NZBN: 123 456 789</span>
                <span className="text-gray-400 animate-pulse" style={{animationDelay: '0.5s'}}>•</span>
                <span className="text-gray-600 font-poppins group-hover:text-gray-800 transition-colors duration-300">NEW ZEALAND REGISTERED BUSINESS</span>
              </div>
            </div>
          </div>
        </section>
        

      </div>
      
      {/* Verified Client Reviews Popup */}
      <div className="fixed bottom-8 left-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-md border border-gray-200/30 p-4 w-80 h-32 z-50 overflow-hidden animate-pulse" style={{animationDelay: '3s'}}>
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-bold text-green-600">Verified Client Reviews</span>
        </div>
        
        <div className="text-xs text-gray-700 mb-2 transition-all duration-500 ease-in-out" key={currentReview}>
          <div className="flex items-center mb-1">
            <div className="flex text-yellow-400 mr-2">
              <span>{reviews[currentReview].rating}</span>
            </div>
            <span className="font-semibold">{reviews[currentReview].name}</span>
            {reviews[currentReview].location && (
              <span className="text-gray-600 ml-1">{reviews[currentReview].location}</span>
            )}
          </div>
          <p className="text-gray-800 animate-fade-in">&ldquo;{reviews[currentReview].comment}&rdquo;</p>
        </div>
        
        <div className="text-xs text-gray-600 border-t border-gray-300/50 pt-2 mb-2">
          {reviews[currentReview].purchase ? (
            <span>✓ {reviews[currentReview].purchase} • {reviews[currentReview].time}</span>
          ) : (
            <span>✓ Verified Purchase • {reviews[currentReview].time}</span>
          )}
        </div>
        
        {/* Review indicators */}
        <div className="flex justify-center space-x-1">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentReview ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </>
  );
}