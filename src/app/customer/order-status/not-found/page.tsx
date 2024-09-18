// src/pages/order-not-found.tsx
import { CustomButton } from '@/components/buttons/CustomButton';
import Link from 'next/link';
import React from 'react';

const OrderNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Message */}
      <h1 className="text-4xl font-bold text-black mb-4">
        Oops! Order Not Found
      </h1>
      <p className="text-lg text-black mb-6 text-center">
        We can't seem to find the order you're looking for. No worries, let's get you back to the menu!
      </p>

      {/* Call to Action Buttons */}
      <div className="space-x-4">
        <CustomButton linkPath="/" customClassname='bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300' label='View Menu' />
      </div>
    </div>
  );
};

export default OrderNotFound;
