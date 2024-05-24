import React from 'react';

const Otp = () => {
  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
    <div className="flex justify-center mb-6">
      <input
        type="text"
        maxLength={1}
        className="otp-input w-12 h-12 mr-2 text-center text-2xl font-bold rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        maxLength={1}
        className="otp-input w-12 h-12 mr-2 text-center text-2xl font-bold rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        maxLength={1}
        className="otp-input w-12 h-12 mr-2 text-center text-2xl font-bold rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        maxLength={1}
        className="otp-input w-12 h-12 text-center text-2xl font-bold rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
    <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
      Submit
    </button>
  </div>
</div>
  );
}

export default Otp;
