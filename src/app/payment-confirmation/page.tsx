'use client';

import { useState } from 'react';
import { FaCheckCircle, FaDownload, FaPrint, FaArrowLeft, FaShieldAlt, FaTruck, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PaymentConfirmationPage() {
  const [orderDetails] = useState({
    orderNumber: 'DX' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    currency: 'Iraqi Dinar',
    amount: '100,000 IQD',
    price: '$381 AUD',
    quantity: 1,
    total: '$381 AUD',
    customerName: 'John Smith',
    email: 'john.smith@email.com',
    address: '123 Main Street, Sydney, NSW 2000, Australia',
    paymentMethod: 'Credit Card',
    transactionId: 'TXN' + Math.random().toString(36).substr(2, 12).toUpperCase(),
    orderDate: new Date().toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  });

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadReceipt = () => {
    // In a real application, this would generate and download a PDF receipt
    alert('Receipt download functionality would be implemented here');
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

          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-green-500 text-4xl" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thank you for your order. Your payment has been processed successfully and your order is being prepared for shipment.
            </p>
          </div>

          {/* Order Confirmation Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Order Confirmation</h2>
              <div className="flex space-x-4">
                <button 
                  onClick={handlePrint}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  <FaPrint className="mr-2" />
                  Print
                </button>
                <button 
                  onClick={handleDownloadReceipt}
                  className="flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                >
                  <FaDownload className="mr-2" />
                  Download Receipt
                </button>
              </div>
            </div>

            {/* Order Details Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Order Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Number:</span>
                    <span className="font-semibold text-gray-900">{orderDetails.orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Date:</span>
                    <span className="font-semibold text-gray-900">{orderDetails.orderDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Currency:</span>
                    <span className="font-semibold text-gray-900">{orderDetails.currency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold text-gray-900">{orderDetails.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantity:</span>
                    <span className="font-semibold text-gray-900">{orderDetails.quantity}</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-gray-600 font-semibold">Total Amount:</span>
                    <span className="font-bold text-orange-600 text-lg">{orderDetails.total}</span>
                  </div>
                </div>
              </div>

              {/* Payment & Shipping Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment & Shipping</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-semibold text-gray-900">{orderDetails.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transaction ID:</span>
                    <span className="font-semibold text-gray-900">{orderDetails.transactionId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer:</span>
                    <span className="font-semibold text-gray-900">{orderDetails.customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-semibold text-gray-900">{orderDetails.email}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Shipping Address:</span>
                    <p className="font-semibold text-gray-900 mt-1">{orderDetails.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">What Happens Next?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-blue-500 text-2xl" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Order Processing</h4>
                <p className="text-gray-600 text-sm">
                  Your order is being verified and prepared for shipment. This usually takes 1-2 business days.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTruck className="text-orange-500 text-2xl" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Secure Shipping</h4>
                <p className="text-gray-600 text-sm">
                  Your currency will be shipped via registered mail with tracking. Delivery takes 3-7 business days.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-green-500 text-2xl" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Order Updates</h4>
                <p className="text-gray-600 text-sm">
                  You&apos;ll receive email updates about your order status and tracking information.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about your order, please don&apos;t hesitate to contact our support team.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:support@dinarexchange.com" className="text-orange-600 hover:text-orange-700 font-semibold">
                support@dinarexchange.com
              </a>
              <span className="text-gray-400">|</span>
              <a href="tel:+61212345678" className="text-orange-600 hover:text-orange-700 font-semibold">
                +61 2 1234 5678
              </a>
            </div>
          </div>

          {/* Continue Shopping */}
          <div className="text-center mt-8">
            <a 
              href="/order" 
              className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}