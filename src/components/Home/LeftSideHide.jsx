import React, { useState } from "react";
import { PiIslandBold, } from "react-icons/pi";

const LeftSide = () => {
  const [sidebtn, setSidebtn] = useState(false);
  return (
    <div>
      <button className="lg:hidden" onClick={() => setSidebtn(!sidebtn)}>
        {sidebtn ? (
          <div className="w-44 h-44 bg-gray-100 mt-5 ml-5 absolute">
            <ul className="flex flex-col justify-start gap-2 p-2">
              <h4>TYPE OF PROPERTY</h4>
              <li className="hover:bg-[#007bff] hover:text-white p-1">Lands</li>
              <li className="hover:bg-[#007bff] hover:text-white p-1">Buildings</li>
              <li className="hover:bg-[#007bff] hover:text-white p-1">House</li>
              <li className="hover:bg-[#007bff] hover:text-white p-1">Flate</li>
            </ul>
          </div>
        ) : (
          <div className="ml-3 mt-3">
            <PiIslandBold className="text-xl md:hidden" />
          </div>
        )}
      </button>
      <div className="hidden lg:flex bg-grey-300 w-44 h-44 mt-5 ml-5 justify-center items-center">
        <ul className="w-44 h-56 bg-gray-100 p-4">
          <h4 className="font-semibold mb-2">TYPE OF PROPERTY</h4>
          <li className="hover:bg-[#007bff] hover:text-white p-1">Lands</li>
          <li className="hover:bg-[#007bff] hover:text-white p-1">Buildings</li>
          <li className="hover:bg-[#007bff] hover:text-white p-1">House</li>
          <li className="hover:bg-[#007bff] hover:text-white p-1">Flate</li>
          <li ><button>Sort</button></li>
          <li> <button>Filter</button></li>
        </ul>
      </div>
      
    </div>
  );
};

export default LeftSide;
