import Header from '../components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              About Dinar Exchange Australia
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Australia&apos;s most trusted currency exchange platform with over 10 years of experience serving customers nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2013, Dinar Exchange Australia is a registered organization serving customers across the country with authentic Iraqi Dinars and Zimbabwe Dollars. We started with a clear mission: to provide Australians with safe, secure, and reliable access to foreign currency exchange services.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As a licensed organization operating under Australian financial regulations, we&apos;ve built a reputation for excellence, authenticity, and professional service. Our dedicated team understands the importance of trust and compliance in currency exchange, and we&apos;ve worked tirelessly to maintain the highest standards of business practice.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">10,000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-500 text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed & Regulated</h3>
                <p className="text-gray-600 text-sm">
                  As a registered organization, we operate under strict Australian financial regulations and maintain full compliance with all regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a professional organization, we&apos;re committed to delivering exceptional currency exchange services while maintaining the highest standards of regulatory compliance, integrity and transparency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust & Integrity</h3>
              <p className="text-gray-600 text-sm">
                As a trusted organization, we build lasting relationships through ethical business practices, regulatory compliance, and transparent communication with all stakeholders.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for excellence in every aspect of our service, from product quality to customer support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600 text-sm">
                Your satisfaction is our priority. We&apos;re here to support you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Dedicated professionals committed to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Doe</h3>
              <p className="text-orange-500 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-600">
                With over 15 years in financial services and currency exchange, John leads our organization in serving the Australian market with professional excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">SM</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Miller</h3>
              <p className="text-orange-500 font-medium mb-4">Chief Operations Officer</p>
              <p className="text-gray-600">
                Sarah oversees our operational excellence, ensuring every transaction meets our organization&apos;s strict quality and security standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">MT</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Thompson</h3>
              <p className="text-orange-500 font-medium mb-4">Head of Client Relations</p>
              <p className="text-gray-600">
                Mike leads our client relations department, ensuring every stakeholder inquiry is handled with the highest level of professionalism and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}