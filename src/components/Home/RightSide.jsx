import React from 'react';

const RightSide = () => {
  return (
    <div className="main flex flex-col gap-5 items-center md:items-start">
    <div className="hidden sm:block w-full max-w-md h-32 bg-slate-400 mt-3 flex items-center justify-center ">
   
   
<span className='text-red-700 font-bold text-xl'>time </span>
<span>:12:3:30</span>
<br />

    <span className='text-lg md:text-x'>price :</span>
<span className="text-lg md:text-md">12,00,000</span>
    </div>
    <div className="hidden sm:block w-full max-w-md h-32 bg-slate-400 mt-3 flex items-center justify-center text-center p-4">
        <p className="text-sm md:text-base">Kannur Town Near cultex kannur, Kerala</p>
    </div>
    <div className="hidden sm:block w-full max-w-md h-44 bg-slate-400 mt-3 flex items-center justify-center text-center p-4">
        <map name="">
            <p>location map here</p>
        </map>
    </div>
</div>

  );
}

export default RightSide;

