import Layout from '../components/Layout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Buy Iraqi Dinar | Authentic Banknotes | Dinar Exchange Australia",
  description: "Buy authentic Iraqi Dinar banknotes with certificates of authenticity. Secure payment, fast delivery across Australia. Order genuine Iraqi currency today.",
  keywords: "buy Iraqi Dinar, authentic Iraqi banknotes, Iraqi currency, Dinar Australia, currency exchange",
};

export default function BuyDinarsPage() {
  // const packages = [
  //   {
  //     id: 1,
  //     amount: "25,000 IQD",
  //     price: "$25",
  //     originalPrice: "$30",
  //     discount: "17%",
  //     popular: false,
  //     features: ["Certificate of Authenticity", "Standard Shipping", "Email Support"],
  //     description: "Perfect starter package for new collectors"
  //   },
  //   {
  //     id: 2,
  //     amount: "100,000 IQD",
  //     price: "$95",
  //     originalPrice: "$120",
  //     discount: "21%",
  //     popular: true,
  //     features: ["Certificate of Authenticity", "Express Shipping", "Priority Support", "5% Bulk Discount"],
  //     description: "Most popular choice for serious investors"
  //   },
  //   {
  //     id: 3,
  //     amount: "500,000 IQD",
  //     price: "$450",
  //     originalPrice: "$550",
  //     discount: "18%",
  //     popular: false,
  //     features: ["Certificate of Authenticity", "Express Shipping", "VIP Support", "10% Bulk Discount", "Insurance Included"],
  //     description: "Premium package for large investments"
  //   },
  //   {
  //     id: 4,
  //     amount: "1,000,000 IQD",
  //     price: "$850",
  //     originalPrice: "$1,000",
  //     discount: "15%",
  //     popular: false,
  //     features: ["Certificate of Authenticity", "Express Shipping", "VIP Support", "15% Bulk Discount", "Insurance Included", "Free 20 Billion ZIM"],
  //     description: "Ultimate package with exclusive bonuses"
  //   }
  // ];

  return (
    <Layout>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Buy Iraqi Dinar</h1>
              <p className="text-xl mb-8 text-gray-600">
                We are committed to providing you with the most competitive Iraqi Dinar exchange rates. Due to the volatile political and economic situations in Iraq, this currency will undoubtedly fluctuate and we offer great Iraqi Dinar exchange rates.
              </p>
              <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mb-6">
                <p className="font-semibold">Important: All pricing is listed in AUD. Please calculate the exchange rate before you make the payment.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 text-gray-900">
              <h2 className="text-2xl font-bold mb-6">Step 1: Order Details</h2>
              <p className="text-gray-600 mb-6">Fill in your information and select the currency amount you wish to purchase.</p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Mobile Number *</label>
                    <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Country *</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black">
                      <option>Select country</option>
                      <option>Australia</option>
                      <option>New Zealand</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Street Address *</label>
                  <input type="text" placeholder="Enter your full address" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black" />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">City *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">State *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Postcode *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Select Currency Amount *</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black">
                    <option value="">Please select Iraqi Dinar amount</option>
                    <option value="25000-186">25,000 IQD - $186 AUD</option>
                    <option value="50000-281">50,000 IQD - $281 AUD</option>
                    <option value="75000-325">75,000 IQD - $325 AUD</option>
                    <option value="100000-381">100,000 IQD - $381 AUD</option>
                    <option value="200000-656">200,000 IQD - $656 AUD</option>
                    <option value="500000-1875">500,000 IQD - $1,875 AUD</option>
                    <option value="1000000-2800">1,000,000 IQD - $2,800 AUD</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Quantity</label>
                  <input type="number" defaultValue="1" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black" />
                </div>
                
                <Link href="/payment-confirmation" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200 inline-block text-center">
                  Continue to Payment Details
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Order Summary Section */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div></div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <p className="text-gray-600">Select a currency amount to see order summary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Currency Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Iraqi Dinar Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about the Iraqi Dinar and our competitive exchange rates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <div className="text-orange-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Rates</h3>
              <p className="text-gray-600">We offer the most competitive Iraqi Dinar exchange rates in the market.</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <div className="text-orange-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic Currency</h3>
              <p className="text-gray-600">All our Iraqi Dinars come with certificates of authenticity.</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <div className="text-orange-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Delivery</h3>
              <p className="text-gray-600">Fast and secure delivery to Australia and New Zealand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-xl text-gray-600">Contact our team for assistance with your order</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-orange-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak with our currency experts</p>
              <p className="text-orange-600 font-semibold text-lg">+61 2 1234 5678</p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-orange-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Get detailed assistance via email</p>
              <p className="text-orange-600 font-semibold text-lg">info@dinarexchange.com</p>
            </div>
          </div>
        </div>
      </section>


    </Layout>
  );
}