import React from "react";
import { Link } from "react-router-dom";
import Bg1 from '../../assets/deatail/b1.jpg'
import PriceBtn from "../Home/PriceButton"

const Card = () => {
  return (
    <Link to="/details" className="block mb-8">
<div className="relative bg-white border border-gray-300 rounded-lg shadow-lg  md:max-w-sm">

        <img
          className="object-cover w-full h-80 rounded-t-lg"
          src={Bg1}alt="Demo Image"
        />
        <div className="p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
            Product Title
          </h5>
          <p>$100</p>
          <PriceBtn data={10_000}  />
        </div>
        <div className="absolute top-4 right-4">
          
        </div>
      </div>
    </Link>
  );
};

export default Card;
