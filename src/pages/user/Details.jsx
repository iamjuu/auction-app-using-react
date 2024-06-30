import React from 'react';
import Bg1 from '../../assets/deatail/b1.jpg'
import Bg2 from '../../assets/deatail/b2.jpg'
import Bg3 from '../../assets/deatail/b3.jpeg'
 
const Details = () => {
  return (
    <>
    <div className='flex flex-col mb-10 mt-10 gap-5'>   

   
     <div className=' justify-center  flex'>  
    <div className='  w-96 h-80  rounded-lg md:w-[500px] rounded-lx lg:w-[700px] '>
      <img className='' src={Bg1} alt="" />
    </div>
    </div>


    <div className='flex  gap-10  flex-wrap justify-center '>
    <div className='  w-44 h-44 rounded-lg  '>
      <img src={Bg1} alt="pi1" />
    </div>
    <div className='w-44 h-44  rounded-lg '>
      <img src={Bg2} alt="pic1" />
    </div>
    <div className='w-44 h-44 bg-red-300  rounded-lg '>
      <img src="" alt="pic2" />
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
