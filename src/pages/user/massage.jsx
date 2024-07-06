import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const socket = io('http://localhost:5000'); // Replace with your server address

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('sendMessage', currentMessage);
    setCurrentMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="px-4 py-4">
          <div className="mb-4">
            {messages.map((message, index) => (
              <div key={index} className="bg-gray-200 rounded-lg p-2 mb-2">
                {message}
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="flex">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              className="w-full rounded-lg p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
