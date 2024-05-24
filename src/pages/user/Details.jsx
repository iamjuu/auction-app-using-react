import React from 'react';

const Details = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-3'>
    <div >
      <div className='w-[200px] h-[200px] sm:w-[500px] md:w-[700px] lg:w-[900px] bg-red-100'>
      </div>
    </div>
      <div className='flex flex-wrap justify-center gap-10 sm:w-[700px] h-[300px] sm:h-[200px] '  >
        <div className='w-44 h-44 bg-slate-400'>pic</div>
        <div className='w-44 h-44 bg-slate-400'>pic</div>     
        <div className='w-44 h-44 bg-slate-400'>pic</div>  
      </div>
    </div>
  );
}

export default Details;
