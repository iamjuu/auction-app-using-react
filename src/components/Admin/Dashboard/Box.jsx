import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

const Box = () => {
  return (
   <>
     <div className="  rounded-md   w-28 h-32   md:w-64   bg-gray-300">
      <div className= "  justify-around items-center flex h-10 ">
        <FaShoppingBag className="h-7 w-7 text-blue-400" />
        <div className="bg-green-500 rounded-full h-6 px-2  text-white font-semibold text-sm">
          <span className="flex items-center">30%</span>
        </div>
      </div>
      <div className="ml-2 w-full flex-1">
        <div className='flex flex-col '>
          <div className="mt-3 text-3xl font-bold leading-8">4,510</div>
          <div className="mt-1 text-base ">Item Sales</div>
        </div>
      </div>
    </div>
   
   </>
  );
}

export default Box;
