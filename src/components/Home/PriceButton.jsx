import React from 'react';

const PriceButton = ({ value }) => {
  return (
    <div>
         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        {value}
      </button>


    </div>
  );
}

export default PriceButton;
