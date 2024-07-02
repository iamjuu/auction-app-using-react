import React, { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5'; // Importing IoMenuOutline from react-icons/io5

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 ${
          isOpen ? '' : 'hidden'
        } md:block`}
      >
        <div className="p-4">
          {/* Sidebar Content */}
          <h1 className="text-lg font-semibold mb-4">Dashboard</h1>
          <ul>
           
          <li className="py-2">
              <a href="#" className="block">user</a>
            </li>  
            <li className="py-2">
              <a href="#" className="block">auction</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${isOpen ? 'flex-col' : 'flex'}`}>
        {/* Navbar */}
        <div className="bg-gray-200 p-4">
          <button
            className="block md:hidden"
            onClick={toggleSidebar}
          >
            <IoMenuOutline className="h-6 w-6 text-gray-600" /> {/* Using IoMenuOutline from react-icons */}
          </button>
        </div>

        {/* Page Content */}
        <div className="p-4 grid grid-cols-4 gap-4">
          <div className="w-44 h-44 bg-blue-500 text-white flex items-center justify-center">
            Box 1
          </div>
          <div className="w-44 h-44 bg-red-500 text-white flex items-center justify-center">
            Box 2
          </div>
          <div className="w-44 h-44 bg-green-500 text-white flex items-center justify-center">
            Box 3
          </div>
          <div className="w-44 h-44 bg-yellow-500 text-black flex items-center justify-center">
            Box 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
