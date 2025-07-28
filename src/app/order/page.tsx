'use client';

import { FaArrowLeft, FaCoins, FaDollarSign } from 'react-icons/fa';
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
              <FaArrowLeft className="mr-2" />
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
                  <FaCoins className="text-orange-500 text-3xl" />
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
              className="bg-white rounded-lg shadow-lg p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-blue-500"
              onClick={() => handleCurrencySelect('zimbabwe-dollar')}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaDollarSign className="text-blue-500 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Zimbabwe Dollar</h3>
                <p className="text-gray-600 mb-6">
                  Collectible Zimbabwe Dollar banknotes. These historic banknotes are perfect for collectors and investors.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Available Denominations:</h4>
                  <div className="text-sm text-blue-700 space-y-1">
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
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
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