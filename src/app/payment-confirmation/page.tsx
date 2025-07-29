'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PaymentConfirmationPage() {
  const [orderDetails, setOrderDetails] = useState({
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

  useEffect(() => {
    // Load order data from sessionStorage if available
    const storedOrderData = sessionStorage.getItem('orderData');
    if (storedOrderData) {
      try {
        const orderData = JSON.parse(storedOrderData);
        setOrderDetails(prev => ({
          ...prev,
          customerName: `${orderData.firstName} ${orderData.lastName}`,
          email: orderData.email,
          address: `${orderData.address}, ${orderData.city}, ${orderData.state} ${orderData.postcode}, ${orderData.country}`,
          amount: orderData.currencyAmount ? orderData.currencyAmount.split('-')[0] + ' IQD' : prev.amount,
          price: orderData.currencyAmount ? '$' + orderData.currencyAmount.split('-')[1] + ' AUD' : prev.price,
          total: orderData.currencyAmount ? '$' + (parseInt(orderData.currencyAmount.split('-')[1]) * orderData.quantity) + ' AUD' : prev.total,
          quantity: orderData.quantity
        }));
      } catch (error) {
        console.error('Error parsing order data:', error);
      }
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const generateReceiptContent = () => {
    return `
DINAR EXCHANGE AUSTRALIA
OFFICIAL RECEIPT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Order Number: ${orderDetails.orderNumber}
Transaction ID: ${orderDetails.transactionId}
Order Date: ${orderDetails.orderDate}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CUSTOMER INFORMATION:
Name: ${orderDetails.customerName}
Email: ${orderDetails.email}
Shipping Address: ${orderDetails.address}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ORDER DETAILS:
Currency: ${orderDetails.currency}
Amount: ${orderDetails.amount}
Quantity: ${orderDetails.quantity}
Unit Price: ${orderDetails.price}
Total Amount: ${orderDetails.total}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PAYMENT INFORMATION:
Payment Method: ${orderDetails.paymentMethod}
Payment Status: COMPLETED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thank you for your business!
For support: support@dinarexchange.com
Phone: +61 2 1234 5678

This is an official receipt for your records.
`;
  };

  const handleDownloadReceipt = () => {
    try {
      const receiptContent = generateReceiptContent();
      const blob = new Blob([receiptContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Receipt_${orderDetails.orderNumber}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating receipt:', error);
      alert('Error generating receipt. Please try again.');
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

          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="text-orange-600 w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
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
                  <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                </svg>
                  Print
                </button>
                <button 
                  onClick={handleDownloadReceipt}
                  className="flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                >
                  <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
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
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="text-orange-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Order Processing</h4>
                <p className="text-gray-600 text-sm">
                  Your order is being verified and prepared for shipment. This usually takes 1-2 business days.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="text-orange-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                     <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                   </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Secure Shipping</h4>
                <p className="text-gray-600 text-sm">
                  Your currency will be shipped via registered mail with tracking. Delivery takes 3-7 business days.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="text-orange-600 w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                   </svg>
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