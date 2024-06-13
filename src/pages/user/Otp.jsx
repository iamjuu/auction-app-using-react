import React, { useState, useRef } from 'react';
import Otpimg from '../../assets/main/otp.png'

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '','']);      
  const inputRefs = useRef([]);

  const handleOTPChange = (e, index) => {
    const newOTP = [...otp];
    console.log(newOTP,'newotp');
    newOTP[index] = e.target.value;
    console.log(newOTP[index],'newindex');
    setOtp(newOTP);

    if (e.target.value && index < otp.length-1 ) {
        console.log(inputRefs,'fdgdfh');
      inputRefs.current[index + 1].focus();
      
    }

    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
        <div>
          <img src={Otpimg} className='w-36' alt="" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
        <div className="flex justify-center mb-6">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleOTPChange(e, index)}
              ref={(input) => (inputRefs.current[index] = input

              )}
              className="otp-input w-12 h-12 mr-2 text-center text-2xl font-bold rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>
        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Otp;