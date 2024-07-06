import React from "react";
import Graph from "../user/Graph";
// import Clock from "../user/clock";
import PriceButton from "../../components/Home/PriceButton";
import Bg1 from "../../assets/deatail/b4.jpeg";

const live = () => {
  return (
    <>
<div className=" mb-4 mt-4 border border-gray-300 rounded-lg">

        <div className="  md:flex md:justify-around gap-4 ">
          <div className="w-96 h-80 mt-5  rounded-lg">
            <img  className=" transition duration-700 ease-in-out hover:scale-110  rounded-sm " src={Bg1} alt="" />
          </div>
          <div className="flex  gap-5 mt-5 flex-col">
            <PriceButton value={100000} />
            <PriceButton value={150000} />
            <PriceButton value={200000} />
            <PriceButton value={250000} />
            <PriceButton value={300000} />
          </div>
          <Graph />
        </div>
      </div>

      {/* repeat   */}

      <div className=" mb-4 mt-4 border border-gray-300 rounded-lg">

<div className="  md:flex md:justify-around gap-4 ">
  <div className="w-96 h-80 mt-5  rounded-lg">
    <img  className=" transition duration-700 ease-in-out hover:scale-110  rounded-sm " src={Bg1} alt="" />
  </div>
  <div className="flex  gap-5 mt-5 flex-col">
    <PriceButton value={360000} />
    <PriceButton value={350000} />
    <PriceButton value={100000} />
    <PriceButton value={120000} />
    <PriceButton value={150000} />
  </div>
  <Graph />
</div>
</div>


    </>
  );
};

export default live;
