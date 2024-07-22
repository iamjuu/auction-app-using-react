import React from "react";
import {
  FaHome,
  FaClipboardList,
  FaEnvelope,
  FaBell,
  FaUser,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed mt-14 flex flex-col  w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-600 h-full text-white transition-all duration-300 z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                Main
              </div>
            </div>
          </li>
          <Link to="/admin/dashboard">
            <li className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <FaHome className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Dashboard
              </span>
            </li>
          </Link>

          <Link to="/admin/userlist">
            <li className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <FaClipboardList className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">User</span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">
                New
              </span>
            </li>
          </Link>

          <Link to="/admin/Messages">
            <li className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <FaEnvelope className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Messages
              </span>
            </li>
          </Link>

          <Link to="/admin/liveauctions">
          <li  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
           
              <span className="inline-flex justify-center items-center ml-4">
                <FaBell className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Live Auction
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                1.2k
              </span>
          </li>
          </Link>
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center mt-5 h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                Settings
              </div>
            </div>
          </li>

          <Link to="/admin/profile">
          <li  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
           
              <span className="inline-flex justify-center items-center ml-4">
                <FaUser className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Profile
              </span>
          </li>
          </Link>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FaCog className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Settings
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
