import React from 'react';
import Bg4 from '../../assets/deatail/b4.jpeg'
import Bg6 from '../../assets/deatail/th (2).jpeg'
import Bg8 from '../../assets/deatail/th (4).jpeg'

 
const Details = () => {
  return (
    <>
    <div className='flex flex-col mb-10 mt-10 gap-5'>   

   
     <div className=' justify-center  flex'>  
    <div className='  w-96 h-80  rounded-lg md:w-[500px] rounded-lx lg:w-[700px] '>
      <img className='' src={Bg4} alt="" />
    </div>
    </div>

    <div className="flex gap-3 flex-wrap justify-center">
  <div className="w-44 h-44 rounded-lg overflow-hidden">
    <img src={Bg4} alt="pi1" className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110" />
  </div>
  <div className="w-44 h-44 rounded-lg overflow-hidden">
    <img src={Bg6} alt="pic1" className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-110" />
  </div>
  <div className="w-44 h-44 rounded-lg overflow-hidden">
    <img src={Bg8} alt="pic2" className="w-full h-full object-cover transition duration-700 ease-in-out hover:scale-110" />
  </div>
</div>

    <div className='bg bg-blue-100 text-left p-2'>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit error quia minima molestias veritatis reprehenderit nam labore adipisci, illum minus pariatur iusto vero? Ducimus, fugiat. Ipsa adipisci quibusdam ipsam commodi?</p>
    </div>
    </div>
    </>
  );
}

export default Details;
