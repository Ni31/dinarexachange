'use client';

// Removed React icons - using SVG icons instead
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OrderPage() {
  const handleCurrencySelect = (currency: string) => {
    if (currency === 'iraqi-dinar') {
      window.location.href = '/buy-dinars';
    } else if (currency === 'zimbabwe-dollar') {
      window.location.href = '/zimbabwe-dollar';
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home Link */}
          <div className="mb-8">
            <Link href="/" className="flex items-center text-gray-600 hover:text-orange-500 transition-colors">
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Currency</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the currency you would like to purchase. We offer authentic banknotes with certificates of authenticity.
            </p>
          </div>

          {/* Currency Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Iraqi Dinar Card */}
            <div 
              className="bg-white rounded-lg shadow-lg p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-orange-500"
              onClick={() => handleCurrencySelect('iraqi-dinar')}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="text-orange-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Iraqi Dinar</h3>
                <p className="text-gray-600 mb-6">
                  Purchase authentic Iraqi Dinar banknotes with certificate of authenticity. Available in multiple denominations.
                </p>
                <div className="bg-orange-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-orange-800 mb-2">Available Denominations:</h4>
                  <div className="text-sm text-orange-700 space-y-1">
                    <div>• 25,000 IQD - $186</div>
                    <div>• 50,000 IQD - $281</div>
                    <div>• 75,000 IQD - $325</div>
                    <div>• 100,000 IQD - $381</div>
                    <div>• 200,000 IQD - $656</div>
                    <div>• 500,000 IQD - $1,875</div>
                    <div>• 1,000,000 IQD - $2,800</div>
                  </div>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Buy Iraqi Dinar
                </button>
              </div>
            </div>

            {/* Zimbabwe Dollar Card */}
            <div 
              className="bg-white rounded-lg shadow-lg p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-orange-500"
              onClick={() => handleCurrencySelect('zimbabwe-dollar')}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="text-orange-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Zimbabwe Dollar</h3>
                <p className="text-gray-600 mb-6">
                  Collectible Zimbabwe Dollar banknotes. These historic banknotes are perfect for collectors and investors.
                </p>
                <div className="bg-orange-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-orange-800 mb-2">Available Denominations:</h4>
                  <div className="text-sm text-orange-700 space-y-1">
                    <div>• 10 Billion ZWD - $250 AUD</div>
                    <div>• 20 Billion ZWD - $500 AUD</div>
                    <div>• 30 Billion ZWD - $750 AUD</div>
                    <div>• 40 Billion ZWD - $1,000 AUD</div>
                    <div>• 50 Billion ZWD - $1,250 AUD</div>
                    <div>• 60 Billion ZWD - $1,500 AUD</div>
                    <div>• 80 Billion ZWD - $2,000 AUD</div>
                    <div>• 100 Billion ZWD - $2,500 AUD</div>
                    <div>• 10 Trillion ZWD - $2,600 AUD</div>
                  </div>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Buy Zimbabwe Dollar
                </button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Why Choose <span className="text-orange-500">Dinar Exchange</span> New Zealand?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">100% Authentic</h4>
                <p className="text-gray-600 text-sm">Every banknote comes with a certificate of authenticity</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Secure Shipping</h4>
                <p className="text-gray-600 text-sm">All orders shipped securely via NZ Post Registered Mail</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Trusted Service</h4>
                <p className="text-gray-600 text-sm">4.8★ customer rating based on verified reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}