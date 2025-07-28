import Layout from '../components/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ | Dinar Exchange Australia",
  description: "Frequently asked questions about buying Iraqi Dinars and Zimbabwe Dollars. Get answers about ordering, payment, shipping, and more.",
  keywords: "FAQ, Iraqi Dinar questions, Zimbabwe Dollar questions, currency exchange FAQ",
};

export default function FAQ() {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is Dinar Exchange?",
          answer: "Dinar Exchange is Australia&apos;s most trusted currency exchange platform specializing in Iraqi Dinars (IQD) and Zimbabwe Dollars (ZWL). We provide authentic banknotes with certificates of authenticity and secure delivery across Australia."
        },
        {
          question: "Are your banknotes authentic?",
          answer: "Yes, absolutely. All our banknotes are 100% authentic and come with official certificates of authenticity. We source directly from authorized dealers and guarantee the legitimacy of every note."
        },
        {
          question: "How long have you been in business?",
          answer: "We have been serving customers across Australia for over 8 years, building a reputation for reliability, authenticity, and excellent customer service."
        }
      ]
    },
    {
      category: "Ordering & Payment",
      questions: [
        {
          question: "How do I place an order?",
          answer: "You can place an order through our website by selecting your desired currency and denomination, filling out the order form, and completing the payment process. We accept bank transfers, credit cards, and PayPal."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers (preferred), major credit cards (Visa, MasterCard, American Express), and PayPal. Bank transfers often qualify for additional discounts."
        },
        {
          question: "Do you offer bulk discounts?",
          answer: "Yes, we offer attractive bulk discounts for larger orders. Contact us directly for custom pricing on orders over 1 million IQD or equivalent amounts in other currencies."
        },
        {
          question: "Can I cancel or modify my order?",
          answer: "Orders can be cancelled or modified within 2 hours of placement. After this time, orders enter our processing queue and cannot be changed. Please contact us immediately if you need to make changes."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 3-5 business days within Australia. Express shipping (1-2 business days) is available for an additional fee. All orders are tracked and insured."
        },
        {
          question: "Do you ship internationally?",
          answer: "Currently, we only ship within Australia. We are working on expanding our shipping options to New Zealand and other countries in the near future."
        },
        {
          question: "How is my order packaged?",
          answer: "All orders are packaged discreetly and securely. Currency is placed in protective sleeves, sealed in tamper-evident packaging, and shipped via registered post with full insurance coverage."
        },
        {
          question: "What if my package is lost or damaged?",
          answer: "All shipments are fully insured. In the rare event of loss or damage, we will replace your order at no additional cost. Simply contact us with your tracking number and we&apos;ll resolve the issue immediately."
        }
      ]
    },
    {
      category: "Currency Information",
      questions: [
        {
          question: "What denominations do you offer?",
          answer: "For Iraqi Dinars, we offer 250, 500, 1,000, 5,000, 10,000, and 25,000 IQD notes. For Zimbabwe Dollars, we offer various denominations including the famous 100 Trillion ZWL note."
        },
        {
          question: "Do currency values change?",
          answer: "Yes, currency exchange rates fluctuate daily. Our prices are updated regularly to reflect current market conditions. We recommend checking our website for the most current pricing."
        },
        {
          question: "Can I sell currency back to you?",
          answer: "We primarily focus on selling currency to collectors and investors. For buyback inquiries, please contact us directly to discuss your specific situation."
        }
      ]
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          question: "Is my personal information secure?",
          answer: "Absolutely. We use bank-level SSL encryption to protect all personal and financial information. We never share your data with third parties and comply with all Australian privacy regulations."
        },
        {
          question: "How do you verify authenticity?",
          answer: "Every banknote undergoes rigorous authentication using UV lights, magnification, and other professional verification methods. Our team includes certified currency experts with decades of experience."
        },
        {
          question: "What if I receive counterfeit currency?",
          answer: "This has never happened in our 8+ years of operation, but if it did, we would provide a full refund plus compensation. We stand behind every note we sell with a lifetime authenticity guarantee."
        }
      ]
    }
  ];

  return (
    <Layout>


      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our currency exchange services
          </p>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
              <input 
                type="text" 
                placeholder="Search for answers..."
                className="w-full pl-12 pr-6 py-4 text-lg text-black border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:outline-none transition-colors bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find the information you need quickly</p>
          </div>

          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gray-800 text-white p-6">
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                          <span className="text-gray-600 mr-2 text-xl">❓</span>
                          {faq.question}
                        </h4>
                        <p className="text-gray-600 leading-relaxed ml-7">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



    </Layout>
  );
}