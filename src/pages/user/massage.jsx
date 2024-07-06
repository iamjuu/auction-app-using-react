
import React, { useState } from 'react';
import { BsThreeDots, BsFillChatDotsFill, BsFillGearFill } from 'react-icons/bs'; // Example icons from react-icons
import PRofile from "../../assets/agent/WhatsApp Image 2024-01-31 at 15.20.21_c6aa30ef.jpg"
const ChatComponent = () => {
    const [message, setMessage] = useState('');
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleSendMessage = () => {
      // Implement sending message functionality here
      console.log('Sending message:', message);
      // Optionally, you can reset the message input field after sending
      setMessage('');
    };
  
    return (
      <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen">
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
          <div className="relative flex items-center space-x-4">
            <div className="relative">
              <span className="absolute text-green-500 right-0 bottom-0">
                <BsFillChatDotsFill size={20} />
              </span>
              <img className="w-10 h-10 sm:w-16 sm:h-16 rounded-full" src={PRofile} alt="Profile" />
              </div>
            <div className="flex flex-col leading-tight">
              <div className="text-2xl mt-1 flex items-center">
                <span className="text-gray-700 mr-3">muhammed ajmal</span>
              </div>
              <span className="text-lg text-gray-600">Junior Developer</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
              <BsThreeDots size={24} />
            </button>
            <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
              <BsFillGearFill size={24} />
            </button>
          </div>
        </div>
        <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          {/* Your chat messages here */}
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full rounded-lg border-2 border-gray-200 p-4 focus:outline-none focus:border-blue-500"
            value={message}
            onChange={handleMessageChange}
          />
          <button
            type="button"
            className="w-20 ml-2 inline-flex items-center justify-center rounded-lg border h-14 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    );
  };
  
  export default ChatComponent;
  