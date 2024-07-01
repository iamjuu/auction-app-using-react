import React from "react";
import Graph from "../user/Graph";
import Clock from "../user/clock";
import PriceButton from "../../components/Home/PriceButton";

const live = () => {
  return (
    <>
      <Clock />
      <div className="  md:flex md:justify-around gap-4 ">
        <div className="w-96 h-80 mt-5   bg-slate-300 rounded-lg"></div>
        {/* btn  */}
        <div className="flex  gap-5 mt-5 flex-col">

        <PriceButton value={100000} />
      <PriceButton value={150000} />
      <PriceButton value={200000} />
      <PriceButton value={250000} />
      <PriceButton value={300000}  />
        </div>


        <Graph />
      </div>
    </>
  );
};

export default live;
