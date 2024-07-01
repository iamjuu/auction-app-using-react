import React from 'react';
import Bg1 from "../../assets/deatail/b2.jpg"
import Bg2 from "../../assets/deatail/b3.jpeg"
import Bg3 from "../../assets/deatail/b4.jpeg"
import Bg4 from '../../assets/deatail/b4.jpeg'
import Bg5 from '../../assets/deatail/th (1).jpeg'
// import Bg6 from "../../assets/deatail/th ().jpeg"
import Bg7 from "../../assets/deatail/b1.jpg"
import Bg8 from '../../assets/deatail/th (4).jpeg'
import Bg9 from '../../assets/deatail/th (3).jpeg'
import Bg10 from '../../assets/deatail/th (2).jpeg'
import Clock from "../user/../user/clock"

const Details = () => {
  return (
    <>
    <div >
      < Clock />
    </div>
    <div className='flex flex-col mb-10 mt-10 gap-5'>   

   
     <div className=' justify-center  flex'>  
    <div className='   bg-black  rounded-lg md:w-[500px] rounded-lx lg:w-[700px] '>
      <img className='rounded-lg' src={Bg4} alt="" />
    </div>
    </div>

    <div className="flex gap-3 flex-wrap justify-center">
    <div className="w-44 h-44 rounded-lg overflow-hidden">
    <img src={Bg2} alt="pic1" className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-110" />
  </div>
  <div className="w-44 h-44 rounded-lg overflow-hidden">
    <img src={Bg1} alt="pic1" className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-110" />
  </div>
  <div className="w-44 h-44 rounded-lg overflow-hidden">
    <img src={Bg7} alt="pic2" className="w-full h-full object-cover transition duration-700 ease-in-out hover:scale-110" />
  </div>
</div>

    <div className=' text-center p-2'>
<p>price: 2,000,00</p>
<p>place:kannur</p>
<p>address: kannur beach road</p>
    </div>
    </div>
    </>
  );
}

export default Details;
