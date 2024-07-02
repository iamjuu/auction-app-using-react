import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';

const IconMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <div className="md:hidden flex items-center">
        <button 
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
          onClick={toggleMenu}
        >
          <FaBars className="h-6 w-6" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="  absolute top-0 left-0 w-44 h-[450px]  bg-[#003D4B] md:hidden">
          <div className=' flex justify-center '>
          <h2 className="text-white">Dashboard</h2>
          

          </div>
          <ul className="space-y-2">
  <li className="hover:bg-[#005282] text-white hover:text-white cursor-pointer py-1 px-2 rounded-lg text-lg">user</li>
  <li className="hover:bg-[#005282] text-white hover:text-white cursor-pointer py-1 px-2 rounded-lg text-lg">auction</li>
  <li className="hover:bg-[#005282] text-white hover:text-white cursor-pointer py-1 px-2 rounded-lg text-lg">sales</li>
</ul>


        </div>
      )}
    </div>
  );
};
export default IconMenu;
