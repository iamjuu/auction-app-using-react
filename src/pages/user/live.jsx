import React from 'react';
import Graph from "../user/Graph"
import Clock from "../user/clock"
import Pricebtn from "../../components/Home/PriceButton"

const live = () => {
  return (
    <>
    <Clock />
    <div className='md:flex '>
      <div className='w-96 h-80 mt-5   bg-slate-300 rounded-lg'></div>
      {/* btn  */}


      <Graph />
    </div>
  </>
  

  );
}

export default live;
